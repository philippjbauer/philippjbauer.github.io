---
title: "Go Local or Go Broke!"
date: 2026-04-26
permalink: /go-local-or-go-broke/
description: ""
categories:
  - AI
  - privacy
  - local computing
  - digital sovereignty
lang: en
translation_id: go-local-or-go-broke
layout: posts
---

## Your coding agent is about to be expensive!

You're vibing away with coffee in hand, poking the Claude or Copilot agent – then suddenly – you get a warning that your daily quota limit is at 50% and resets after lunch. At 10am? A few weeks later you swear that your premium requests ran out faster than usual. Didn't you easily get through the month before?

The Claude Code tool discontinued on the $20/mo plan and low daily quotas to urge you to upgrade or use API pricing cost for premium models. All of that and more is ahead of us.

**Reclaim your tools! Stop being dependent on subscription services!**

> Just here for the goods? Docker compose files can be found on [GitHub](https://github.com/philippjbauer).

## What's happening to your subscription?

The subscription model for AI models is collapsing. It was quiet at first, now we hear the horns beyond the hill. It doesn't take an economist to see that subsidizing subscriptions by 10–100x their monthly cost isn't sustainable.

### The APIocalypse

The story behind how AI companies are selling us our helpers for so little money is quite eye opening. I mean – a subscription to frontier models for $20/mo – I'll take that without asking too much.

But it's the same playbook we've seen before. Like every subscription service that was cheap and exciting, that was then enshittified over time. 

The first phase – the one we're slowly departing from – hook as many people onto your product as possible. Just like Uber they follow the same strategy. Uber heavily subsidized ride fares to capture the market.

After people are familiar with the service and have become dependent, they jack up the prices for the pro plans, reduce the quality and features of the entry plans and add advertisements for free plans. The pricing for enterprise and API pricing will remain largely stable, paying for the subsidies and the subscription plans.

> It's a risky plan in a volatile market and unpredictable global events.

If you paid your Claude or Copilot usage in API pricing you'd have a $2,000+ hole in your pocket. Each month. You don't feel it because of the tens of billions flowing in from investors.

To compensate we have already seen the mentioned price increases, features being cut and quotas tightened.

#### Data is the new oil

Your data is in the hands of companies that are failing to make a profit. And it is most sensitive kind of data people can share. Thoughts. Feelings. Secrets. Data that opens people up to immense harm should it somehow get into the wrong hands.

It carries the memories of **23 and Me** and the controversy around the sale of customers' genetic data during their bankruptcy.

Now imagine if OpenAI is not able to create a return for investors that look to loose tens of billions of dollars. 

**Who'll end up owning you?**

> ![Bilbo OpenAI looking at your most private data, thinking "Why Not?"](../assets/posts/glogb/bilibo-openai-data.jpg)
>  Why not? — Bilbo Baggins

## “No thank you, Sam.”

Over the last three years, other vendors have steadily kept up with OpenAI and Anthropic. Today, small models that run reasonably fast on consumer hardware match flagship model's capabilities from half a year ago.

If you use these models as a tool that executes on your thinking and skill – augmenting you instead of trying to replacing you – then now is the time to build your own, private and secure infrastructure at home or on your laptop.

Now you can say: **“No thank you.”** to what Sam Altman and Dario Amodei have to offer. 

> Maybe contribute back in meaningful ways when you have liberally taken from the whole internet

## What has changed?

Unlike their western "Open" AI counterparts, models from China and Europe have been made freely available to the public for a number of years. There have been two key releases this month, that have changed local LLMs in a significant way.

### Qwen 3.6

Replacing its very capable predecessor, Qwen3.6 has been released just a short while ago and immediately passed my personal sniff test. I'm talking specifically about **Qwen3.6 35B A3B** variant. A capable mixture of experts model that according to their own benchmarking – and yes, take them with a grain of salt – is on-par with their previous **Qwen3.5 397B A17B** model. But the headline for me is: **it's in spitting distance to Claude Opus 4.5!**

And Qwen3.6's performance goes up with dense 27B parameter sibling.

> ![Qwen3.6 Benchmarks](../assets/posts/glogb/qwen3_6-benchmarks-condensed.jpg)
> – Source: Alibaba / Qwen

### Open WebUI – an alternative to Chat GPT

The second big change are the latest versions of Open WebUI. A replacement for OpenAI's ChatGPT interface. It comes with tool calling, MCP and skills support. It can use memories, write notes and extract information from uploaded documents. It allows the use of sandboxed CLI environments, control headless browsers and can schedule automations for you.

Especially the automations – prompts that are executed at configured intervals – are enabling some interesting use cases without needing to roll your own system.

> Because what is AGI if not an LLM on a schedule?

Their license should be read carefully though before you consider commercial use.

### Slim Coding Agents

What happens when the people that sell you tokens, give you a tool that consumes them? They make sure it needs as many of them as possible.

> Luckily token caching exists, or we'd be faster coding by hand again!

You still run into context rot when 25% of the context is filled with tool descriptions and agent instructions – before your code has started to be analyzed.

You might share the frustration when your agents' behavior changing over time. But is it an update to your agent's harness? Is it because the same model is served quantized after lunch? You can't know. LLMs are unreliable enough in specific ways. You can't correct things when changing variables you have little to no control over are in the mix.

You can regain control with instructions that you control and understand, an agent harness that lets you inspect all thinking output and models that don't change unexpectedly.

[[This is where tools like Pi ............]]

## Great, now what?

The above mentioned changes are the driver that enable you to gain independence before you get in too deep.

That $2,000 you'll burn through in API pricing is exactly the kind of money you need to show Big AI that you'd rather have control over your tools. No suprise changes in system messages. No dumbing down of tools during "peak hours" – that are conveniently your core business hours.

In the Dec. 2024 paper "Densing Law of LLMs" by Chaojun Xiao et al., the authors describe that the **capability density** of open-source base LLMs doubles approximately **every 3.5 months**. This is due to the advancements in model architecture, better training techniques and data quality.

See the following example of a few select coding benchmarks across three generations of models. Within about seven months, an open-source model is in a head-to-head race with Claude Sonnet 4.5. But not only that – it's likely only 1/10th of the frontier-model's size!

<iframe src="../assets/posts/glogb/coding_benchmarks_comparison.html" width="100%" height="620" title="Coding benchmarks comparison" style="border: none; margin-bottom: 1rem;"></iframe>

A $2,000 hardware investment sounds reasonable, quickly, when Claude Sonnet 4.5 costs `$3/Mtok in` / `$15Mtok out` [on OpenRouter](https://openrouter.ai/anthropic/claude-sonnet-4.5).

Let's do some back-of-the-napkin math:

> `2,000 $ / 15 $/Mtok = 133.3 Mtok`

But you have more input than output, you have caching … let's say:

> `130,000,000 tok / (40 tok/s * 60s * 60m * 24h) = 37.62 days`

You can tell your spouse that the computer will have **paid for itself in 37.6 days**!

> If you have chicken, now is the time to argue for upgrades over this baseline. Solar-panels and batteries for a ~200W computer aren't that expensive!

## Checklist

There are a few things that you will need before you get started. Let's have a look at them. First and foremost let's tackel the question of what GPU and how much memory do you need?

> You don't need to run your own LLMs right away. There is a middle ground. You can use services like OpenRouter, or host a GPU in the cloud to see how these models fit into your workflow. But we strive for independence here.

### 96G VRAM, are you mad?

No worries, you get a lot out of 48G of video memory too! But bigger is always better of course.

You might ask: _"Hold on how much? Isn't there a RAM shortage?"_, but hear me out. The bar to enter is not that high anymore!

Yes, if you want raw speed, two Nvidia RTX 5090 24GB in a big watercooled tower and RGB lighting is a fancy thing to have. But for that I can rent a GPU for a long time. Also – thanks to data centers – we pay a lot more for energy these days. I don't need to run the A/C in the summer to cool a space-heater running at 1,000 W.

But! – you can get your own local AI with a ~200W total system envelope for around $2,000. They have been talked about for a while now – and there are plenty of great tutorials on YouTube (e.g. by Kyuz) on how to set them up. I'm speaking of course about **AMD's Ryzen AI 395+ Max or Strix Halo**. They conveniently come with 96G and 128G unified RAM versions.

They also fit in many forms factors. From laptop to desktop (Framework!) or even shoebox sized Mini-PCs. One of the latter I have in my networking closet. I like to have the machine available from anywhere.

But there's not only Nvidia and AMD. Apple's M-Series SoC is a worthwhile contender in this space. But you do pay a steep premium for their higher RAM options.

What matters in the end is a high memory bandwidth to the memory you have.

I have explained this in my 2024 CODE magazine article, so I won't go into the details here: [You’re Missing Out on Open-Source LLMs!](https://codemag.com/Article/2403041/You%E2%80%99re-Missing-Out-on-Open-Source-LLMs!). The hardware has of course advanced since.

The essence is: don't go below 200GB/s memory bandwidth and no less than 48G usable VRAM. At that point MoE models with 3–10B active parameters are fast enough for most live interactions. If you want to use dense models in the ~30B parameter territory look for 800GB/s+ bandwidth. With less bandwidth they still work for unattended processes that need more precision and less user input.

And keep the Densing Law from earlier in mind! These machines will not have to be upgraded to run more capable models in the future.

### Service Suggestions

> You can run the setup without any 3rd party services. But I don't recommend it.

#### Staying anonymous with a VPN

I won't tell you who to choose, because VPN providers are hotly debated. But if you don't already have one – get a VPN. You'll need it later to run your search and LLM agent's traffic so it's not your IP that potentially gets caught in a bot list.

But more importantly: this is about independence as much as it is about keeping your data private.

#### A step up from local models

Sometimes the local AI is not enough yet. There is no shame in using APIs. If you do need that extra bit of intelligence – go with services like OpenRouter or Rent-a-GPU services. Large frontier models exist outside of Anhtropic and OpenAI. Up to 1T parameter models are a thing there too. GLM, MiniMax and the larger Qwen models are all very capable. And way more affordable than their US counterparts.

Data sharing is handled granulary and there are providers that don't save any data for longer than needed to fulfill your request. Renting and spinning up a model on your rented GPU may be even cheaper depending on your use case. Per 1 million token pricing vs. hourly GPU pricing can favor rented GPUs for long running, continuous agent tasks.

### Software Requirements

To run the compose file I have prepared you'll need a host with Docker preinstalled.

The details regarding how to prepare your system depend on the hardware you chose. Explaining all of that is beyond the scope of this article. You might want to get fancy and set up Proxmox to run multiple VMs and configure one of them to access the GPU.

The Docker stack I composed does not include a service to run the LLM. Personally, I test different LLMs on a regular basis and don't want to have them entangled in this setup. You may choose differently. Commonly you'd use llama.cpp or vLLM to run models. Depending – again – on what hardware you choose. Nvidia, AMD and Apple all have individual requirements.

## The Open WebUI stack

The Open WebUI stack comes with integrated services including VPN, search, browser automation, and vector database. Over time I have honed this setup and combined everything in this comprehensive stack.

This is a clean slate setup. No opinionated configurations or tools added. A starting point. Hook your LLM up, ask what tools the it can use to assist you and get building. Open Terminal gives the agent a playground to create scripts that you can then use as tools for and in Open WebUI.

- **Open WebUI** - Web-based interface for LLMs
- **WireGuard VPN** - Secure tunnel for all external traffic
- **SearXNG** - Privacy-focused search engine
- **Playwright (incl. MCP)** - Browser automation for web loading
- **pgvector** - PostgreSQL with vector extension for RAG
- **Tika** - Content extraction service
- **Open Terminal** - Web-based terminal access
- **Automated Backups** - Scheduled volume backups with encryption

#### Download the [Open WebUI stack on GitHub](https://github.com/philippjbauer)

## Running LLMs on GPU enabled Docker hosts

Let's assume you have an AMD Strix Halo machine set up and the GPU configured to be usable by Docker. The following demonstrates a tested configuration to run the aforementioned Qwen3.6 35B A3B model on this machine.

> ![AMD Strix Halo btop](../assets/posts/glogb/btop-screenshot.jpg)
> My personal setup uses 96/128G for VRAM and the remaining 32G RAM are split between Docker host VMs. One of them hosts the llama.cpp server and several other loads. You can see here that the model uses about 40G VRAM with its full context size of 256k tokens.

The rest of the used VRAM is used by a small model for title and follow up question generation in Open WebUI. I recommend something a current, small model like Qwen3.5 2B for example. Configured with enough context to handle long conversations for title requests.

### LLama.cpp Server Compose for AMD Strix Halo (gfx1151)

```yaml
services:
  llamacpp:
    image: docker.io/kyuz0/amd-strix-halo-toolboxes:vulkan-radv
    container_name: llama-vulkan-3001
    ports:
      - "3001:8080"
    environment:
      # Networking
      - LLAMA_ARG_HOST=0.0.0.0
      - LLAMA_ARG_PORT=8080
      
      # Hugging Face model configuration
      - HF_TOKEN=${HF_TOKEN}  # Set this in your .env file or export it
      - LLAMA_ARG_HF_REPO=${HF_REPO:?LLAMA_ARG_HF_REPO is missing required value}
      - LLAMA_ARG_ALIAS=${LLAMA_ARG_ALIAS}
      - LLAMA_ARG_TEMP=${LLAMA_ARG_TEMP:-0.7}
      - LLAMA_ARG_TOP_P=${LLAMA_ARG_TOP_P:-0.95}
      - LLAMA_ARG_TOP_K=${LLAMA_ARG_TOP_K:-40}
      - LLAMA_ARG_MIN_P=${LLAMA_ARG_MIN_P:-0.01}
      - LLAMA_ARG_REPEAT_PENALTY=${LLAMA_ARG_REPEAT_PENALTY:-1.0}
      - LLAMA_ARG_PRESENCE_PENALTY=${LLAMA_ARG_PRESENCE_PENALTY:-1.0}
      
      # Context and GPU configuration
      - LLAMA_ARG_CTX_SIZE=${LLAMA_ARG_CTX_SIZE}
      - LLAMA_ARG_N_PARALLEL=${LLAMA_ARG_N_PARALLEL}     # Run n parallel tasks (task context size: CTX_SIZE/n)
      
      # Performance tuning
      - LLAMA_ARG_N_GPU_LAYERS=-1  # Offload all layers to GPU
      - LLAMA_ARG_N_THREADS=4      # Adjust based on your CPU cores
    volumes:
      - /mnt/archives/llama.cpp:/root/.cache/llama.cpp  # Cache llama.cpp models
      - /mnt/archives/huggingface/hub:/root/.cache/huggingface/hub  # Cache HF models
    devices:
      - /dev/kfd
      - /dev/dri
    group_add:
      - video
    security_opt:
      - seccomp:unconfined
    ipc: host
    restart: unless-stopped
    command: >
      llama-server 
      -fa 1
      --mlock -cram 8192
      -ctk q8_0 -ctv q8_0 
      -ctxcp 128 --checkpoint-every-n-tokens 2048
      --batch-size 2048 --ubatch-size 1024
      --spec-type ngram-mod --spec-ngram-size-n 24 
      --draft-min 12 --draft-max 64
      --reasoning on
      --chat-template-kwargs '{"preserve_thinking":true}'
```

#### Llama.cpp Server options explained

<div class="table-wrapper">

<table>
<colgroup>
  <col class="option-col">
  <col class="value-col">
</colgroup>
<thead>
<tr>
<th>Option</th>
<th>Explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>-fa 1</code></td>
<td>Enable Flash Attention (1 = on); reduces KV cache memory usage and speeds up attention computation</td>
</tr>
<tr>
<td><code>--mlock</code></td>
<td>Pin model weights in RAM to prevent OS swapping, reducing latency spikes from disk I/O</td>
</tr>
<tr>
<td><code>-cram 8192</code></td>
<td>Set maximum cache-ram (context RAM) to 8192 MiB for KV cache allocation across slots</td>
</tr>
<tr>
<td><code>-ctk q8_0 -ctv q8_0</code></td>
<td>Quantize KV cache key and value tensors to Q8_0 precision to save VRAM while retaining quality</td>
</tr>
<tr>
<td><code>-ctxcp 128</code></td>
<td>Set context checkpoints (SWA checkpoints) to 128 per slot, enabling faster context recycling</td>
</tr>
<tr>
<td><code>--checkpoint-every-n-tokens 2048</code></td>
<td>Create a KV cache checkpoint every 2048 tokens during prefill for faster restart/reuse</td>
</tr>
<tr>
<td><code>--batch-size 2048</code></td>
<td>Set logical maximum batch size to 2048 tokens for concurrent sequence scheduling</td>
</tr>
<tr>
<td><code>--ubatch-size 1024</code></td>
<td>Set physical maximum batch size to 1024 tokens (actual computation batch sent to GPU/CPU)</td>
</tr>
<tr>
<td><code>--spec-type ngram-mod</code></td>
<td>Use n-gram modified speculative decoding (no draft model needed, uses context-based hash lookup)</td>
</tr>
<tr>
<td><code>--spec-ngram-size-n 24</code></td>
<td>Set n-gram size to 24 for the ngram-mod speculative decoder (longer matches = better accuracy)</td>
</tr>
<tr>
<td><code>--draft-min 12</code></td>
<td>Set minimum draft tokens to 12 for speculative decoding (prevents tiny speculative batches)</td>
</tr>
<tr>
<td><code>--draft-max 64</code></td>
<td>Set maximum draft tokens to 64 for speculative decoding (caps speculative lookahead)</td>
</tr>
<tr>
<td><code>--reasoning on</code></td>
<td>Force reasoning/thinking mode: always extract and display model's chain-of-thought output</td>
</tr>
<tr>
<td><code>--chat-template-kwargs '{"preserve_thinking":true}'</code></td>
<td>Pass <code>preserve_thinking=true</code> to chat template; required for Qwen3.5/3.6 thinking models to retain content from thinking blocks</td>
</tr>
</tbody>
</table>

</div>


### Environment file example

```conf
# Environment Variables
# These variables will be available to your project services
# Format: VARIABLE_NAME=value

# Huggingface
HF_TOKEN="hf_[truncated]"

# Active models
HF_REPO="unsloth/Qwen3.6-35B-A3B-GGUF:Q8_0"

# Coding Tasks w/ Thinking
LLAMA_ARG_ALIAS="Qwen3.6-35B-A3B"
LLAMA_ARG_TEMP=0.6
LLAMA_ARG_TOP_P=0.95
LLAMA_ARG_TOP_K=20
LLAMA_ARG_MIN_P=0.0
LLAMA_ARG_REPEAT_PENALTY=1.0
LLAMA_ARG_PRESENCE_PENALTY=1.0
LLAMA_ARG_N_PARALLEL=2
LLAMA_ARG_CTX_SIZE=262144

# # General Tasks w/ Thinking
# LLAMA_ARG_ALIAS="Qwen3.6-35B-A3B"
# LLAMA_ARG_TEMP=1
# LLAMA_ARG_TOP_P=0.95
# LLAMA_ARG_TOP_K=20
# LLAMA_ARG_MIN_P=0.0
# LLAMA_ARG_REPEAT_PENALTY=1.0
# LLAMA_ARG_PRESENCE_PENALTY=1.1
# LLAMA_ARG_N_PARALLEL=3
# LLAMA_ARG_CTX_SIZE=262144
```

## Closing thoughts

I've been advocating to not let the machines take over your engineering discipline. Humans should be in charge of and responsible for the code AI tools generate.

If you have spent a lifetime learning how to code, how to design systems and deploy them. When you know about the many edge cases that can arise in systems. When you experienced how only the right questions — not assumptions – lead to good project outcomes. Then you know as well as I do that LLMs can't operate completely independently. They can amplify us – but not fully replace us.

Used with care and a capable guiding hand local models can do what we were used to of frontier-models. With more effiecient coding harnesses like Pi – rather than the token-slurping Claude Code – even better!

Not only do we insulate ourselves from a signifcant increase in prices at the token-pump.

But you can also make as statement that you don't want:

- to be part of another bait-and-switch subscription,
- to let companies change how your tools work based on the time of day,
- to hand over your private data, for model training or to sell you stuff.

But instead you send a signal that you want:

- predictability and control over your tools and what powers them,
- the choice of when and how someone else processes your data,
- alternatives to closed-source models from big AI companies with uncertain futures.

