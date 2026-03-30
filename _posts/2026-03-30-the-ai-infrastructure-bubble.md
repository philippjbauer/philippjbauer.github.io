---
title: "The AI Infrastructure Bubble: What Actually Gets Built"
date: 2026-03-30
permalink: /the-ai-infrastructure-bubble/
categories: AI, infrastructure, data centers, power, economics
layout: default
---

# The AI Infrastructure Bubble: What Actually Gets Built

We all have heard the stories about the hyperscale data center build out in the news. I've been following this story for a while now and believed the industry figures that were put out there. Claims of massive investments and stories of concrete not drying fast enough. 

Today I caught a conversation with Ed Zitron – host of the Better Offline podcast – on "The Tech Report" YouTube channel where he pulled back the curtain on what's really happening with data center and power generation construction. The numbers he shared don't match the headlines.

## The Construction Gap Nobody's Talking About

I was caught off guard when I heard Zitron's reporting on Sightline Climate's research. Their latest reporting shows that somewhere between 190 and 240 gigawatts of data center capacity announced worldwide. That sounds like the AI revolution is already here.

Except only 5 gigawatts are actually under construction.

Let that sink in. Less than 3% of announced capacity is actually being built.

He went looking for specific projects and what he found does not match the reality. And while I couldn't verify the exact numbers he presented in the interview, here is what I found about the projects he mentioned:

*   **Fermi America's 11 GW project in Abilene, Texas**: Supposed to deliver 1 GW of "clean" natural gas power by end of 2026. As of February 2026, only geotechnical work has commenced and the project is proceeding through early development stages.
    
*   **Stargate Abilene**: Only two of eight announced buildings completed and operational as of September 2025. Further construction was halted by OpenAI due to financing challenges and the shifting interests of the company in relation to the Stargate project and the advent of the Vera Rubin chip.
    
*   **Nebius's Vineland, NJ datacenter for Microsoft**: Was supposed to have completed 100MW at the end of 2025. As of February 2026, the project has only completed the first phase of construction at 50MW. 

There are several other projects that are plagued by similar delays, facing issues with power delivery, financing and changing priorities. Energy cost and Roi calculations that were based on 2025 energy prices are now obsolete after the US invasion in Iran and the resulting energy market volatility.

Building data centers is hard. Building hyperscale datacenters is even harder. Especially in the face of more and more uncertain market conditions. Most of these projects aren't progressing at the announced pace. Significant portions of the announced pipeline face delays or may not materialize at all.

## Power: The Elephant in the Room

The issue of power is the most critical bottleneck. Data centers are energy hogs. The power requirements for these projects are enormous, and the grid infrastructure to support them is often lacking. Even if a project has the land and the capital, without reliable power delivery, it's just an empty shell.

But the scale of this problem surprised me.

Between 30-50% of data center projects planned for 2026 face delays due to power constraints, grid bottlenecks and other issues. They've signed contracts with suppliers, sure. But that's not the same thing as having actual power delivery.

More and more companies are set build out their own energy infrastructure. Some are counting on behind-the-meter solutions like liquified natural gas, which comes with its own supply chain nightmares. And while it may be cleaner than energy generated from coal or diesel generators, it's still not the "green" solution that many companies are touting.

We can look to xAI's data center in Memphis, TN. Elon Musk's company has been disregarding local emmission regulations bringing online up to 35 gas powered turbines to make up for the lack of grid power. This lead to additonal pollution impacting people in already overburdened, historically Black communities in the area. The Southern Environmental Law Center commissioned an independent study on the impacts on the commuinties around the data center, estimating annual health damages at $30–$44 million. The NAACP has filed a lawsuit in July 2025 claiming violations against the Clean Air Act. The EPA ruled in January 2026 that xAI's use of mobile gas turbines is not exempt and requires permitting. It's unclear if the unregulated use of these turbines will be penalized by the federal government.

Some providers look to utilize solar power to reduce the carbon impact for their projects. But the impact remains minimal. The math just doesn't work in their favor. For a single gigawatt of power from a solar farm, you're looking at 7 to 10 square miles of land. A solar farm the size of Manhattan would produce about 2 GW. We're talking about building massive infrastructure that doesn't exist yet.

In my view, solar power will always be a small fraction of the total power needed for these data centers, while communities surrounding these data centers will continue to shoulder the negative effects of pollution, rising energy costs, and the strain on local water resources.

## GPU Backlogs and Questionable Economics

Beyond the lack of available energy, it gets even weirder. Zitron stipulates that it takes about 6 months to install a quarter's worth of Nvidia GPUs sold. One year's worth of sales takes roughly 2 years to install.

Companies are buying chips that won't be installed until years later. Where are they sitting? Probably in warehouses at Original Device Manufacturers like Foxconn or Quanta, with ownership transferred on paper only. And as I mentioned above, OpenAI has already paused construction on some of their projects in light of upcoming GPU releases. What will happen to all the chips that have already been purchased and produced? 

Nvidia keeps beating earnings and raising estimates. But the question Zitron keeps asking is simple: "To whom? To where?"

Most AI companies aren't making money. The economics look like this: turn a hundred million dollars into a few million, or a couple billion into a hundred million. The only clear winners are Nvidia and the hardware manufacturers selling the shovels.

Yet, OpenAI bought up a majority of RAM production capacity for 2026. For GPUs that haven't been produced, that will go into data centers that haven't even started construction. Again, consumers and companies are feeling the effects on the hardware market. Compounding the effects of tarrifs in an increasingly unstable economy.

## What This Means for You

Why should we – as developers, business leaders and more broadly citizens – care when billion dollar projects like these face disruption?

As developers and business leaders we should care about what powers our toolchains. The (almost) free ride of low-cost tokens will eventually end. The more pressure companies like OpenAI, Microsoft and Anthropic are feeling, the closer we get to exploding costs of subscriptions to these tools.

We may not see an increase in the monthly price we pay right away. But similar to other subscription services – remember how Netflix cut features and raised prices over the years? – the possibility of degradation in service like lower quotas, limited access to premium models or longer wait times during peak times are very possible. And eventually the increadible amount of subsidies we enjoy will run out in order for the big tech companies to stop the financial bleed they currently experience.

For businesses that rely on on-prem hardware, disruptions in the hardware market can throw regular procurement and new investments into chaos, delay or threaten projects, impact RoI projections and lead to less revenue when as access becomes more and more limited. A single company was able to impact a whole industry at once, basically on speculation alone.

As citizens we should be concerned about the huge subsidies that are funneled into these projects. Federal, state and local government support the AI data center buildout with tax incentives, waiving of permitting requirements and regulations – either outright or by turning a blind eye, zoning and land use changes, public-private partnerships and infrastructure investments.

To give you some numbers:

- Amazon received up to $8 billion in various incentives for a data center complex in Indiana in 2024.
- Texas has given Meta $687 million in tax incentives for a data center near El Paso in 2023.
- Google received $376.8 million in tax incentives for a data center in Oklahoma in 2007.

These kind of subsidies are often justified by the promise of job creation and economic growth. But the reality is that these data centers are highly automated and require relatively few workers to operate. The jobs that are created are often low-paying and temporary, while the profits go to a handful of tech giants.

How could this money be spent in your community?

## The Real Question

The question I keep coming back to this: why are we building all of this?

Zitron's theory is that tech CEOs don't know what else to do. The hypergrowth era is over. They hire people, fire people, buy things. AI data centers allow them to do all of that without real outcomes. They can announce a new project, hire a bunch of people to work on it, and then delay or cancel it without much accountability. It's a way to keep the hype going without delivering results.

The transformation is striking. Big tech companies like Meta, Amazon, Microsoft, and Google have gone from asset-light cash machines to asset-heavy behemoths. Combined capital expenditure across these hyperscalers is projected at $650-700 billion in 2026.

For what? The promise of AGI? Based on technology that some high profile AI researchers say will never be achieved on the back of the transformer architecture? To support more Copilot licenses? The answer isn't clear.

## What I'm Taking Away

I've been skeptical of hype cycles before – metaverse, blockchain, you name it. This feels different because the capital requirements are so massive, and the obsolescence timeline is so short, the goals so vague. The fact that so much of the announced infrastructure may never materialize is a huge red flag. It suggests that the industry is more focused on signaling and speculation than on building sustainable, scalable solutions.

---

## References

1. The Tech Report & Ed Zitron. ["The AI boom is a lie: Fake data centres and unused GPUs"](https://www.youtube.com/watch?v=nxUEOdC4VzU) March 27, 2026.

2. Ed Zitron, "Where's your Ed at?" Newsletter. ["The AI Industry Is Lying To You"](https://www.wheresyoured.at/the-ai-industry-is-lying-to-you) March 24, 2026.

3. Sightline Climate. ["Data Center Outlook: Half of 2026 Pipeline May Not Materialize."](https://www.sightlineclimate.com/research/data-center-outlook) February 24, 2026.

4. Paul Kedrosky. ["Chart of the Day: Data Center Buildout Slowed Sharply"](https://paulkedrosky.com/chart-of-the-day-data-center-buildout-slowed-sharply/) March 19th, 2026.

5. The Guardian. ["Elon Musk's xAI datacenter generating extra electricity illegally, regulator rules"](https://www.theguardian.com/technology/2026/jan/15/elon-musk-xai-datacenter-memphis) January 15, 2026.

6. Epoch AI. ["Can AI companies become profitable?"](https://epoch.ai/gradient-updates/can-ai-companies-become-profitable) January 28th, 2026.

7. Pat Garofalo. ["How to Rein in Big Tech's Secret Data Center Deals"](https://www.economicliberties.us/wp-content/uploads/2025/11/data_center_brief_FINAL.pdf) November, 2025.

8. Elizabeth Gabriel. ["As data centers boom, Indiana tax breaks could reach nearly $1B"](https://mirrorindy.org/southside-data-center-tax-break-franklin-township-government-assistance-amazon-google-microsoft/) June 9th, 2025.

9. Nick Rommel. ["Microsoft pauses construction on parts of Mount Pleasant site again"](https://www.wpr.org/news/microsoft-pauses-construction-on-parts-of-mount-pleasant-site-again) March 20th, 2025.

10. MSN. ["OpenAI and Oracle decide not to expand Texas data center site: report"](https://www.msn.com/en-us/news/technology/openai-and-oracle-decide-not-to-expand-texas-data-center-site-report/ar-AA1XGHgk) March, 2026.

11. Southern Environmental Law Center. ["New study finds proposed xAI gas plant could worsen regional air pollution, cause millions of dollars in annual health damages"](https://www.selc.org/press-release/new-study-finds-proposed-xai-gas-plant-could-worsen-regional-air-pollution-cause-millions-of-dollars-in-annual-health-damages/) February 16, 2026.
