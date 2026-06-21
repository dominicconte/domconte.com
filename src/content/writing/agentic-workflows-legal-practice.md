---
title: "Agentic workflows are coming to legal practice. Here's where they land first."
description: "Agents are the hype of the moment, and most of the legal demos are fantasy. But there's a real, narrow place where agentic workflows arrive first in a law firm - and it isn't where the conference talks point."
pubDate: 2025-10-14
pillar: "Building legal tech"
featured: false
draft: false
---

Every era of legal tech gets a word, and right now the word is "agentic." The pitch is seductive: not a tool you operate, but an agent that takes a goal, makes a plan, uses tools, checks its own work, and comes back when it's done. Point it at a deal and let it run. The demos are genuinely impressive, and most of them, applied to real legal practice, are fantasy.

But underneath the hype there's a real shift, and it will land in firms sooner than the sceptics think - just not where the keynote speakers are pointing. So let me separate the fantasy from the part I'd actually bet on.

## Why the obvious agentic demos won't ship

The crowd-pleasing demo is the autonomous one: an agent that runs an entire matter, or negotiates a contract end to end, or does discovery start to finish without a human. It won't ship into real practice any time soon, and not because the models can't do impressive pieces of it. It won't ship because of accountability.

Law is a profession where a named human is on the hook for the outcome. The further an agent gets from a human who can check, correct, and take responsibility, the more the firm is betting its licence on a system that is confidently wrong some non-zero fraction of the time. No serious firm makes that bet on the work that matters, and they're right not to. Full autonomy on consequential legal work isn't a near-term product. It's a liability with a nice interface.

So the question isn't "when do agents take over legal work." It's "where does a bounded, supervised, multi-step agentic workflow create real value while keeping a human firmly accountable." That place exists, and it's specific.

## Where it actually lands first

Agentic workflows arrive first in the tasks that are **multi-step, bounded, reversible, and checkable**. All four conditions matter.

*Multi-step*, because a single-step task doesn't need an agent - it needs a function. The value of agency is in chaining several actions with decisions between them.

*Bounded*, because the agent needs a clearly defined arena. "Gather every document referenced in this disclosure list, retrieve them, check each one exists and matches its description, and flag the gaps" is bounded. "Handle the disclosure" is not.

*Reversible*, because the whole game is keeping the cost of a mistake low. If the worst case of a wrong step is "a human notices and corrects it before anything is filed or sent," you can let the agent run. If the worst case is "we missed a limitation date," you cannot.

*Checkable*, because a human has to be able to verify the result faster than they could have done the work themselves - otherwise the agent has saved nothing. The output has to be inspectable: here's what I did, here's the evidence, here's where I was unsure.

Put those together and you get the real first home for agentic workflows: the assembly and preparation layers of practice. Marshalling documents. Building first-pass bundles. Running a checklist across a data room and flagging what's missing or anomalous. Reconciling versions. Preparing the structured file a fee-earner then works from. Tasks where the agent does the legwork across many steps, and a human does the judgement and takes the responsibility.

## The pattern that makes it safe

The design pattern I trust is what I'd call the **prepared handoff**. The agent doesn't decide and act on the world. It works, then presents - here is what I assembled, here is each step I took, here is the source for every item, and here are the three things I wasn't sure about and want you to look at. The human reviews a prepared, evidenced piece of work rather than a finished decision, and the act of taking responsibility stays human.

This is unglamorous compared to the autonomous-lawyer demo, and it's also the version that actually ships, because it inverts the risk. The agent's failures surface *before* they reach the world, at a checkpoint a human owns, rather than after, in a filing. You get most of the time saving with almost none of the catastrophic downside.

## What I'd tell a firm experimenting now

Don't chase the autonomous demo. It's a great way to spend a year proving you can't safely deploy the thing you built.

Instead, go find a task that is multi-step, bounded, reversible and checkable - there are more of them in your practice than you think, mostly in the preparation work everyone resents - and build a supervised agentic workflow that ends in a prepared handoff to a human. Measure whether the human can check the output faster than they could have done the work. If they can, you've found real value. If they can't, the agent is theatre, however clever it looks.

Agentic workflows are coming to legal practice. They're just going to arrive quietly, in the document-marshalling and the bundle-building and the checklist-running, doing the legwork so a human can spend their attention on the judgement - rather than striding into the courtroom to argue the case, which is the version that gets the applause and will not be shipping to a firm near you for a long time.
