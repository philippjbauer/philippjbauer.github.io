---
title: "Why Local AI Matters – The Case for Personal Digital Sovereignty"
date: 2026-04-01
permalink: /why-local-ai-matters/
description: "Cloud AI is convenient, but it comes with legal, privacy, and operational dependencies most people don't think about. Here's why running AI locally matters."
categories:
  - AI
  - privacy
  - local computing
  - digital sovereignty
lang: en
translation_id: why-local-ai-matters
layout: posts
---

A client recently approached us with a project that involved analyzing sensitive operational data. The kind of information that, contractually and legally, cannot leave their premises. No cloud processing, no third-party APIs, no sending proprietary information to servers owned by trillion-dollar corporations headquartered in another jurisdiction.

The compliance requirements constrained and shaped every tool choice. And they made something clear that I'd been circling around for years: the convenience of cloud AI comes with strings attached that aren't always visible until you need to cut them.

I've been working toward this kind of independence for a while. My primary machine for the past five years has been a MacBook Pro with an M1 Pro and 32GB of RAM. It's served me well but for AI workloads, 32GB of unified memory has become a real constraint. I can run capable small models, but anything beyond 14B parameters means aggressive quantization or hopelessly swapping memory to drive.

So I added an AMD Strix Halo machine to my homelab. Not a cloud instance I rent by the hour, but hardware I own, in my home, under my control. It's a shift that's partly practical and partly philosophical. The practical part is straightforward: more memory, more compute, better performance for the work I actually do. The philosophical part took longer to articulate, but it's about sovereignty. Not the nation-state kind, but the personal kind. The ability to work with AI tools without asking permission, without sending data through pipes I don't control, and without depending on services that can be shut down, subpoenaed, or policy-changed out from under me.

What was once a fringe concern is now mainstream, for reasons worth understanding.

## The Foundations of Cloud Dependency

### The Legal Reality: Your Cloud Data Isn't Really Yours

When you type a prompt into ChatGPT or Claude, you're not just interacting with an AI. You're handing information to a third party, which means you're operating under a legal framework that's been eroding privacy protections since the 1970s.

The foundational principle is something called the Third Party Doctrine. It originated from two Supreme Court cases: _United States v. Miller_ (1976) and _Smith v. Maryland_ (1979). The Court held that you have "no reasonable expectation of privacy in information revealed to a third party" (Oyez — United States v. Miller: https://www.oyez.org/cases/1975/74-8; Oyez — Smith v. Maryland: https://www.oyez.org/cases/1978/78-5374). When you share data with your bank, your phone company, or now your cloud provider, the government can often access it without a warrant – because you already chose to share it with someone else.

The legal specifics get technical. The Stored Communications Act governs how government agencies can demand electronic data from providers. According to a Congressional Research Service report, they can obtain basic subscriber information (name, address, payment details) via administrative subpoena with no judicial approval required at all. Content data requires a warrant, but the scope of what constitutes "content" vs. "metadata" is narrower than you might assume. And the CLOUD Act of 2018 confirmed that US providers must disclose data regardless of where in the world it's stored (CLOUD Act — Congress.gov: https://www.congress.gov/bill/115th-congress/house-bill/4943).

There's been some pushback. _Carpenter v. United States_ (2018) held that cell-site location information requires a warrant despite being held by third parties, because such detailed surveillance was "impossible using traditional methods" (Supreme Court — Carpenter v. United States: https://www.supremecourt.gov/opinions/17pdf/16-402_h315.pdf). But this hasn't been extended to cloud-stored documents or AI conversations, and there's no clear precedent suggesting it will be.

The practical implication: when you use cloud AI services, your prompts and responses exist on servers owned by US companies, subject to US legal process, and accessible through procedures that don't require you to be notified. A February 2026 Washington Post story documented someone who emailed the Department of Justice about Afghan refugee treatment. The government used administrative subpoenas to gather extensive information about the person from their digital trail, then sent agents to question them. The subject had no idea their data had been accessed.

Transparency reports show government requests for user data are skyrocketing. According to Proton's analysis, FISA content requests to Meta increased 2,171% since 2014. Google saw a 594% increase (Proton: https://proton.me/blog/big-tech-data-requests-surge). Apple and Microsoft publish similar transparency reports, and the trend line is clear: the government is asking for more data from cloud providers, and those providers are increasingly compelled to comply.

For individuals, this might feel abstract. For businesses handling trade secrets, legal documents, or client data, it's a material risk. For journalists, activists, or anyone whose work might attract government attention, it's an operational security concern.

### The Trust Problem: When Companies Fail

The legal framework is only part of the story. How much you can trust the companies holding your data is a separate question, and recent history gives plenty of reasons for skepticism.

Amazon's Ring division offers a cautionary tale. In May 2023, the Federal Trade Commission charged Ring with compromising customer privacy. The findings were disturbing: any employee or contractor could access private customer videos. A former employee viewed footage from at least 81 female users over three months in 2017, including cameras positioned in bedrooms and bathrooms. Hackers gained control of user accounts and cameras due to weak security practices. Ring settled and agreed to pay $5.8 million in refunds (FTC: [https://www.ftc.gov/news-events/news/press-releases/2023/05/ftc-says-ring-employees-illegally-surveilled-customers-failed-stop-hackers-taking-control-users](https://www.ftc.gov/news-events/news/press-releases/2023/05/ftc-says-ring-employees-illegally-surveilled-customers-failed-stop-hackers-taking-control-users)).

But the surveillance issues went beyond rogue employees. In 2022, Amazon confirmed to Senator Ed Markey that it had shared Ring footage with law enforcement 11 times without user consent and without notifying affected individuals (CNN: [https://edition.cnn.com/2022/07/14/tech/amazon-ring-police-footage/index.html](https://edition.cnn.com/2022/07/14/tech/amazon-ring-police-footage/index.html)). This was the first public disclosure of warrantless sharing. In January 2020, Ring disclosed it had fired four employees for watching customer video feeds without authorization (CNBC: [https://www.cnbc.com/2020/01/09/ring-fired-four-employees-for-watching-customer-video-feeds.html](https://www.cnbc.com/2020/01/09/ring-fired-four-employees-for-watching-customer-video-feeds.html)).

These were structural failures at a company that had positioned its own products as security devices. If Ring can't secure video feeds from its own employees, why would we assume AI companies are any better at securing conversation logs?

AI providers have had their own incidents. In early 2023, a hacker accessed OpenAI's internal messaging systems and stole details about AI technology designs. Executives disclosed the breach at an all-hands meeting in April 2023 and informed the board. They didn't publicly report it until July 2024 – over a year later – and notably didn't inform the FBI because "source code and customer data were not accessed" (Reuters: [https://www.reuters.com/technology/cybersecurity/openais-internal-ai-details-stolen-2023-breach-nyt-reports-2024-07-05/](https://www.reuters.com/technology/cybersecurity/openais-internal-ai-details-stolen-2023-breach-nyt-reports-2024-07-05/)). That's a remarkable standard: if your data wasn't taken, we don't need to tell anyone. In December 2025, OpenAI confirmed an API data breach that exposed user data. Anthropic had its own leak in January 2024 when a contractor inadvertently sent a file containing customer names and credit amounts to a third party.

In August 2025, Anthropic quietly updated its privacy terms. Users had until September 28 to opt out, or their conversations could be used for model training with data retained for up to five years (TechCrunch: [https://techcrunch.com/2025/08/28/anthropic-users-face-a-new-choice-opt-out-or-share-your-data-for-ai-training/](https://techcrunch.com/2025/08/28/anthropic-users-face-a-new-choice-opt-out-or-share-your-data-for-ai-training/)). OpenAI, Google, and Anthropic all rolled back privacy protections that same month. Most recently GitHub announced it would change it's model training policies for user inputs in their Free, Pro and Pro+ plans from an opt-in setting to an opt-out setting. While they promise that existing users who are not opted-in will automatically remain opted-out, new users will have to be vigilant when the change notification is not broadly advertised anymore.

Both were policy decisions. But they illustrate the same principle: your data's treatment depends on policies that can change, and you're not always in the room when those decisions get made.

## The Sovereignty Landscape

### The European Sovereignty Movement

Europe has been wrestling with these questions at a policy level for years. The concept of "digital sovereignty" – the idea that nations should maintain control over their digital infrastructure and data – has moved from academic circles into actual legislation.

GAIA-X, launched in 2020, is the flagship European initiative for federated, trusted data infrastructure. The goal is to build an interoperable ecosystem based on open standards that reduces dependence on North American cloud providers (GAIA-X: https://gaia-x.eu/). It's been discussed as Europe's answer to AWS, Azure, and Google Cloud. In March 2024, GAIA-X held a high-level reception at the European Parliament reaffirming Europe's commitment to digital sovereignty.

The results have been mixed. A 2025 academic analysis in Information, Communication & Society argues GAIA-X has been "captured by American clouds" because it focuses on certification rather than building actual European infrastructure. The major US cloud providers can get GAIA-X certified while European alternatives struggle to achieve scale. Sovereignty can't be achieved through labels.

But the policy momentum is real. The EU Data Act, which entered into force in January 2024 with most provisions applying from September 2025, gives users rights to access and port data generated by their connected devices (European Commission: https://digital-strategy.ec.europa.eu/en/policies/data-act). The Data Governance Act creates frameworks for data sharing in trusted environments. The European Health Data Space Regulation addresses sector-specific sovereignty. The German Sovereign Tech Fund directly supports critical open source infrastructure.

These initiatives target institutions and enterprises. But they reflect a growing recognition that digital sovereignty matters, and that dependence on foreign infrastructure creates strategic vulnerabilities. The same logic applies to individuals.

### Individual Sovereignty: It's Not Just for Nations

The European conversation often frames sovereignty at the national or regional level. But the underlying principle – control over your own digital infrastructure and data – scales down to individuals.

There's even a term for it: Self-Sovereign Identity (SSI), a decentralized identity framework where individuals control their digital identities without relying on third-party providers. The World Economic Forum describes it as taking back control using blockchain-based architectures. It's an evolving concept with implementation challenges, but it reflects a growing desire for digital autonomy.

GDPR provides some legal foundation. Article 20 establishes the right to data portability – individuals can receive their personal data in a structured, machine-readable format and transmit it to another controller without hindrance. But portability isn't sovereignty. Being able to move your data doesn't mean you can process it independently.

This is where compute capability comes in. A 2023 ACM Computing Surveys paper analyzes how digital sovereignty is shifting toward individuals taking control of their digital assets through self-sovereign models. But there's a missing piece: the actual ability to compute without relying on cloud services.

Some jurisdictions are starting to recognize this. Montana passed SB 212, the "Right to Compute Act," in 2025. The law establishes that "the rights to acquire, possess, and protect property also embody the notion of a fundamental right to own and make use of technological tools, including computational resources." The American Legislative Exchange Council created model legislation based on it, and lawmakers in New Hampshire and Idaho are advancing similar bills. The language is significant: computational resources as a fundamental right, with government restrictions required to be "narrowly tailored and demonstrably necessary to fulfill a compelling government interest."

For individuals, sovereignty means owning the hardware, the software, and the data. It means the ability to process information without asking permission from a cloud provider, without worrying about policy changes, and without exposing data to third-party legal processes you can't control.

## The Rise of Local AI

### The Self-Hosting Movement Is Growing

This isn't a fringe position anymore. The self-hosting and homelab communities have grown substantially over the past several years, driven by exactly these concerns.

Ethan Sholly's annual selfh.st survey received 3,700+ responses in 2024, nearly double 2023's returns (selfh.st 2024 Survey: https://selfh.st/survey/2024-results/). The motivations, ranked by respondents, tell a clear story: "Learning experience" (35.3%) as #1, followed by "Privacy" (34.7%), then "Cost Savings" (16%). Privacy ranks second, and control ranks fourth. These are  people making deliberate choices about where their data lives.

Sholly himself wasn't always a self-hosting advocate. An Ars Technica profile from May 2025 describes how he started with Plex on a desktop PC, gradually expanded to building his own tower server, and eventually created selfh.st because he couldn't find a single resource for self-hosted apps (Ars Technica: https://arstechnica.com/information-technology/2025/05/self-hosting-is-having-a-moment-ethan-sholly-knows-why/). His day job is in finance, not tech. He represents a growing demographic: technically capable professionals who aren't engineers but have learned enough to take control of their digital infrastructure.

The hardware deployments are diverse. The survey shows low-powered devices as most common, followed by consumer hardware, desktop PCs, custom builds, and enterprise servers. People are repurposing old laptops, building dedicated servers, or deploying mini-PCs. The barrier to entry has dropped significantly. Docker, in Sholy's words, was "a game-changer for lots of people." Single-board computers like the Raspberry Pi and inexpensive mini-PCs have made it possible to run substantial self-hosted infrastructure on a modest budget.

The community is active and growing. r/selfhosted and r/homelab have become significant resources. r/LocalLLaMA specifically focuses on self-hosted AI, with active discussions about privacy-focused deployments. Privacy Guides, a community dedicated to privacy education, recommends tools like GPT4All for "true data privacy" and maintains discussions about local LLM setups.

### Why People Are Migrating

The theoretical arguments for local AI are clear. But what's actually driving individuals to make the switch?

Dhruv Bhutani wrote about his migration from ChatGPT to local AI in December 2025 (Android Authority: https://www.androidauthority.com/reasons-to-run-local-ai-3620233/). His reasons were specific and personal. Privacy was primary: he'd been pasting "deeply personal information, from journal entries to sensitive work emails, into a black box owned by trillion-dollar corporations." NDA compliance was practical: he runs a business exposed to confidential information that legally couldn't be shared with public AI tools. He replaced Grammarly, which he described as "by definition, a keylogger," with local LLMs for editing. He uses DeepSeek Coder locally for code analysis without sending proprietary code to cloud services. He travels frequently and wanted offline access. He was tired of $20/month subscription fees stacking up across multiple services. And he found local models sometimes faster than cloud, with no server queues or connection timeouts.

Jasmine Mannan wrote about her switch in January 2026. (XDA Developers: https://www.xda-developers.com/cut-cord-on-chatgpt-why-only-using-local-llms-in-2026/) She came at it from a slightly different angle. She noted the irony of having "a powerful and AI-ready rig but still using cloud-based AI services that don't utilize my specifications in the slightest." She wanted model specialization – the ability to pick models optimized for specific tasks rather than relying on one general-purpose model. She wanted Retrieval Augmented Generation without the privacy trade-off: asking a model to retrieve specific information from local files without handing over all her on-drive data. She wanted no training or data collection, noting that "no one is going to be tracking your embarrassing health queries or your sensitive business research."

These are real accounts from people who decided cloud AI's convenience costs more than they're willing to pay.

## The Availability Problem

### When Cloud Services Go Down

Privacy and sovereignty make a strong case on their own. Availability adds another layer: cloud services go down, and when your workflow depends on them, you're stuck.

On December 11, 2024, OpenAI went down for over four hours. Everything – API, ChatGPT, internal tools – gone. A Kubernetes deployment cascaded through their infrastructure and broke DNS discovery (OpenAI Status: https://status.openai.com/incidents/01JMYB483C404VMPCW726E8MET; TechCrunch: https://techcrunch.com/2024/12/13/openai-blames-its-massive-chatgpt-outage-on-a-new-telemetry-service/). The outage sparked frustration across social media from students and professionals who rely on OpenAI's tools for critical tasks. Businesses using the API faced disruptions and potential revenue losses. In September 2025, an Azure datacenter power failure knocked ChatGPT offline for roughly nine hours. [Needs verification: Sources show the September 3, 2025 outage was ~3.5 hours (not 9 hours) caused by a CDN error (not Azure power failure). See: https://www.tomsguide.com/news/live/chatgpt-outage-live-september-3-2025. Consider revising to: "In September 2025, a CDN error knocked ChatGPT offline for over three hours when JavaScript bundles failed to load."]

Those are the headline outages. Server queues, connection timeouts, and rate limiting – the daily friction of shared infrastructure – are far more common.

But cloud dependency can have more severe consequences than temporary outages. In May 2024, Google Cloud accidentally deleted the private cloud account of UniSuper, a $125 billion Australian pension fund. 620,000 account holders couldn't access their accounts for a week. [Correction: Sources report $135 billion and 647,000 members. See: The Guardian: https://www.theguardian.com/australia-news/article/2024/may/09/unisuper-google-cloud-issue-account-access; Axios: https://www.axios.com/2024/05/30/google-cloud-pension-error] An engineer misconfiguring an internal tool during routine maintenance triggered a deletion that cancelled UniSuper's subscription and wiped all business-critical backups across two geographic regions. Recovery was only possible because UniSuper had a third-party backup provider independent of Google Cloud. Google called it "an isolated, 'one-of-a-kind occurrence' that has never before occurred." But for UniSuper's customers, that wasn't much comfort.

Smaller-scale incidents are more common. Code Spaces, a code hosting provider, was forced to shut down completely in 2014 after a cyberattack where hackers deleted data and backups (The Hacker News: https://thehackernews.com/2014/06/cyber-attack-on-code-spaces-puts.html). Clients lost source code and collaboration history. In 2019, a California startup called Musey accidentally deleted their main Google Workspace account instead of a test user. Google wasn't responsible under the Shared Responsibility Model, data recovery failed, and the startup shut down entirely (The Register: https://www.theregister.com/2019/07/05/musey_v_google_lawsuit/). Atlassian's 13-day outage in 2022, caused by human error during deletion of a legacy application, left 775 customer sites inaccessible (DevOps.com: https://devops.com/what-sres-can-learn-from-the-atlassian-outage-of-2022/).

Cloud providers offer remarkable infrastructure, but they're not infallible. When they fail, the consequences can cascade. And the shared responsibility model often means you're less protected than you assumed.

## The Cost Calculation

### The Math Changes at Scale

For individuals and small teams, cloud AI is often cheaper than buying hardware. But the calculation shifts as usage scales.

AI Pricing Master's analysis from January 2026 shows the break-even points clearly. Considering premium models which cost between $5 – $15 per 1M tokens. Below 5 million tokens monthly, pure API makes sense. Between 5 and 50 million tokens, evaluate hybrid approaches for 20-40% savings. Between 50 and 100 million tokens, hybrid is recommended for 40-60% savings. Above 100 million tokens monthly, self-hosting delivers 60-80% savings (AI Pricing Master: https://www.aipricingmaster.com/blog/self-hosting-ai-models-cost-vs-api). Organizations processing 100M+ tokens monthly can save $5M-$50M annually.

A Fortune 500 company doing legal document processing cut their monthly spend from $1,050,000 on Claude Sonnet to $265,722 by deploying Llama 3.1 405B on an 8×H100 cluster and using API only for overflow (AI Pricing Master case study: https://www.aipricingmaster.com/blog/self-hosting-ai-models-cost-vs-api). That's $9.4 million in annual savings.

Individuals won't see those numbers. But a dedicated hardware investment – say, $2,000-$3,000 for a capable Strix Halo system with substantial memory – pays off over time compared to $20/month subscriptions across multiple AI services, especially if you're a heavy user. And unlike subscriptions, hardware retains residual value.

Beyond the financial calculation lies a more important factor: optionality. When you own the hardware and run local models, your costs are fixed. Cloud pricing can change, usage caps can tighten, and features can move to higher tiers. With local AI, you're insulated from those shifts.

## The Censorship Question

### Who Decides What You Can Say?

Sovereignty extends beyond privacy and availability to what you're allowed to do with AI tools in the first place.

When Gizmodo tested five major AI chatbots with 20 controversial prompts in March 2024, the results were telling. Google Gemini refused to answer 10 of them, including "Where is Gaza" and "Is Donald Trump a Fascist?" ChatGPT, Claude, and Meta AI each refused 3. xAI's Grok refused none (Gizmodo: https://gizmodo.com/we-tested-ai-censorship-here-s-what-chatbots-won-t-tel-1851370840).

I'm not arguing whether specific refusals are justified. Reasonable people can disagree about where lines should be drawn. The point is that cloud AI providers draw those lines for you, and you have no recourse. If Claude's safety classifiers decide your creative writing is too violent, or your research query is too sensitive, the model simply refuses. You can't adjust the parameters. You can't see why the refusal triggered. You're bound by someone else's judgment.

Creative writers have noticed. Reddit threads document complaints that Claude "has become heavily censored" for creative writing. OpenAI community forums note that "new content filters are crippling creative writing and narrative role-playing." Micah Hill-Smith, founder of AI research firm Artificial Analysis, explained that restrictions come from reinforcement learning from human feedback (RLHF) and safety classifiers that block certain prompts from reaching the model entirely.

Safety measures in cloud AI are someone else's, applied to your use case regardless of context. Local models give you control. You can choose models with different safety profiles, or none at all. You can adjust parameters. You can see what's happening under the hood.

For creative work, research, or any use case that might trigger a provider's guardrails, that control matters.

## What Sovereignty Looks Like

### The Practical Reality

Personal AI sovereignty means having the option to process data locally when it matters. And you don't need to build a datacenter in your basement to do it.

My own setup has evolved over time. The M1 Pro MacBook with 32GB of RAM still serves as my daily driver for general work. But for AI workloads, I've added a Strix Halo machine to my homelab. It's not exotic hardware – it's consumer equipment I can buy, configure, and maintain myself. The key spec is memory: with unified memory architecture, I can run larger models than my old MacBook could handle.

The software stack can be straightforward: Llama.cpp for model inference, Open WebUI for a ChatGPT-style interface, and various models depending on the task. Sure, I'm not running a 405B parameter models. But I can run capable, 120B+ parameter Mixture of Experts (MoE) models for coding assistance, document analysis, and creative work.

Nothing leaves my network unless I choose to send it. Even web search is handled using a self-hosted SearxNG instance. For further protection you can even configure your services to use VPN connections to mask your agents' searches.

Running local AI doesn't mean abandoning cloud services entirely either. The difference is that I now have a choice. When data sensitivity matters, I use all local tools. When convenience outweighs privacy concerns for a particular query, I might use an open-weight model like Z-AI's GLM5 on providers like OpenRouter. The key is that I'm making a deliberate choice each time, rather than defaulting to cloud because I have no alternative.

## The Path Forward

### Making the Choice

Digital sovereignty at the individual level is becoming more accessible. Hardware capable of running useful models is getting cheaper and more available. Software has matured to the point where setting up a local AI stack takes hours, not days. The self-hosting community provides documentation, support, and collective experience.

The reasons to consider local AI are converging. Privacy concerns about data handling by cloud providers. Legal exposure from government data access. Frustration with service outages and availability issues. Cost considerations at scale. Disagreement with provider-imposed content restrictions. The desire for control over your own tools.

You don't need to be a nation-state to care about sovereignty. You just need to recognize that every prompt you send to a cloud AI service is a small concession of control. Most of the time, that concession is worth the convenience. But it adds up. And when you encounter a use case where it's not acceptable – sensitive client data, confidential business information, personal documents you'd rather keep private – having a local alternative matters.

## The Practical Next Steps

### What You Can Do Today

This series will walk through the practical steps. We'll cover hardware options, with particular attention to AMD's Strix Halo platform and its unified memory architecture. We'll set up the software stack. We'll discuss model selection based on your hardware and use cases. And we'll explore specific applications – coding assistance, document analysis, research – where local AI can match or comepare to cloud services.

The goal is to give you the knowledge and tools to make informed choices about where your data goes, and to build a fallback that works when the cloud doesn't.

## References

*   _Carpenter v. United States_, 585 U.S. ___ (2018): [Supreme Court PDF](https://www.supremecourt.gov/opinions/17pdf/16-402_h315.pdf)
*   AI Pricing Master analysis: [aipricingmaster.com](https://www.aipricingmaster.com/blog/self-hosting-ai-models-cost-vs-api)
*   Anthropic privacy changes: [TechCrunch](https://techcrunch.com/2025/08/28/anthropic-users-face-a-new-choice-opt-out-or-share-your-data-for-ai-training/)
*   Ars Technica — Self-Hosting Is Having a Moment: [arstechnica](https://arstechnica.com/information-technology/2025/05/self-hosting-is-having-a-moment-ethan-sholly-knows-why/)
*   Axios — Google Cloud Pension Error: [axios](https://www.axios.com/2024/05/30/google-cloud-pension-error)
*   CLOUD Act — Congress.gov: [congress.gov](https://www.congress.gov/bill/115th-congress/house-bill/4943)
*   CNN — Ring Law Enforcement Sharing: [edition.cnn.com](https://edition.cnn.com/2022/07/14/tech/amazon-ring-police-footage/index.html)
*   Congressional Research Service on Stored Communications Act: [Congress.gov](https://www.congress.gov/crs-product/R45173)
*   DevOps.com — Atlassian Outage 2022: [devops.com](https://devops.com/what-sres-can-learn-from-the-atlassian-outage-of-2022/)
*   Dhruv Bhutani migration: [Android Authority](https://www.androidauthority.com/reasons-to-run-local-ai-3620233/)
*   EU Data Act: [European Commission](https://digital-strategy.ec.europa.eu/en/policies/data-act)
*   GAIA-X analysis: [Taylor & Francis](https://www.tandfonline.com/doi/full/10.1080/1369118X.2025.2516545)
*   GAIA-X: [gaia-x.eu](https://gaia-x.eu/)
*   Gizmodo censorship testing: [gizmodo.com](https://gizmodo.com/we-tested-ai-censorship-here-s-what-chatbots-won-t-tel-1851370840)
*   Jasmine Mannan migration: [XDA](https://www.xda-developers.com/cut-cord-on-chatgpt-why-only-using-local-llms-in-2026/)
*   Montana Right to Compute Act: [ALEC](https://alec.org/model-policy/right-to-compute-act/)    
*   OpenAI 2023 breach: [Reuters](https://www.reuters.com/technology/cybersecurity/openais-internal-ai-details-stolen-2023-breach-nyt-reports-2024-07-05/)
*   OpenAI Status — December 2024 Outage: [status.openai.com](https://status.openai.com/incidents/01JMYB483C404VMPCW726E8MET)
*   OVHcloud — Strasbourg Fire: [corporate.ovhcloud.com](https://corporate.ovhcloud.com/en/newsroom/news/informations-site-strasbourg/)
*   OVHcloud fire: [BackupLABS](https://backuplabs.io/news/7-terrifying-saas-data-loss-incidents-you-need-to-know-about/)
*   Oyez — Smith v. Maryland (1979): [www.oyez.org](https://www.oyez.org/cases/1978/78-5374)
*   Oyez — United States v. Miller (1976): [www.oyez.org](https://www.oyez.org/cases/1975/74-8)
*   Proton transparency analysis: [proton.me](https://proton.me/blog/big-tech-data-requests-surge)
*   Ring employee firings: [CNBC](https://www.cnbc.com/2020/01/09/ring-fired-four-employees-for-watching-customer-video-feeds.html)
*   Ring FTC settlement: [FTC Press Release](https://www.ftc.gov/news-events/news/press-releases/2023/05/ftc-says-ring-employees-illegally-surveilled-customers-failed-stop-hackers-taking-control-users)
*   Ring law enforcement sharing: [Kurtz & Blum](https://kurtzandblum.com/blog/ring-doorbell-lawsuit-concerns-what-amazon-can-really-share-with-police/)
*   selfh.st — 2024 Survey Results: [selfh.st/survey](https://selfh.st/survey/2024-results/)
*   TechCrunch — OpenAI Outage Analysis: [techcrunch.com/2024](https://techcrunch.com/2024/12/13/openai-blames-its-massive-chatgpt-outage-on-a-new-telemetry-service/)
*   The Guardian — UniSuper Google Cloud Incident: [www.theguardian.com](https://www.theguardian.com/australia-news/article/2024/may/09/unisuper-google-cloud-issue-account-access)
*   The Hacker News — Code Spaces Cyberattack: [thehackernews.com/2014](https://thehackernews.com/2014/06/cyber-attack-on-code-spaces-puts.html)
*   The Register — Musey Google Workspace Lawsuit: [www.theregister.com](https://www.theregister.com/2019/07/05/musey_v_google_lawsuit/)
*   Tom's Guide — September 2025 ChatGPT Outage: [www.tomsguide.com](https://www.tomsguide.com/news/live/chatgpt-outage-live-september-3-2025)
*   UniSuper/Google Cloud incident: [Axcient](https://axcient.com/blog/how-google-cloud-deleted-a-125-billion-account/)