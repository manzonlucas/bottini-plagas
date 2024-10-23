import { Toaster } from "react-hot-toast";

import { Home } from "./sections/home";
import { Company } from "./sections/company";
import { Services } from "./sections/services";
import { Contact } from "./sections/contact";
import { WhatsappButton } from "./components/whatsappButton";

export default function Main() {
  return (
    <>
      <Home />
      <Services />
      <Company />
      <Contact />
      <WhatsappButton />
      <Toaster />
    </>
  );
}
