import { Link } from "@nextui-org/link";

import { siteConfig } from "../config/site";

import { SkewedText } from "./skewedText";

export const Footer = () => {
  return (
    <footer className="z-50 flex flex-col items-center justify-between w-full gap-2 p-2 bg-default-50">
      <div className="flex gap-2">
        <span className="italic font-bold text-default-600">BOTTINI</span>
        <SkewedText text="Controladores de plagas" />
      </div>
      <hr className="w-full" />
      <Link
        isExternal
        className="flex items-center gap-1 text-current hover:font-bold"
        href={siteConfig.links.devLinkedin}
        title="dev-site"
      >
        <div className="flex gap-2">
          <span>&copy; 2024 - Desarrollado por </span>
          <SkewedText text="Lucas Manzón" />
        </div>
      </Link>
    </footer>
  );
};
