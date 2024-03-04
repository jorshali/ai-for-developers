import { DirectoryLoader } from 
  "langchain/document_loaders/fs/directory";
import { TextLoader } from 
  "langchain/document_loaders/fs/text";
import { HNSWLib } from 
  "@langchain/community/vectorstores/hnswlib";
import { OpenAIEmbeddings } from 
  "@langchain/openai";

const loader = new DirectoryLoader(
  "companies",
  {
    ".txt": (path) => new TextLoader(path)
  }
);

const docs = await loader.load();
const embeddings = new OpenAIEmbeddings();

const vectorStore = await HNSWLib.fromDocuments(
  docs, embeddings);

await vectorStore.save('data');