import { defineCollection, z } from "astro:content";

/**
 * Content collections. To publish a new article, drop a Markdown file into
 * src/content/writing/. To add a project or press item, do the same in their
 * folders. Frontmatter is type-checked against these schemas at build time.
 */

const writing = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    // One of the five content pillars from the brand strategy.
    pillar: z
      .enum([
        "Legal AI in practice",
        "Building legal tech",
        "Legal innovation",
        "Lawyer-to-founder",
        "Frameworks & guides",
      ])
      .optional(),
    // draft: true hides it from listings and the sitemap.
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    year: z.number(),
    status: z.enum(["Live", "In progress", "Prototype", "Archived"]).optional(),
    tags: z.array(z.string()).default([]),
    link: z.string().url().optional(),
    order: z.number().default(99),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const media = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    outlet: z.string(),
    // "Podcast", "Feature", "Interview", "Panel", etc.
    kind: z.string(),
    date: z.coerce.date(),
    url: z.string().url(),
    description: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { writing, projects, media };
