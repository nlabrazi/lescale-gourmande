export type SiteLink = {
  label: string;
  to?: string; // Pour NuxtLink
  href?: string; // Pour <a>
  isNuxtLink?: boolean;
  target?: string;
  rel?: string;
  showInNav?: boolean; // Pour afficher dans la navbar
  showInFooter?: boolean; // Pour afficher dans le footer
};

export const useSiteLinks = (): SiteLink[] => [
  { label: "Accueil", to: "/", isNuxtLink: true, showInNav: true, showInFooter: true },
  {
    label: "Notre histoire",
    to: "/about-page",
    isNuxtLink: true,
    showInNav: true,
    showInFooter: true,
  },
  {
    label: "Nos créations",
    to: "/creations",
    isNuxtLink: true,
    showInNav: true,
    showInFooter: true,
  },
  { label: "Contact", to: "/contact-page", isNuxtLink: true, showInNav: true, showInFooter: true },
  {
    label: "Blog",
    href: "https://medium.com/@lescalegourmande",
    isNuxtLink: false,
    target: "_blank",
    rel: "noopener",
    showInNav: false,
    showInFooter: true,
  },
];
