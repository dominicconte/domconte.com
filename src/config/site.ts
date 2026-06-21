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
  // Default social-share image (in /public), 1200x630 PNG.
  ogImage: "/og-image.png",
  // Headshot (in /public). Save your photo here as dom-conte.jpg.
  headshot: "/dom-conte.jpg",
  locale: "en_GB",
  location: "London, UK",

  // --- Contact ----------------------------------------------------------
  email: "dom@limelightlabs.co.uk",

  // --- Social / sameAs (powers Person schema + footer links) ------------
  // These exact URLs tell Google all these profiles are one entity (you).
  // Only include profiles that actually exist - a sameAs link to a missing
  // page is a wasted signal. Confirmed live profiles:
  socials: {
    linkedin: "https://www.linkedin.com/in/dominicconte/",
    x: "https://x.com/dominic_conte",
    github: "https://github.com/dominicconte",
    crunchbase: "https://www.crunchbase.com/person/dominic-conte",
  },
  // Pending profiles - add the real URLs here once the profiles exist, then add
  // them to the `sameAs` array and the footer below.
  //   muckrack: "https://muckrack.com/<your-slug>",
} as const;

// Profiles included in the Person schema `sameAs` array. Add Muck Rack here
// once it's claimed and you have the real URL.
export const sameAs: string[] = [
  site.socials.linkedin,
  site.socials.x,
  site.socials.github,
  site.socials.crunchbase,
  site.company.url,
];

// Primary navigation.
export const nav: { label: string; href: string }[] = [
  { label: "About", href: "/about/" },
  { label: "Writing", href: "/writing/" },
  { label: "Media & Speaking", href: "/media/" },
  { label: "Work", href: "/work/" },
  { label: "Labs", href: "/labs/" },
];

// Secondary links shown in the footer.
export const footerNav: { label: string; href: string }[] = [
  { label: "Contact", href: "/contact/" },
];
