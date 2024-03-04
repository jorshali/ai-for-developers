import { HNSWLib } from 
  "@langchain/community/vectorstores/hnswlib";
import { OpenAIEmbeddings } from 
  "@langchain/openai";

import express from "express";
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

const embeddings = new OpenAIEmbeddings();

const loadedVectorStore = await HNSWLib.load(
  'data', embeddings);

app.get('/', async (request, response) => {
  const resultOne = await loadedVectorStore.similaritySearch(
    "Can you tell me about Acme Corp?", 1);

  response.send(resultOne[0].pageContent);
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});