import clsx from "clsx";

export function Hero() {
  return (
    <div className={clsx("pt-24")}>
      <div
        className={clsx(
          "container",
          "px-3",
          "mx-auto",
          "flex",
          "flex-wrap",
          "flex-col",
          "md:flex-row",
          "items-center",
        )}
      >
        <div
          className={clsx(
            "flex",
            "flex-col",
            "w-full",
            "md:w-2/5",
            "justify-center",
            "items-start",
            "text-center",
            "md:text-left",
          )}
        >
          <p className={clsx("uppercase", "tracking-loose", "w-full")}>
            Queremos escucharte
          </p>
          <h1
            className={clsx("my-4", "text-5xl", "font-bold", "leading-tight")}
          >
            Trabajamos para disminuir las cifras de suicidios
          </h1>
          <p className={clsx("leading-normal", "text-2xl", "mb-2")}>
            Con un recorrido desde{" "}
            <strong className={clsx("underline")}>2014</strong>
          </p>
          <small>Si repararamos familias, reparamos la sociedad</small>
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
            Conoce más
          </button>
        </div>
        <div className={clsx("w-full", "md:w-3/5", "py-6", "text-center")}>
          <img className={clsx("w-full", "md:w-4/5", "z-50")} src="/hero.png" />
        </div>
      </div>
    </div>
  );
}
