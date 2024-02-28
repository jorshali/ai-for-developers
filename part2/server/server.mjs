import express from "express";
import { ChatOpenAI } from "@langchain/openai";
import cors from 'cors';

const app = express();

app.use(cors());

const chatModel = new ChatOpenAI({});

app.get('/', async (request, response) => {
  const stream = await chatModel.stream(
    "Tell me about the Beatles " + 
    "in 50 words or less.");

  for await (const chunk of stream) {
    response.write(chunk.content);
  }

  response.end();
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});