import { Link } from "@nextui-org/link";

import { SkewedText } from "./skewedText";
import { siteConfig } from "../config/site";

export const Footer = () => {
  return (
    <footer className="flex items-center justify-between w-full p-2">
      <div className="flex gap-2">
        <span className="italic font-bold text-default-600">BOTTINI</span>
        <SkewedText text="Controladores de plagas" />
      </div>
      <div className="flex gap-2">
        <span>&copy; 2024 - Desarrollado por </span>
        <Link
          isExternal
          className="flex items-center gap-1 text-current hover:font-bold"
          // className="flex items-center gap-1 font-normal leading-normal text-current transition-all duration-200 ease-in-out hover:font-bold"
          href={siteConfig.links.devLinkedin}
          title="dev-site"
        >
          <SkewedText text="Lucas Manzón" />
        </Link>
      </div>
    </footer>
  );
};
