import express from "express";
import { ChatOllama } from "@langchain/ollama";
import cors from 'cors';

const app = express();

app.use(cors());

const model = new ChatOllama({
  model: 'llama3.2'
});

app.get('/', async (req, res) => {
  const response = 
    await model.invoke(
      "Can you simply say 'test'?");

  res.send(response.content);
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});