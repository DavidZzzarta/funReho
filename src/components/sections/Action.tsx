import clsx from "clsx";
import Contact from "../Contact";
import OurSperator from "../OurSeparator";

import { Handshake, Lightbulb, HeartHandshake, UsersRound } from "lucide-react";

const formasDeAyudar = [
  {
    title: "Apoyo en eventos y proyectos",
    icon: Handshake,
  },
  {
    title: "Ideas, propuestas y feedback",
    icon: Lightbulb,
  },
  {
    title: "Patrocinios y donaciones",
    icon: HeartHandshake,
  },
  {
    title: "Ayuda y acompañamiento a tu comunidad",
    icon: UsersRound,
  },
];

export function FormasDeAyudar() {
  return (
    <div className="mx-auto my-12 flex max-w-md flex-col items-center gap-6">
      {formasDeAyudar.map(({ title, icon: Icon }) => (
        <div
          key={title}
          className="flex w-full items-center justify-center gap-4"
        >
          <Icon
            size={22}
            strokeWidth={1.5}
            className="shrink-0 text-purple-300"
          />

          <span className="text-center text-sm text-zinc-300">{title}</span>
        </div>
      ))}
    </div>
  );
}

function Contenido() {
  return (
    <section className={clsx("container", "mx-auto", "text-center", "my-36")}>
      <h2
        className={clsx(
          "w-full",
          "my-2",
          "text-5xl",
          "font-bold",
          "leading-tight",
          "text-center",
        )}
      >
        ¡Todos podemos aportar!
      </h2>
      <div className={clsx("w-full", "mb-4")}>
        <div
          className={clsx(
            "h-1",
            "mx-auto",
            "w-1/6",
            "opacity-25",
            "my-0",
            "py-0",
            "rounded-t",
          )}
        ></div>
      </div>
      <OurSperator />
      <h3 className={clsx("my-4", "text-xl", "leading-tight")}>
        Cada aporte cuenta. Puedes ser parte de nuestra labor de diferentes
        maneras:
      </h3>

      <FormasDeAyudar />
      <p className={clsx("my-4", "leading-tight")}>
        ¿Quieres ser parte? Contáctanos y construyamos juntos un impacto
        positivo.
      </p>
      <Contact />
    </section>
  );
}

export function Action() {
  return (
    <div>
      <Contenido />
    </div>
  );
}
