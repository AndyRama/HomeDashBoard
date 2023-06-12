export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Next.js",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Expertise",
      href: "/Expertise",
    },
    {
      title: "Methodologie",
      href: "/",
    },
    {
      title: "Projet",
      href: "/",
    },
    {
      title: "Contact",
      href: "/",
    },
    {
      title: "Mention Légale",
      href: "/",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/andyrama/homedashboard",
    docs: "https://ui.shadcn.com",
  },
}
