import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { SubHero } from "../components/SubHero";
import { Camino } from "../components/Camino";

export function Recorrido() {
  return (
    <>
      <Nav />
      <SubHero
        title="Recorrido"
        subtitle="Nuestro recorrido es ayudar a las personas que lo necesitan"
      />
      <Camino />
      <Footer />
    </>
  );
}
