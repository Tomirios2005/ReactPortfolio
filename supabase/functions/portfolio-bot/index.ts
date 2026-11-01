import { SYSTEM_PROMPT } from "./systemPrompt.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const NOTIFY_EMAIL = "tomirios2005@gmail.com";
const KEEP_ALIVE = "ping para mantener activo";

type ChatMessage = { role?: string; content?: unknown };

function asText(content: unknown): string {
  if (typeof content === "string") return content;
  if (content == null) return "";
  try {
    return JSON.stringify(content);
  } catch {
    return "";
  }
}

function lastUserQuestion(messages: ChatMessage[]): string {
  for (let i = messages.length - 1; i >= 0; i--) {
    if (messages[i]?.role === "user") return asText(messages[i].content).trim();
  }
  return "";
}

async function saveLog(entry: {
  question: string;
  answer: string | null;
  model: string | null;
  status: string;
  error: string | null;
  email_sent: boolean;
  email_error: string | null;
}) {
  const url = Deno.env.get("SUPABASE_URL");
  const key = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (!url || !key) return;

  const response = await fetch(`${url}/rest/v1/chat_logs`, {
    method: "POST",
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(entry),
  });

  if (!response.ok) {
    console.error("No se pudo guardar el log:", response.status, await response.text());
  }
}

async function sendMail(question: string, answer: string): Promise<string | null> {
  const apiKey = Deno.env.get("RESEND_API_KEY");
  if (!apiKey) return "Falta RESEND_API_KEY";

  const from = Deno.env.get("CHAT_NOTIFY_FROM") ?? "Portfolio <onboarding@resend.dev>";
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [NOTIFY_EMAIL],
      subject: "Nueva pregunta en el portfolio",
      text: `Pregunta:\n${question}\n\nRespuesta:\n${answer}`,
    }),
  });

  if (!response.ok) {
    return `Resend ${response.status}: ${await response.text()}`;
  }
  return null;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  let question = "";

  try {
    const body = await req.json();
    const messages: ChatMessage[] = Array.isArray(body?.messages) ? body.messages : [];
    question = lastUserQuestion(messages);

    const apiKey = Deno.env.get("GROQ_API_KEY");
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: "Falta la configuración de GROQ_API_KEY en el servidor." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const model = "openai/gpt-oss-20b";
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
        temperature: 0.5,
      }),
    });

    const data = await response.json();
    const answer = asText(data?.choices?.[0]?.message?.content);
    const isKeepAlive = question === KEEP_ALIVE;

    if (!isKeepAlive && question) {
      let emailError: string | null = null;
      let emailSent = false;
      if (response.ok && answer) {
        try {
          emailError = await sendMail(question, answer);
          emailSent = emailError === null;
        } catch (error) {
          emailError = error instanceof Error ? error.message : "No se pudo enviar el mail";
        }
      } else if (!response.ok) {
        emailError = "No se envió el mail porque Groq no respondió bien";
      } else {
        emailError = "No se envió el mail porque la respuesta vino vacía";
      }

      try {
        await saveLog({
          question,
          answer: answer || null,
          model,
          status: response.ok ? "ok" : "error",
          error: response.ok ? null : asText(data?.error ?? data).slice(0, 1000),
          email_sent: emailSent,
          email_error: emailError,
        });
      } catch (error) {
        console.error("Error guardando el log:", error);
      }
    }

    return new Response(JSON.stringify(data), {
      status: response.ok ? 200 : response.status,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Error inesperado";
    if (question && question !== KEEP_ALIVE) {
      try {
        await saveLog({
          question,
          answer: null,
          model: null,
          status: "error",
          error: message,
          email_sent: false,
          email_error: "No se envió el mail por un error del chat",
        });
      } catch (logError) {
        console.error("Error guardando el log:", logError);
      }
    }
    return new Response(JSON.stringify({ error: message }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
