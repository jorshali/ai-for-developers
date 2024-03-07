# The Busy Developers Guide to Generative AI

[Download the Book](busy_developers_guide_to_genai.pdf)

Finally, a book that makes AI approachable for developers.  This book is here to jumpstart your AI learning journey.  You won’t need to dust off your Python spellbook, train neural networks, or get a PhD in statistics.  All you need is some basic JavaScript knowledge and a willingness to learn.

We’ll skip all the data science wizardry by using pre-trained generative AI models (specifically LLMs).  APIs and SDKs have made these models accessible to developers in the languages they’re already building applications with.

This book will guide you through combining your own data with the power of LLMs using a technique called RAG (Retrieval Augmented Generation). During this journey, you'll learn important concepts while gaining practical experience with some key JavaScript libraries: [Node.js](https://nodejs.org/docs/latest/api/), [Express](https://expressjs.com/en/4x/api.html), and [LangChain.js](https://js.langchain.com/docs/get_started/introduction).

You can follow me on LinkedIn for more:

[Jacob Orshalick | LinkedIn](https://linkedin.com/in/jorshalick)

## Quick Start

The following steps will guide you through getting part 1 up and running on your machine.

1. Clone this project into a local directory:

```
~ % git clone <url>
```

2. Install Node

- Download and install: https://nodejs.org
- Verify the install in your terminal:

```
~ % node -v
```

- If the installation succeeded, the version will print

3. Install node modules

- Navigate to the project `part1` directory in your terminal and run:

```
~/ai-for-developers/part1 % npm install
```

4.  Create an OpenAI account:

- Register here: https://platform.openai.com
- Obtain an API key:
  - Simply select ‘API keys’ in the upper left navigation
  - Select ‘+ Create new secret key’
  - Copy the key somewhere safe for now

5.  Set an environment variable:

- In the same terminal, run the following command with your key value:

```
~/ai-for-developers/part1 % export OPENAI_API_KEY=<YOUR_KEY_VALUE>
```

- _Optionally_: add this command to your bash profile:  ~/.zshrc

6.  Launch the server

- Back in the terminal, run the following command:

```
~/ai-for-developers/node % node server-part1.mjs
```

- Open your web browser and visit: http://localhost:3000
- You’ll see the response from the OpenAI model:  test

## Project Structure

The project contains folders with examples to support the "The Busy Developers Guide to GEN AI" e-book.  Each folder contains the example for that part in the series.

- [part1](part1): Build a REST Service that calls an LLM
- [part2](part2): Stream your LLM Responses
- [part3](part3): Create a Vector Search with custom data
- [part4](part4): Supercharge your data with RAG

For each part you'll find a `README.md` with instructions to get the example up and running.
