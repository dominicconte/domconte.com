import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";
import { site } from "@/config/site";

export async function GET(context: APIContext) {
  const posts = (
    await getCollection("writing", ({ data }) => !data.draft)
  ).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: `${site.name} - Writing`,
    description: `Essays on legal AI, building legal tech and innovation by ${site.name}.`,
    site: context.site ?? site.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/writing/${post.slug}/`,
    })),
    customData: `<language>en-gb</language>`,
  });
}
