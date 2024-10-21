export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Bottini - Controladores de plagas",
  description: "Controladores de plagas",
  email: 'bottiniplagas@gmail.com',
  phone: '(2477) 432822',
  cellphone: '2477623425',
  cellphone2: '2477450180',
  whatsappNumber: '2477623425',
  address: "Valentin Potente 450, Pergamino, Buenos Aires.",
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
    devLinkedin: "https://www.linkedin.com/in/manzonlucas",
  },
};
