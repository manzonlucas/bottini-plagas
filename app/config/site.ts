export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Bottini Plagas",
  description: "Controladores de plagas",
  navItems: [
    {
      label: "Inicio",
      href: "/", // #root?
    },
    {
      label: "Servicios",
      href: "#services",
    },
    {
      label: "Nosotros",
      href: "#company",
    },
    {
      label: "Contacto",
      href: "#contact",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
  },
};
