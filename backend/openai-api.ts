import {OpenAI} from "openai";

const client = new OpenAI({
  apiKey: Deno.env.get("OPENAI_API_KEY"),
  dangerouslyAllowBrowser: true,
});

export async function chatGpt(){
  console.log("Chatting with GPT-3...");
  const chatComplete = await client.chat.completions.create({
      messages: [{role: "user", content: "Hello, who are you?"}],
      model: "gpt-3.5-turbo",
  })
  console.log(chatComplete);
  console.log("Chat complete!");
}