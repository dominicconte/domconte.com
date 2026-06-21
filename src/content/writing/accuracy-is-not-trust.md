---
title: "Accuracy is not trust - and legal AI keeps confusing them"
description: "The legal AI industry obsesses over accuracy benchmarks. But lawyers don't adopt tools because they're accurate. They adopt tools they can trust - and those are two very different properties."
pubDate: 2025-10-28
pillar: "Legal AI in practice"
featured: false
draft: false
---

Sit through enough legal AI pitches and you notice everyone is selling the same number. Accuracy. Our system is 94% accurate. We beat the benchmark. We hallucinate less than the other one. The whole industry has organised its marketing around a single metric, on the apparently obvious assumption that the more accurate tool wins.

I think that assumption is wrong, or at least badly incomplete, and watching real lawyers decide whether to use real tools is what changed my mind. Lawyers do not adopt the most accurate tool. They adopt the tool they can *trust* - and accuracy and trust, it turns out, are almost entirely different properties.

## A thought experiment

Imagine two research tools. Tool A is 95% accurate and gives you a confident, clean answer every time, beautifully formatted, with no indication of how sure it is. Tool B is 90% accurate, but for every answer it shows you its sources, flags where it's uncertain, and occasionally says outright "I can't find a clear answer to this - here's what I found, you should check it."

On the benchmark, Tool A wins. In a law firm, Tool B wins, and it isn't close. And once you see why, the entire accuracy-first framing falls apart.

## Why the less accurate tool wins

The reason is that a lawyer is professionally responsible for the output. Their name goes on the advice. So the question a lawyer is actually asking a tool is not "how often are you right?" It's "can I tell, on this specific answer, whether I can rely on you?"

Tool A, the more accurate one, can't answer that question. It's right 95% of the time, but it presents every answer with the same confidence, which means the lawyer has no way to know which answer is in the 5%. To use it safely, they have to check everything - which destroys the time saving and, worse, breeds a low background dread. A confidently-wrong answer that looks exactly like a confidently-right one is, from a professional-risk standpoint, the most dangerous thing a tool can produce.

Tool B is wrong more often, but it tells you *when to worry*. It shows its work, so you can verify the bits that matter. It flags uncertainty, so your attention goes where the risk is. It fails loudly. That lawyer can build a working relationship with Tool B, because the tool is honest about its own limits. They can trust it - not to be always right, but to be *legible about when it might be wrong*. And that is the property that actually governs adoption.

## Trust is made of things benchmarks don't measure

Once you accept that trust, not accuracy, drives adoption, you start designing for completely different properties - none of which show up on an accuracy benchmark:

**Calibration over correctness.** A tool that knows when it doesn't know is worth more than a slightly more accurate tool that's uniformly confident. Calibrated uncertainty is a feature, arguably the feature.

**Showing the work.** Sources, citations, the chain of reasoning, the documents it relied on. Not because lawyers always check - but because being *able* to check is what lets them stop checking everything.

**Failing loudly.** The worst failure mode in legal AI isn't being wrong. It's being wrong silently, in a way indistinguishable from being right. A tool that fails in a visible, recognisable way is safer than a more accurate tool that fails invisibly.

**Consistency.** A tool that's predictable - same kind of input, same kind of behaviour - earns trust faster than an erratic tool with a higher average score, because trust is built on the ability to form accurate expectations.

## Why the industry keeps getting this wrong

If trust matters more than accuracy, why does everyone sell accuracy? Because accuracy is measurable and trust isn't, at least not easily. You can put accuracy on a slide. You can win a benchmark. Trust is slow, qualitative, built over many interactions, and impossible to reduce to a number for a procurement committee - so the industry optimises the thing it can show off and underinvests in the thing that actually decides adoption.

It's the streetlight problem. Everyone searches for their keys under the accuracy lamppost because that's where the light is, even though the keys - adoption, retention, a fee-earner reaching for the tool unprompted - are over in the dark where trust lives.

## What I'd build for instead

If I'm building legal AI, I will take a slightly less accurate system that is honest, legible, and calibrated over a more accurate one that's a confident black box, almost every time. Because I'm not trying to win a benchmark. I'm trying to get a responsible professional to rely on the thing on a real matter, repeatedly, when their name is on the output.

That only happens through trust, and trust is built from exactly the properties the accuracy obsession ignores: showing the work, flagging doubt, failing loudly, behaving consistently. Accuracy gets you into the evaluation. Trust gets you into the workflow. And the workflow is the only place that counts.
