import { Home } from "./sections/home";
import { Company } from "./sections/company";
import { Services } from "./sections/services";
import { Contact } from "./sections/contact";
import { Footer } from "./components/footer";
import { Toaster } from "react-hot-toast";

export default function Main() {
  return (
    <>
      <Toaster />
      <Home />
      <Services />
      <Company />
      <Contact />
      <Footer />
    </>
  );
}
