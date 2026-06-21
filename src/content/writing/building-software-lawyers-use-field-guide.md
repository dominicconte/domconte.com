---
title: "Building software lawyers actually use: a field guide"
description: "Most legal software is technically fine and practically dead - bought, deployed, and never opened. A field guide to the unglamorous design decisions that separate the tools fee-earners reach for from the ones they ignore."
pubDate: 2026-02-17
pillar: "Frameworks & guides"
featured: true
draft: false
---

The graveyard of legal software is full of technically excellent products. Good engineering, real capability, a genuine problem addressed - bought, deployed, and never opened twice. The cause of death is almost never the technology. It's a set of design decisions that have nothing to do with how clever the system is and everything to do with whether a busy, anxious, interrupted fee-earner will actually reach for it.

This is the field guide I wish someone had handed me when I started. It's a collection of rules, each one paid for by watching a good tool fail.

## Rule one: meet them where they already are

The strongest predictor of whether a tool gets used is whether the fee-earner has to leave what they're doing to use it. Every context-switch is a tax, and busy lawyers won't pay it. A tool that lives in a separate system - however good - starts at a massive disadvantage to a tool that lives inside the document, the matter, or the inbox where the work already happens.

If you remember one thing from this guide: do not build a destination. Build a capability that shows up where the work already is. The best legal software is the kind people barely notice they're using, because it never asked them to go anywhere.

## Rule two: the first session is the entire funnel

A fee-earner gives a new tool roughly one real attempt. If that first genuine use is confusing, slower than the old way, or produces something they then have to check so carefully the time saving evaporates, they're gone - and they won't tell you. They'll just never come back, and you'll see it in usage stats you can't explain.

So obsess over the first session out of all proportion. Not the demo - the first time someone uses it on real work under real pressure. Everything about onboarding, defaults, and the very first output matters more than any feature you'll ship later, because no later feature gets used by someone who left after session one.

## Rule three: make the work checkable, always

Lawyers are professionally responsible for what they put their name to. A tool that produces output they can't verify is a tool they can't safely use, no matter how good it is. Show the sources. Show the reasoning. Show what the tool relied on. Let them check.

This isn't only about trust - it's about *speed*. Paradoxically, a tool that makes its work checkable lets lawyers check it *less*, because they can spot-verify the bits that matter and rely on the rest. A black box forces them to check everything, which is slower than doing it by hand. Checkability is what converts a capability into a time saving.

## Rule four: fail loudly, never silently

The most dangerous thing a legal tool can do is be confidently, invisibly wrong - to produce an answer that looks exactly as authoritative when it's wrong as when it's right. One silent failure that reaches a client teaches a fee-earner never to trust the tool again, and they're correct to learn that.

Design for loud failure. When the tool is unsure, say so. When it can't find a clear answer, say that rather than inventing a confident one. A tool that reliably tells you when to worry is worth more than a more capable tool that hides its uncertainty - because the first one you can build a working relationship with, and the second one will eventually burn you.

## Rule five: respect the six-minute day

Real legal work happens in fragments - six minutes here, interrupted by a call, four minutes there, context switched away and back. A tool that needs a calm, focused twenty-minute session to deliver value is built for a working day that doesn't exist.

Design for interruption. Hold context across breaks. Let people put the work down and pick it up without losing their place. Don't punish someone for the fact that their day is not their own. The tools that survive are the ones that work in the cracks, because the cracks are where the day actually is.

## Rule six: keep the judgement with the human

The fastest way to get a tool rejected is to have it make a judgement the lawyer feels they should have made - especially one where being wrong lands on them personally. Fee-earners will happily hand over assembly, searching, drafting, marshalling. They will not hand over the call they're accountable for, and they shouldn't.

So design the tool to do the assembly and stop at the judgement. Present a prepared, evidenced piece of work for the human to decide on - not a finished decision for them to rubber-stamp. Tools that respect the boundary between assembly and judgement get adopted. Tools that cross it, however capable, get switched off, because they ask the lawyer to bet their name on someone else's machine.

## The pattern underneath all six

Every rule here is really the same rule wearing different clothes: build for the fee-earner's actual reality, not the idealised one in your head. The real fee-earner is busy, interrupted, professionally exposed, sceptical, and gives you one chance. Build for *that* person and you build something used. Build for the calm, focused, trusting user who appears in demos and never at a desk, and you build another technically-excellent entry in the graveyard.

None of this is about the model. It never was. The model is the easy part now. The hard part - the part that decides whether the thing lives or dies - is whether a real lawyer, on a real Tuesday, chooses your tool over doing it the way they already know. Get the six rules right and they might. Get the engineering brilliant and the rules wrong and they certainly won't.
