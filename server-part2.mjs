import express from "express";
import { ChatOpenAI } from "@langchain/openai";

const app = express();

const chatModel = new ChatOpenAI({});

app.get('/', async (req, res) => {
  const stream = await chatModel.stream(
    "Tell me about the Beatles " + 
    "in 50 words or less.");

  for await (const chunk of stream) {
    res.write(chunk.content);
  }

  res.end();
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});