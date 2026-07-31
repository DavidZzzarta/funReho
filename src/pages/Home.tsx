import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { HeroGradient } from "../components/HeroGradient";
import { Tour } from "../components/sections/Tour";
import { Info } from "../components/sections/Info";
import { Action } from "../components/sections/Action";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <HeroGradient />
      <Tour />
      <Info />
      <Action />
      <Footer />
    </>
  );
}
