import clsx from "clsx";

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
        <button
          className={clsx(
            "mx-auto",
            "lg:mx-0",
            "hover:underline",
            "bg-white",
            "text-gray-800",
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
          Contacto
        </button>
        <button
          className={clsx(
            "mx-auto",
            "lg:mx-0",
            "hover:underline",
            "text-white",
            "font-bold",
            "my-6",
            "py-4",
            "px-8",
            "underline",
          )}
        >
          Ayudas y donaciones
        </button>
      </section>
    </div>
  );
}
