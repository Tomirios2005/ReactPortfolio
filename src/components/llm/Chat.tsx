import React from "react";
import ReactMarkdown from 'react-markdown';
import { useTranslation } from "react-i18next";

const Chat = () => {
    const { t } = useTranslation();
    const [response, setResponse] = React.useState<string>("");
    const [prompt, setPrompt] = React.useState<string>("");
    const [isLoading, setIsLoading] = React.useState<boolean>(false); // Estado para el loader

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!prompt.trim() || isLoading) return;

        setIsLoading(true);
        console.log("Prompt enviado a Supabase Edge Function:", prompt);

        try {
            // Reemplazá esto con la URL que te dio la CLI de Supabase al deployar
            const SUPABASE_FUNCTION_URL = "https://iijyrqhrqkpgyjtdxzik.supabase.co/functions/v1/portfolio-bot";

            const res = await fetch(SUPABASE_FUNCTION_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    messages: [
                        { role: "user", content: prompt }
                    ]
                }),
            });

            if (!res.ok) {
                throw new Error("Error en la respuesta del servidor");
            }

            const data = await res.json();
            console.log("Respuesta recibida de Supabase Edge Function:", data);
            
            // Estructura estándar de retorno de la API de Groq/OpenAI
            const botText = data.choices[0].message.content;
            setResponse(botText);
            setPrompt("");

        } catch (error) {
            console.error("Error llamando al bot:", error);
            setResponse(t("chat.error"));
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <section id="chat" className="py-16 px-6 max-w-6xl mx-auto">
            <div className="rounded-[2rem] border border-slate-800 bg-slate-900/75 shadow-2xl shadow-slate-950/30 p-8 backdrop-blur-xl">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-8">
                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-purple-400/80 mb-2">{t("chat.kicker")}</p>
                        <h2 className="text-3xl font-bold text-white">{t("chat.title")}</h2>
                        <p className="mt-2 text-slate-400 max-w-2xl">
                            {t("chat.subtitle")}
                        </p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-[1fr_auto] items-end">
                    <label htmlFor="prompt" className="sr-only">{t("chat.question")}</label>
                    <input
                        id="prompt"
                        type="text"
                        name="prompt"
                        value={prompt}
                        disabled={isLoading}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder={isLoading ? t("chat.thinking") : t("chat.placeholder")}
                        className="w-full rounded-3xl border border-slate-700 bg-slate-950/70 px-5 py-4 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition disabled:opacity-50"
                    />
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="inline-flex justify-center rounded-3xl bg-purple-500 px-6 py-4 text-sm font-semibold text-white transition hover:bg-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400 disabled:bg-purple-800 disabled:text-slate-400"
                    >
                        {isLoading ? t("chat.sending") : t("chat.send")}
                    </button>
                </form>

                <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 text-slate-100">
                    <h3 className="text-xl font-semibold text-white mb-4">{t("chat.response")}</h3>
                    {response ? (
                        <div className="max-w-none space-y-4 text-slate-200">
                            <ReactMarkdown>{response}</ReactMarkdown>
                        </div>
                    ) : (
                        <p className="text-slate-500">
                            {isLoading ? t("chat.generating") : t("chat.empty")}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Chat;