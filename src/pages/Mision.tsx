import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { Separator } from "@heroui/react";

import clsx from "clsx";

import { Surface } from "@heroui/react";

import { Typography } from "@heroui/react";

import OurSeparator from "../components/OurSeparator";
import MisionContent from "../components/MisionContent";


export function Basic() {
  return (
    <Surface className="rounded-3xl p-6" variant="tertiary">
      <p className="text-sm text-muted">
        Aquí tienes la **misión de la Fundación Rehobot**, redactada de forma
        clara, unificada, resumida y con un enfoque estratégico. Eliminé
        repeticiones, organicé las ideas por ejes de acción y le di un tono
        institucional y convincente:
      </p>
    </Surface>
  );
}


function Content() {
  return (
    <div
      className={clsx(
        "flex max-w-4/5 md:max-w-4xl flex-col gap-4 mx-auto pb-30",
      )}
    >
      <img
        className="mt-[120px] w-[17rem] h-[7rem] mx-auto"
        src="/vision.png"
        alt="Visión"
      />
      <div className="text-center">
        <h2 className={clsx("my-2", "text-4xl", "font-bold", "leading-tight")}>
          Misión y Visión
        </h2>
        <OurSeparator />
        <h3
          className={clsx(
            "my-4",
            "text-2xl",
            "leading-tight",
            "max-w-xl",
            "mx-auto",
          )}
        >
          Nuestra misión es ayudar a las personas que lo necesitan
        </h3>
      </div>
      <Basic />

<MisionContent />
    </div>
  );
}

export function Mision() {
  return (
    <>
      <Nav />

      <Content />
      <Footer />
    </>
  );
}
