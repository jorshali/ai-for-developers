import express from "express";

const app = express();

import { ChatOpenAI } from "@langchain/openai";

const chatModel = new ChatOpenAI({});

app.get('/', async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const response = 
    await chatModel.invoke(
      "Can you simply say 'test'?");

  res.send(response.content);
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});