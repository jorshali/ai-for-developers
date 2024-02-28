# AI for developers, not data scientists - part 1

## How to Build a REST Service that calls GPT

Here's how you can start your AI learning journey.

With 10 minutes and basic JavaScript knowledge, you can build a REST service that calls GPT.

7 quick steps will have you:

- Starting a REST service with Express and Node.js
- Using LangChain to connect to OpenAI APIs
- Generating a response from a GPT model
- Rendering that response to your browser

It doesn't get any easier to begin your AI learning journey.

## Tutorial

[How to Build a REST Service that calls GPT](tutorial.pdf)

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
~/ai-for-developers/node % node server.mjs
```

- Open your web browser and visit: http://localhost:3000
- You’ll see the response from the OpenAI model:  test