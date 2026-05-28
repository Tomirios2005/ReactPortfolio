import { Arrow } from "https://deno.land/x/oak@v12.6.1/mod.ts"; // Para manejar CORS si es necesario, o usamos el estándar nativo:

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  // Manejar el método OPTIONS (Preflight request de CORS)
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    // 1. Obtener los mensajes que manda el cliente (React)
    const { messages } = await req.json();

    // 2. Traer la API Key de Groq desde las variables de entorno seguras de Supabase
    const apiKey = Deno.env.get('GROQ_API_KEY');
    
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: 'Falta la configuración de GROQ_API_KEY en el servidor.' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // 3. Pegarle a la API de Groq usando fetch nativo
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'openai/gpt-oss-20b', // O el modelo de Groq que prefieras usar
        messages: messages, // Acá ya pasás el array con el SYSTEM_PROMPT y el historial
        temperature: 0.5,
      }),
    });

    const data = await response.json();

    // 4. Devolverle la respuesta de Groq a tu frontend
    return new Response(
      JSON.stringify(data),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});