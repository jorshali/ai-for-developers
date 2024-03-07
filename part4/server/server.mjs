import express from 'express';

import { HNSWLib } from '@langchain/community/vectorstores/hnswlib';
import { ChatOpenAI, OpenAIEmbeddings } from '@langchain/openai';
import cors from 'cors';

import { ChatPromptTemplate } from '@langchain/core/prompts';
import {
  RunnableLambda,
  RunnableMap,
  RunnablePassthrough,
} from '@langchain/core/runnables';
import { StringOutputParser } from '@langchain/core/output_parsers';

const app = express();

app.use(cors());
app.use(express.json());

const loadedVectorStore = await HNSWLib.load(
  'data', new OpenAIEmbeddings());

const retriever = loadedVectorStore.asRetriever(1);

app.get('/', async (request, response) => {
  const prompt = ChatPromptTemplate.fromMessages([
    [
      'ai',
      'Answer the question with company information based ' +
      'on only the following context:\n\n' +
      '{context}'
    ],
    [
      'ai',
      'You are an AI assistant that generates ' +
      'job postings for recruting software developers.  The ' +
      'job posting you generate should include the technical ' +
      'skills specified as well as any additional information ' +
      'requested.  The job post should include a job title, ' +
      'role summary, duties and responsibilities, technology ' +
      'experience required, and education requirements.'
    ],
    ['human', '{question}']
  ]);

  const setupAndRetrieval = RunnableMap.from({
    context: new RunnableLambda({
      func: (input) =>
        retriever.invoke(input).then(
          (response) => response[0].pageContent),
    }).withConfig({ runName: 'contextRetriever' }),
    question: new RunnablePassthrough(),
  });

  const model = new ChatOpenAI({});
  const outputParser = new StringOutputParser();

  const chain = setupAndRetrieval.pipe(prompt)
    .pipe(model)
    .pipe(outputParser);
  
  const stream = await chain.stream(
    'Can you provide a job posting for Acme Corp for a ' +
    'senior developer with 5-7 years of experience?');

  for await (const chunk of stream) {
    if (chunk) {
      response.write(chunk);
    }
  }

  response.end();
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});