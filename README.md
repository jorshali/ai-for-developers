# This repository has been deprecated!

"The Developer's Guide to AI" Is now in early access.  You can pre-order or get early access to the book here:

[The Developer's Guide to AI: From Prompts to Agent (EARLY ACCESS)](https://nostarch.com/developers-guide-to-AI)

This project is no longer being actively maintained.  You can access the new GitHub Repository with all book examples here:

[https://github.com/jorshali/developers-guide-to-ai](https://github.com/jorshali/developers-guide-to-ai)

## Project Structure

The project contains folders with examples to support "The Developer's Guide to AI" boook.  Each folder contains the example for that part in the series.  All examples will use [Ollama](https://ollama.com) to connect to a local LLM.

### Part 0: Setting the Stage

#### Getting Started

Most developers are familiar with JavaScript.  This chapter shows how quickly you can call a local LLM from a UI with the following JavaScript technologies:

- [React](https://react.dev)
- [Vite](https://vite.dev)
- [Node.js](https://nodejs.org/docs/latest/api/)
- [Express](https://expressjs.com/en/4x/api.html)
- [LangChain.js](https://js.langchain.com/docs/get_started/introduction)

Example code:

- [part0/getting_started/section1](part0/getting_started/section1): Build a REST Service that calls a local LLM
- [part0/getting_started/section2](part0/getting_started/section2): Stream your LLM Responses

#### Building a RAG Solution

We'll take our JavaScript solution further by building a simple RAG solution.  We'll add an in-memory Vector Database and combine it with our LLM using some additional LangChain components.

Example code:

- [part0/simple_rag](part0/simple_rag): RAG solution with a Vector Store and local LLM

For each part you'll find a `README.md` with instructions to get the example up and running.
