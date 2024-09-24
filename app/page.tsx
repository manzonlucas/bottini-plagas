import { Home } from "./sections/home";
import { Company } from "./sections/company";
import { Services } from "./sections/services";
import { Contact } from "./sections/contact";
import { Footer } from "./components/footer";

export default function Main() {
  return (
    <>
      <Home />
      <Services />
      <Company />
      <Contact />
      <Footer />
    </>
  );
}
