import clsx from "clsx";
import { Link } from "wouter";

function Card({
  children,
  fecha,
  titulo,
  descripcion,
  imgUrl,
  url,
}: {
  children: React.ReactNode;
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
          "bg-white",
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
              "text-gray-600",
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
              "text-gray-800",
              "px-6",
              "mt-2",
            )}
          >
            {titulo}
          </h3>

          <p
            className={clsx(
              "text-gray-800",
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

      {children}
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
      >
        <div
          className={clsx(
            "flex-none",
            "mt-auto",
            "bg-white",
            "rounded-b",
            "rounded-t-none",
            "overflow-hidden",
            "shadow",
            "p-6",
          )}
        >
          <div className={clsx("flex", "items-center", "justify-start")}>
            <Link
              href="/mision"
              className={clsx(
                "mx-auto",
                "lg:mx-0",
                "hover:underline",
                "gradient",
                "text-white",
                "font-bold",
                "rounded-full",
                "my-6",
                "py-4",
                "px-8",
                "shadow-lg",
                "focus:outline-none",
                "focus:shadow-outline",
                "transform",
                "transition",
                "hover:scale-105",
                "duration-300",
                "ease-in-out",
              )}
            >
              Leer mas
            </Link>
          </div>
        </div>
      </Card>

      <Card
        fecha="16 mayo, 2022"
        titulo="Plam de accion"
        descripcion="Tenemos un plan de accion completo puesto para todos los que lo necesiten."
        imgUrl="/a2.png"
        url="/plan"
      >
        <div
          className={clsx(
            "flex-none",
            "mt-auto",
            "bg-white",
            "rounded-b",
            "rounded-t-none",
            "overflow-hidden",
            "shadow",
            "p-6",
          )}
        >
          <div className={clsx("flex", "items-center", "justify-center")}>
            <Link
              href="/plan"
              className={clsx(
                "mx-auto",
                "lg:mx-0",
                "hover:underline",
                "gradient",
                "text-white",
                "font-bold",
                "rounded-full",
                "my-6",
                "py-4",
                "px-8",
                "shadow-lg",
                "focus:outline-none",
                "focus:shadow-outline",
                "transform",
                "transition",
                "hover:scale-105",
                "duration-300",
                "ease-in-out",
              )}
            >
              Leer mas
            </Link>
          </div>
        </div>
      </Card>

      <Card
        fecha="16 mayo, 2014"
        titulo="Nuestro recorrido"
        descripcion="Desde 2014 hemos llevado ayudas de forma voluntaria a ninos, familias, y todo tipo de personas desde Ibague, Sibate, y Bogota"
        imgUrl="/a3.png"
      >
        <div
          className={clsx(
            "flex-none",
            "mt-auto",
            "bg-white",
            "rounded-b",
            "rounded-t-none",
            "overflow-hidden",
            "shadow",
            "p-6",
          )}
        >
          <div className={clsx("flex", "items-center", "justify-end")}>
            <Link
              href="/recorrido"
              className={clsx(
                "mx-auto",
                "lg:mx-0",
                "hover:underline",
                "gradient",
                "text-white",
                "font-bold",
                "rounded-full",
                "my-6",
                "py-4",
                "px-8",
                "shadow-lg",
                "focus:outline-none",
                "focus:shadow-outline",
                "transform",
                "transition",
                "hover:scale-105",
                "duration-300",
                "ease-in-out",
              )}
            >
              Leer mas
            </Link>
          </div>
        </div>
      </Card>
    </>
  );
}

export function Info() {
  return (
    <section className={clsx("bg-white", "border-b", "py-8")}>
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
            "text-gray-800",
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
