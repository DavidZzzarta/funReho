import clsx from "clsx";
import { Link } from "@heroui/react";
import OurSperator from "../OurSeparator";

export function Tour() {
  return (
    <section className={clsx("border-b", "py-8", "mt-[10rem]")}>
      <div className={clsx("container", "max-w-5xl", "mx-auto", "m-8")}>
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
          Que hacemos?
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
        <div className={clsx("flex", "flex-wrap")}>
          <div className={clsx("w-5/6", "sm:w-1/2", "p-6")}>
            <h3
              className={clsx("text-3xl", "font-bold", "leading-none", "mb-3")}
            >
              Ayudamos a los mas necesitados
            </h3>
            <p className={clsx("mb-8")}>
              Tenemos el proposito de ayudar familias, personas y corazones que
              mas lo necesitan en nuestra sociedad
              <br />
              <br />
              Todos podemos ayudar!
            </p>
          </div>
          <div className={clsx("w-full", "sm:w-1/2", "p-6")}>
            <img
              src="/foto1.jpeg"
              alt="Icono"
              className={clsx("w-5/6", "sm:h-64", "mx-auto", "rounded-4xl")}
            />
          </div>
        </div>
        <div
          className={clsx(
            "flex",
            "flex-wrap",
            "flex-col-reverse",
            "sm:flex-row",
          )}
        >
          <div className={clsx("w-full", "sm:w-1/2", "p-6", "mt-6")}>
            <img
              src="/foto2.jpeg"
              alt="Icono"
              className={clsx("w-5/6", "sm:h-64", "mx-auto", "rounded-4xl")}
            />
          </div>
          <div className={clsx("w-full", "sm:w-1/2", "p-6", "mt-6")}>
            <div className={clsx("align-middle")}>
              <h3
                className={clsx(
                  "text-3xl",
                  "font-bold",
                  "leading-none",
                  "mb-3",
                )}
              >
                Te gustaria ayudar de alguna manera?
              </h3>
              <p className={clsx("mb-8")}>
                Facilitamos la conexión entre personas que necesitan ayuda y
                voluntarios dispuestos a colaborar.
                <br />
                <br />
                <Link
                  className={clsx("text-pink-400", "underline")}
                  href="/recorrido"
                >
                  Ver nuestra trayectoria completa
                  <Link.Icon />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
