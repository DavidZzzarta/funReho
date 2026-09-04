import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { Tour } from "../components/sections/Tour";
import { Info } from "../components/sections/Info";
import { Action } from "../components/sections/Action";
import { Footer } from "../components/Footer";
import { Botoncito } from "../components/Botoncito";
export function Home() {
  return (
    <>
      <Botoncito />
      <Nav />
      <Hero />

      <Tour />
      <Info />
      <Action />
      <Footer />
    </>
  );
}
