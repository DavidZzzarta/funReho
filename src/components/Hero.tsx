import clsx from "clsx";
import { Button } from "@heroui/react";

function Contenido() {
  return (
    <div
      className={clsx(
        "flex",
        "flex-col",
        "w-full", // 1. Ocupa todo el ancho base en celulares
        "max-w-9/10", // 2. Limita el ancho en celu (320px) si quieres que se vea angosto
        "md:max-w-xl", // 3. Aplica el ancho máximo original solo en pantallas medianas/grandes
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
        className={clsx(
          "my-4",
          "md:text-4xl",
          "font-bold",
          "leading-tight",
          "text-3xl",
        )}
      >
        Trabajamos para disminuir las cifras de suicidios
      </h1>
      <p className={clsx("leading-normal", "text-xl", "mb-2", "md:text-2xl")}>
        Con un recorrido desde{" "}
        <strong
          className={clsx(
            "font-bold",
            "bg-gradient-to-r from-purple-600 to-red-500", // Gradiente de morado a rojo
            "bg-clip-text text-transparent", // Aplica el gradiente estrictamente al texto
          )}
        >
          2014
        </strong>
      </p>

      <p className={clsx("text-xs", "my-4")}>
        Si repararamos familias, reparamos la sociedad
      </p>

      <Button size="lg">Conoce más</Button>
    </div>
  );
}

function Image() {
  return (
    <div className={clsx("w-full", "md:w-3/5", "py-6", "text-center")}>
      <img className={clsx("w-full", "md:w-4/5", "z-50")} src="/hero2.png" />
    </div>
  );
}

function BgKids() {
  return (
    <div className={clsx("absolute", "top-0", "left-0", "w-full", "h-full")}>
      <img
        className={clsx(
          "w-full h-full",
          "object-contain object-bottom", // Por defecto: En celulares se encoge para mostrarse completa
          "md:object-cover md:object-bottom", // En tablets y computadoras: Se expande cubriendo el fondo
        )}
        src="/bg-kids.png"
      />
    </div>
  );
}

export function Hero() {
  return (
    <div
      className={clsx(
        "w-full",
        "overflow-hidden",
        "flex",
        "items-center",
        "justify-center",
      )}
    >
      <BgKids />

      <div
        className={clsx(
          "container",
          "px-3",
          "mx-auto",
          "flex",
          "flex-wrap",
          "flex-col",
          "justify-center", // ✨ Añadido: Centra el contenido verticalmente en móvil

          "md:flex-row",
          "md:justify-start", // ✨ Opcional: Restablece la alineación horizontal en pantallas grandes
          "items-center",
          "h-screen",
        )}
      >
        <Contenido />
        <Image />
      </div>
    </div>
  );
}
