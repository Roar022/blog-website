
import Groq from "groq-sdk";


const groqApiKey = process.env.NEXT_PUBLIC_GROQ_API_KEY;
const groq = new Groq({ apiKey: groqApiKey,dangerouslyAllowBrowser: true});

export async function getGroqChatCompletion(prompt) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
    model: "llama3-8b-8192",
  });
}