import clsx from "clsx";
import {  Card, Link as LinkHeroUI } from "@heroui/react";

export function OurCard({ fecha, titulo, descripcion, imgUrl, url }: { fecha: string; titulo: string; descripcion: string; imgUrl: string; url: string }) {
  return (
      <Card className={clsx('gap-2')}>
        <img
          alt="Indie Hackers community"
          className={clsx('pointer-events-none', 'aspect-square', 'w-94', 'rounded-2xl', 'object-cover', 'select-none')}
          loading="lazy"
          src={imgUrl}
        />
        <Card.Header className="gap-3">

                <div className={clsx('flex', 'flex-col', 'gap-1')}>
                  <span className={clsx('text-xs', 'font-medium', 'text-muted', 'uppercase')}>{fecha}</span>
                  <Card.Title className={clsx('pe-8', 'text-xl')}>
                    {titulo}
                  </Card.Title>
                  <Card.Description className={clsx('text-xs', 'sm:text-sm')}>
                    {descripcion}
                  </Card.Description>
                </div>
              </Card.Header>

              <Card.Footer className={clsx('z-10', 'mt-auto', 'flex', 'items-end', 'justify-end', 'mx-2')}>

              <LinkHeroUI aria-label="Go to settings" href={url} rel="noopener noreferrer">
                  Ver más
                </LinkHeroUI>
            </Card.Footer>
      </Card>
  );
}

function Cards() {
  return (
    <div className={clsx('grid', 'grid-cols-1', 'md:grid-cols-3', 'gap-12', 'mx-auto', 'max-w-7xl')}>
      <OurCard
        fecha="9 de agosto del 2020"
        titulo="Mision y vision"
        descripcion="No dejamos a nadie solo con sus luchas internas y externas"
        imgUrl="/a1.png"
        url="/mision"
      />
      <OurCard
        fecha="16 mayo, 2022"
        titulo="Plam de accion"
        descripcion="Tenemos un plan de accion completo puesto para todos los que lo necesiten."
        imgUrl="/a2.png"
        url="/plan"
      />

      <OurCard
        fecha="16 mayo, 2014"
        titulo="Nuestro recorrido"
        descripcion="Desde 2014 hemos llevado ayudas de forma voluntaria a ninos, familias, y todo tipo de personas desde Ibague, Sibate, y Bogota"
        imgUrl="/a3.png"
        url="/recorrido"
        />
    </div>
  );
}

export function Info() {
  return (
    <>
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
    </>

  );
}
