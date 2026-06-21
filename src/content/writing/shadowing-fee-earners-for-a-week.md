---
title: "What I learned shadowing fee-earners for a week"
description: "I spent a week sitting next to lawyers watching them actually work, not telling me about their work. Almost everything useful I now believe about legal software came from the gap between the two."
pubDate: 2025-12-09
pillar: "Legal AI in practice"
featured: false
draft: false
---

The most valuable week I've spent building legal software involved writing almost no software. I sat next to fee-earners and watched them work. Not interviewed them - watched them. There is an enormous difference, and the gap between what lawyers *say* they do and what they *actually* do is where most legal software goes to die.

I'd recommend this to anyone building for professionals, so let me share what the watching taught me that the interviewing never could.

## What people tell you is a tidy fiction

When you ask a lawyer to describe their workflow, you get a clean, logical, slightly idealised account. First I review the documents, then I identify the issues, then I draft, then I send for review. It sounds like a process diagram, and if you build software for that process diagram, you build something nobody uses.

Because that's not what happens. What actually happens, when you watch, is gloriously messy. The lawyer reviews three documents, gets interrupted by a call, comes back, can't remember where they were, re-reads one, spots something in document two that changes how they read document one, switches to email to chase a missing file, drafts a paragraph, abandons it, copies an old version from a matter eighteen months ago because it was "basically the same deal," and patches it. The tidy four-step process was a story they told me, in good faith, about work that doesn't actually proceed in steps at all.

You cannot get this from an interview. People don't have access to their own real workflow - they have access to the cleaned-up narrative. You only see the truth by watching, and the truth is what you have to build for.

## The workarounds are the product spec

The single most useful thing I saw was the workarounds. Every fee-earner had a private collection of hacks - the spreadsheet they keep on the side that the official system should have made unnecessary, the old matter they always copy from, the personal naming convention, the email-to-self that functions as a to-do list, the screenshot they take because it's faster than navigating back.

Each of those workarounds is a precise, free, validated specification for a product that should exist. The fee-earner has already identified a real pain, designed a solution, and proven it works by using it daily under real pressure. They've done the product research for you. The spreadsheet-on-the-side isn't a sign of an undisciplined lawyer - it's a sign of a missing product, drawn to spec by the person who needs it.

I now think watching for workarounds is one of the highest-yield things a legal-tech builder can do, and almost nobody does it, because you can't find a workaround by asking "what are your pain points?" People don't experience their workarounds as pain. They experience them as just how it's done.

## The "obvious" automation they'd never use

I also watched fee-earners decline to use things that, on paper, should have been obvious wins - and watching showed me why, which an interview never would have.

There was a task that looked perfectly automatable from outside. I'd have built a tool for it without hesitating. But sitting next to the work, I saw the catch: the task contained a small, buried judgement, and the cost of getting that judgement wrong was severe and landed personally on the lawyer. The time the automation would save was minutes. The downside if it silently got the judgement wrong was a professional-negligence-shaped problem with their name on it. No rational fee-earner accepts that trade, and they were right to refuse the lovely tool I'd have built.

That taught me the thing I now repeat constantly: the question isn't "can this task be automated?" It's "what is the cost to *this person* of the automation being wrong, and does the time saved justify it?" From outside, you see the task. Only from beside the work do you see the asymmetry - tiny upside, catastrophic, personal downside - that makes a fee-earner quietly refuse a tool that looked obviously good in the demo.

## The interruptions are the real working environment

The last thing the week hammered home: nobody works in the calm, focused conditions that software demos assume. The real working environment is interrupted, fragmented, context-switched to pieces. A fee-earner rarely gets a clean run at anything. They get six minutes, then a partner's question, then four minutes, then a client call.

This changes what good software even is. A tool that requires a calm, focused, twenty-minute session to deliver its value is a tool for a working environment that doesn't exist. The tools that survive are the ones that work in six-minute fragments - that hold context across interruptions, that let you put the work down and pick it up without losing your place, that don't punish you for the fact that your day is not your own. I'd never have designed for that if I hadn't watched a fee-earner lose their place for the fifth time in an hour and sigh.

## Why I keep going back to the desk

It would be more comfortable, and more scalable, to build legal software from a strategy deck. Watching is slow and doesn't generalise neatly. But every genuinely useful product instinct I have came from beside the work, not from above it - from the gap between the tidy fiction people tell and the messy truth they live.

The model was never the hard part, and it still isn't. The hard part is knowing what a fee-earner actually does on a real, interrupted, anxious Tuesday - and the only way I've found to know that is to pull up a chair and watch.
