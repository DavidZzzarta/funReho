import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { SubHero } from "../components/SubHero";

export function Recorrido() {
  return (
    <>
      <Nav />
      <SubHero
        title="Recorrido"
        subtitle="Nuestro recorrido es ayudar a las personas que lo necesitan"
      />
      <Footer />
    </>
  );
}
