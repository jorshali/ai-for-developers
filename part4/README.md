# The Busy Developers Guide to GEN AI - part 4

## Supercharge your data with RAG

We’re almost there.  We have all the necessary pieces in place, it’s now just a matter of combining them to build a complete RAG solution.

Our goal is simple really.  When given a prompt, we’ll first find any related data using our Vector Search.  We’ll then include that data with the prompt as context when calling the LLM.  Finally, we’ll stream the generated response back to the caller.

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

- Navigate to the project `part4` directory in your terminal and run:

```
~/ai-for-developers/part4 % npm install
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
~/ai-for-developers/part4/server % node loadData.mjs
~/ai-for-developers/part4/server % node server.mjs
```

- Open your web browser and visit: http://localhost:3000
- You’ll see company data in your browser.