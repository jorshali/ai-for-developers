import express from "express";

import { StringOutputParser } from "@langchain/core/output_parsers";
import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";

const app = express();

const chatModel = new ChatOpenAI({});

app.get('/', async (req, res) => {
  const subject = req.query.subject;
  const promptTemplate = ChatPromptTemplate.fromTemplate("Can you tell me about the {subject} in 50 words or less?");
  const parser = new StringOutputParser();

  const chain = promptTemplate.pipe(chatModel).pipe(parser);

  const stream = await chain.stream({
    subject: subject || 'the Beatles'
  });

  for await (const chunk of stream) {
    if (chunk) {
      res.write(chunk);
    }
  }

  res.end();
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});