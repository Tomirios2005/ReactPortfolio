// import Groq from "groq-sdk";
// import {SYSTEM_PROMPT} from "../lib/systemPrompt";
// const groq = new Groq({
//   apiKey: import.meta.env.VITE_GROQ_API_KEY,
//   dangerouslyAllowBrowser: true, // Solo para desarrollo, no usar en producción
// });


// export async function getGroqChatCompletion(prompt:string):Promise<string> {
//   const res= await groq.chat.completions.create({
//     messages: [
//         {role: "system", content: SYSTEM_PROMPT},
//       {
//         role: "user",
//         content: prompt,
//       },
//     ],
//     model: "openai/gpt-oss-20b",
//   });
//   return res.choices[0]?.message?.content || "";
// }