import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/app/components/primitives";
import { Home } from "./sections/home";
import { Company } from "./sections/company";
import { Services } from "./sections/services";
import { Contact } from "./sections/contact";

export default function Main() {
  return (
    <>
      <Home />
      <Services />
      <Company />
      <Contact />
    </>
  );
}
