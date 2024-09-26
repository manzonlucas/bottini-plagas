export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Bottini Plagas",
  description: "Controladores de plagas",
  phone: "",
  cellphone: "",
  whatsappNumber: "123",
  address: "",
  navItems: [
    {
      label: "Inicio",
      href: "#/", // #root?
    },
    {
      label: "Servicios",
      href: "#servicios",
    },
    {
      label: "Nosotros",
      href: "#nosotros",
    },
    {
      label: "Contacto",
      href: "#contacto",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
  },
};
