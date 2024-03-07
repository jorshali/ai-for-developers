# The Busy Developers Guide to GEN AI - part 2

## Stream your LLM Responses

The cool typing effect you see in ChatGPT makes it feel responsive.

Without it, the UI would feel slow and often unusable.

OpenAI took a drawback of an LLM, the speed of text generation, and turned it into a killer UI effect.  You can achieve the same responsiveness by streaming LLM responses.
 
When you prompt an LLM, it generates the response in chunks.  Streaming allows you to send these chunks back to the user when they are ready.  As your prompts and chains grow in size and complexity, streaming becomes crucial to performance.

Similar to an infinite scroll, streaming makes LLMs feel infinitely faster to your end users.

With Express and LangChain it's extremely simple to stream an LLM response from your own REST API.  This tutorial shows you how.

You can access the entire source along with a working UI in the GitHub repository linked in the comments.

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

- Navigate to the project `part2/server` directory in your terminal and run:

```
~/ai-for-developers/part2/server % npm install
```

- Navigate to the project `part2/client` directory in your terminal and run:

```
~/ai-for-developers/part2/client % npm install
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

- In a terminal, navigate to the `part2/server` directory and run the following command:

```
~/ai-for-developers/part2/server % node server.mjs
```

7.  Launch the client

- In a terminal, navigate to the `part2/client` directory and run the following command:

```
~/ai-for-developers/client % npm run dev
```

8. Open your web browser and visit: http://localhost:5173

9. Click `fetch` to see the response streamed from OpenAI