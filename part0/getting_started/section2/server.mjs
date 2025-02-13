import express from "express";
import { ChatOllama } from "@langchain/ollama";
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const chatModel = new ChatOllama({
  model: 'llama3.2'
});

app.post('/', async (request, response) => {
  const { query } = request.body;

  const stream = await chatModel.stream(query);

  for await (const chunk of stream) {
    response.write(chunk.content);
  }

  response.end();
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});