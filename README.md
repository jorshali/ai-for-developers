# AI for developers, not data scientists

Finally, a tutorial series that makes AI approachable for developers.  With 10 minutes and basic JavaScript knowledge, you can build your first REST service that calls GPT.  From there, you can follow this tutorial series to dive deeper into what's possible with AI.

You can follow me on LinkedIn to see new posts on Tuesday's and Thursday's:

[Jacob Orshalick | LinkedIn](https://linkedin.com/in/jorshalick)

Every new post will include the example code here.

## Introduction

I admit it. Learning AI was intimidating.  I thought it made the most sense to start with training neural networks. You have to know the basics, right?

There was nothing basic about it. It felt more like a statistics course than programming. And I hated college statistics.  I accepted my fate that the AI overlords would eventually replace me...

Then pre-trained LLMs came along. Suddenly it felt like the world of AI opened up to developers. I saw REST APIs and SDKs. I wasn't constrained to pandas and Python.

It gave me a starting point that felt familiar.  That's why I'm starting a series on AI for developers, not data scientists. All you have to know is JavaScript and even that could be learned along the way.

It will open up a world of possibilities you didn't even know were there. And maybe you'll be like me and dive deeper to see what you can really build with this stuff.

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

The project contains folders with examples to support the "AI for developers, not data scientists" series.  Each folder contains the example for that part in the series.

- `part1`: How to Build a REST Service that calls GPT
- `part2`: Use JavaScript to stream LLM responses from a REST service

For each part you'll find the following documentation:

- `README.md`: provides a summary and the instructions to get the example up and running
- `tutorial.pdf`: provides the tutorial walk through along with concepts 