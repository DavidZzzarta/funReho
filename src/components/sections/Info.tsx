import clsx from "clsx";
import { Link } from "wouter";
import { Button } from "@heroui/react";
import { ChevronRight } from "lucide-react";
import { Separator } from '@heroui/react';

function Card({
  fecha,
  titulo,
  descripcion,
  imgUrl,
  url,
}: {
  fecha: string;
  titulo: string;
  descripcion: string;
  imgUrl?: string;
  url?: string;
}) {
  return (
    <div
      className={clsx(
        "w-full",
        "md:w-1/3",
        "p-6",
        "flex",
        "flex-col",
        "flex-grow",
        "flex-shrink",
      )}
    >
      <div
        className={clsx(
          "flex-1",
          "rounded",
          "overflow-hidden",
          "shadow",
        )}
      >
        {imgUrl && (
          <img
            src={imgUrl}
            alt={titulo}
            className={clsx("w-full", "h-64", "object-cover", "rounded-t-3xl")}
          />
        )}

        <Link
          href={url || "#"}
          className={clsx(
            "flex",
            "flex-wrap",
            "no-underline",
            "hover:no-underline",
            "py-6",
          )}
        >
          <p
            className={clsx(
              "w-full",
              "text-xs",
              "md:text-sm",
              "px-6",
            )}
          >
            {fecha}
          </p>

          <h3
            className={clsx(
              "w-full",
              "font-bold",
              "text-xl",
              "px-6",
              "mt-2",
            )}
          >
            {titulo}
          </h3>

          <p
            className={clsx(
              "text-base",
              "px-6",
              "mt-3",
              "mb-5",
            )}
          >
            {descripcion}
          </p>
        </Link>
      </div>

      <Separator variant="secondary" className="my-4" />

      <div className={clsx("flex", "justify-center")}>
        <Button variant="secondary" size="lg">
          <ChevronRight />
          Leer más
        </Button>
      </div>
    </div>
  );
}

function Cards() {
  return (
    <>
      <Card
        fecha="9 de agosto del 2020"
        titulo="Mision y vision"
        descripcion="No dejamos a nadie solo con sus luchas internas y externas"
        imgUrl="/a1.png"
        url="/mision"
      />
      <Card
        fecha="16 mayo, 2022"
        titulo="Plam de accion"
        descripcion="Tenemos un plan de accion completo puesto para todos los que lo necesiten."
        imgUrl="/a2.png"
        url="/plan"
      />

      <Card
        fecha="16 mayo, 2014"
        titulo="Nuestro recorrido"
        descripcion="Desde 2014 hemos llevado ayudas de forma voluntaria a ninos, familias, y todo tipo de personas desde Ibague, Sibate, y Bogota"
        imgUrl="/a3.png"
      />
    </>
  );
}

export function Info() {
  return (
    <section className={clsx("border-b", "py-8")}>
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
  );
}
