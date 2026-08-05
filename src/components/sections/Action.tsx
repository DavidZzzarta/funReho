import clsx from "clsx";
import { Button } from "@heroui/react";

export function Action() {
  return (
    <div>
      <section
        className={clsx("container", "mx-auto", "text-center", "py-6", "mb-12")}
      >
        <h2
          className={clsx(
            "w-full",
            "my-2",
            "text-5xl",
            "font-bold",
            "leading-tight",
            "text-center",
            "text-white",
          )}
        >
          Unete a nosotros
        </h2>
        <div className={clsx("w-full", "mb-4")}>
          <div
            className={clsx(
              "h-1",
              "mx-auto",
              "bg-white",
              "w-1/6",
              "opacity-25",
              "my-0",
              "py-0",
              "rounded-t",
            )}
          ></div>
        </div>
        <h3 className={clsx("my-4", "text-3xl", "leading-tight")}>
          Todos podemos ayudar!
        </h3>
        <Button size="lg" className={clsx("mx-4", "my-4")}>Contacto</Button>
        <Button variant="secondary" size="lg" className={clsx("mx-4", "my-4")}>Ayudas y donaciones</Button>
      </section>
    </div>
  );
}
