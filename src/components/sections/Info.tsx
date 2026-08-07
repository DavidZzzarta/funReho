import clsx from "clsx";
import { Card, Link as LinkHeroUI } from "@heroui/react";
import OurSperator from "../OurSeparator";
import ProjectsDropdown from "../ProjectsDropdown";

export function OurCard({
  fecha,
  titulo,
  descripcion,
  imgUrl,
  children,
}: {
  fecha: string;
  titulo: string;
  descripcion: string;
  imgUrl: string;
  children?: React.ReactNode;
}) {
  return (
    <Card className={clsx("gap-2 w-full max-w-[376px] md:max-w-none")}>
      <img
        alt="Indie Hackers community"
        className={clsx(
          "pointer-events-none",
          "aspect-square",
          "w-full", // Cambiado de w-94 a w-full para que se adapte al Card
          "rounded-2xl",
          "object-cover",
          "select-none",
        )}
        loading="lazy"
        src={imgUrl}
      />
      <Card.Header className="gap-3">
        <div className={clsx("flex", "flex-col", "gap-1")}>
          <span
            className={clsx(
              "text-xs",
              "font-medium",
              "text-muted",
              "uppercase",
            )}
          >
            {fecha}
          </span>
          <Card.Title className={clsx("pe-8", "text-xl")}>{titulo}</Card.Title>
          <Card.Description className={clsx("text-xs", "sm:text-sm")}>
            {descripcion}
          </Card.Description>
        </div>
      </Card.Header>

      <Card.Footer
        className={clsx(
          "z-10",
          "mt-auto",
          "flex",
          "items-end",
          "justify-end",
          "mx-2",
        )}
      >
        {children}
      </Card.Footer>
    </Card>
  );
}

function Cards() {
  return (
    <div
      className={clsx(
        "grid",
        "grid-cols-1",
        "md:grid-cols-3",
        "gap-12",
        "mx-auto",
        "max-w-7xl",
      )}
    >
      <OurCard
        fecha="9 de agosto del 2020"
        titulo="Mision y vision"
        descripcion="
        Comprometidos con ayudar, colaborar y generar un impacto positivo en cada y persona y cada familia
"
        imgUrl="/a1.png"
      >
        <LinkHeroUI>
          Ver más
          <LinkHeroUI.Icon />
        </LinkHeroUI>
      </OurCard>

      <OurCard
        fecha="16 mayo, 2014"
        titulo="Nuestro recorrido"
        descripcion="Desde 2014, llevamos apoyo y ayuda de manera voluntaria a niños, familias y personas que lo necesitan, extendiendo nuestra labor desde Ibagué, Sibaté y Bogotá."
        imgUrl="/a3.png"
      >
        <LinkHeroUI>
          Ver más
          <LinkHeroUI.Icon />
        </LinkHeroUI>
      </OurCard>
      <OurCard
        fecha="16 mayo, 2022"
        titulo="Proyectos"
        descripcion="Contamos con un plan de acción claro para desarrollar cada proyecto y seguir creciendo en nuestra labor.
"
        imgUrl="/a2.png"
      >
        <ProjectsDropdown />
      </OurCard>
    </div>
  );
}

export function Info() {
  return (
    <>
      <section className={clsx("border-b", "py-8", "my-12")}>
        <div
          className={clsx(
            "container",
            "mx-auto",
            "flex",
            "flex-wrap",
            "pt-4",
            "pb-12",
          )}
        >
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
            Sobre nosotros
          </h2>
          <OurSperator />
          <div className={clsx("w-full", "mb-4")}>
            <div
              className={clsx(
                "h-1",
                "mx-auto",
                "gradient",
                "w-64",
                "opacity-25",
                "my-0",
                "py-0",
                "rounded-t",
              )}
            ></div>
          </div>

          <Cards />
        </div>
      </section>
    </>
  );
}
