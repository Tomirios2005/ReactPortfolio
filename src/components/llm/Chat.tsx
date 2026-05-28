import {getGroqChatCompletion} from "../../services/groqService";
import React from "react";
import ReactMarkdown from 'react-markdown';

const Chat =()=>{
    const [response, setResponse] = React.useState<string>("");
    const [prompt, setPrompt] = React.useState<string>("");
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const prompt = formData.get("prompt") as string;
        console.log("Prompt enviado:", prompt);
        const response = await getGroqChatCompletion(prompt);
        setResponse(response);
        setPrompt("");
    }

    return (
        <section id="chat" className="py-16 px-6 max-w-6xl mx-auto">
            <div className="rounded-[2rem] border border-slate-800 bg-slate-900/75 shadow-2xl shadow-slate-950/30 p-8 backdrop-blur-xl">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-8">
                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-purple-400/80 mb-2">AI Assistant</p>
                        <h2 className="text-3xl font-bold text-white">Ask me a question</h2>
                        <p className="mt-2 text-slate-400 max-w-2xl">
                            Use the chat to get quick answers from the API and see how it integrates with the site's design.
                        </p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-[1fr_auto] items-end">
                    <label htmlFor="prompt" className="sr-only">Question</label>
                    <input
                        id="prompt"
                        type="text"
                        name="prompt"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="Enter your question..."
                        className="w-full rounded-3xl border border-slate-700 bg-slate-950/70 px-5 py-4 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                    />
                    <button
                        type="submit"
                        className="inline-flex justify-center rounded-3xl bg-purple-500 px-6 py-4 text-sm font-semibold text-white transition hover:bg-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    >
                        Send
                    </button>
                </form>

                <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 text-slate-100">
                    <h3 className="text-xl font-semibold text-white mb-4">Response</h3>
                    {response ? (
                        <div className="max-w-none space-y-4 text-slate-200">
                            <ReactMarkdown>{response}</ReactMarkdown>
                        </div>
                    ) : (
                        <p className="text-slate-500">Your response will appear here after submitting the question.</p>
                    )}
                </div>
            </div>
        </section>
    );
};
export default Chat;