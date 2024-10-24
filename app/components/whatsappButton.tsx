import { siteConfig } from "../config/site";

export const WhatsappButton = () => {
  return (
    <a
      className="sticky z-20 self-end inline-block w-16 my-4 text-white rounded-full shadow-2xl bottom-4 right-4 md:bottom-8 md:right-8"
      href={`https://api.whatsapp.com/send?phone=${siteConfig.whatsappNumber}&text=Hola Bottini, me interesaría obtener mas información sobre sus servicios.`}
      rel="noreferrer"
      target="_blank"
    >
      <img alt="" src="./whatsapp.svg" />
    </a>
  );
};
