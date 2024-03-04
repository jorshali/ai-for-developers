# AI for developers, not data scientists - part 3

## How to setup a Vector Search with your data using JavaScript

Most LLM-powered applications use RAG in some way.

The key to RAG is getting your data to the LLM.  This tutorial shows you how to use a vector search to do just that.

Remember, we're limited on the amount of data we can send to the LLM:

- prompts have a token limit
- LLM providers often charge by the token
- including irrelevant data may confuse the LLM response

We need an efficient way to find only relevant data.

Vector search is a great choice.  We prompt LLMs with natural language and a vector search allows you to find relevant data based on the meaning of what's being asked.

## Tutorial

[How to setup a Vector Search with your data using JavaScript](tutorial.pdf)

## Quick Start

The following steps will get you up and running on your machine.

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

- Navigate to the project `part3` directory in your terminal and run:

```
~/ai-for-developers/part3 % npm install
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
~/ai-for-developers/part3 % export OPENAI_API_KEY=<YOUR_KEY_VALUE>
```

- _Optionally_: add this command to your bash profile:  ~/.zshrc

6.  Launch the server

- Back in the terminal, run the following commands:

```
~/ai-for-developers/node % node loadData.mjs
~/ai-for-developers/node % node server.mjs
```

- Open your web browser and visit: http://localhost:3000
- You’ll see company data in your browser.