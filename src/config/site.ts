/**
 * Central configuration for domconte.com.
 *
 * >>> CUSTOMISE THIS <<<
 * Almost everything you need to personalise lives in this one file. Update the
 * values below and the whole site (nav, footer, SEO, schema, contact links)
 * updates with them. Items marked TODO are placeholders to replace.
 */

export const site = {
  // --- Identity ---------------------------------------------------------
  name: "Dom Conte",
  // Formal name surfaced for search under "Dominic Conte" (see brand strategy).
  alternateName: "Dominic Conte",
  // Used in <title> suffix and structured data.
  shortName: "Dom Conte",
  tagline: "Legal-tech founder, builder and speaker.",
  // One-line positioning used on the home hero and meta descriptions.
  positioning:
    "I build AI products that lawyers actually use - and write about what it takes to make legal innovation stick.",
  jobTitle: "Co-Founder",
  company: {
    name: "Purple",
    url: "https://purple.law",
  },
  // Canonical production URL (no trailing slash).
  url: "https://domconte.com",
  // Default social-share image (in /public). TODO: replace og-image.svg with a
  // real 1200x630 PNG (og-image.png) - most platforms don't render SVG cards.
  ogImage: "/og-image.svg",
  // Headshot (in /public). TODO: replace dom-conte.svg with a real photo.
  headshot: "/dom-conte.svg",
  locale: "en_GB",
  location: "London, UK",

  // --- Contact ----------------------------------------------------------
  email: "hello@domconte.com", // TODO: confirm the address you want public.
  // Formspree endpoint for the static contact form. Create a free form at
  // https://formspree.io and paste its ID here (the bit after /f/).
  formspreeId: "your-form-id", // TODO: replace with your Formspree form ID.

  // --- Social / sameAs (powers Person schema + footer links) ------------
  // TODO: replace placeholder slugs with your real profile URLs. These exact
  // URLs are what tell Google all these profiles are one entity (you).
  socials: {
    linkedin: "https://www.linkedin.com/in/dominicconte/",
    x: "https://x.com/dominic_conte",
    github: "https://github.com/dominicconte", // TODO: confirm final username.
    crunchbase: "https://www.crunchbase.com/person/dom-conte", // TODO: real slug.
    muckrack: "https://muckrack.com/dom-conte", // TODO: real slug once claimed.
  },
} as const;

// Profiles included in the Person schema `sameAs` array.
export const sameAs: string[] = [
  site.socials.linkedin,
  site.socials.x,
  site.socials.github,
  site.socials.crunchbase,
  site.socials.muckrack,
  site.company.url,
];

// Primary navigation (kept to 4-5 items + a CTA, per the design plan).
export const nav: { label: string; href: string }[] = [
  { label: "About", href: "/about/" },
  { label: "Writing", href: "/writing/" },
  { label: "Speaking", href: "/speaking/" },
  { label: "Work", href: "/work/" },
];

// Secondary links shown in the footer.
export const footerNav: { label: string; href: string }[] = [
  { label: "Projects", href: "/projects/" },
  { label: "Media", href: "/media/" },
  { label: "Contact", href: "/contact/" },
];
