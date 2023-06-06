export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Mindanao Property",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
      disabled: false,
    },
    {
      title: "Pricing",
      href: "/pricing",
      disabled: false,
    },
    {
      title: "Properties",
      href: "/properties",
      disabled: false,
    },
    {
      title: "Sign In",
      href: "/auth",
      disabled: false,
    },
  ],
  authNav: [
    {
      title: "Sign out",
      href: null,
      disabled: false,
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
