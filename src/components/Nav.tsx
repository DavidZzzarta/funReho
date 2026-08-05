import { useState } from "react";
import clsx from "clsx";
import { Link } from "@heroui/react";
import { Button } from "@heroui/react";
import { Menu } from "lucide-react";
import Contact from "./Contact";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={clsx("w-full", "z-30", "top-0", "bg-black/90", "p-3", "fixed")}
    >
      <div
        onClick={() => setIsOpen(false)} // Cierra el menú al hacer clic afuera
        className={clsx(
          "fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 z-10",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
          "lg:hidden", // Se oculta por completo en computadoras
        )}
      />
      <div
        className={clsx(
          "w-full",
          "container",
          "mx-auto",
          "flex",
          "flex-wrap",
          "items-center",
          "justify-between",
          "mt-0",
          "py-2",
        )}
      >
        <div className={clsx("pl-4", "flex", "items-center", "gap-2")}>
          <Link
            className={clsx(
              "toggleColour",
              "no-underline",
              "hover:no-underline",
              "font-bold",
              "text-2xl",
              "lg:text-4xl",
            )}
            href="/"
          >
            <img
              src="/icon.svg"
              alt="Icono"
              className={clsx("h-8", "w-8", "lg:h-12", "lg:w-12")}
            />
          </Link>
        </div>
        <Button
          variant="ghost"
          className={clsx("block", "lg:hidden")}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu />
        </Button>
        <div
          className={clsx(
            "w-full",
            "flex-grow",
            "lg:flex",
            "lg:items-center",
            "lg:w-auto",
            isOpen ? "block" : "hidden",
            "mt-2",
            "lg:mt-0",
            "lg:bg-transparent",
            "p-4",
            "lg:p-0",
            "z-20",
          )}
        >
          <ul
            className={clsx(
              "list-reset",
              "flex", // Activa flexbox en celulares por defecto
              "flex-col", // Alinea los elementos en columna para celular
              "gap-4", // Añade espacio vertical en celular
              "items-center", // Centra los elementos horizontalmente en celular
              "lg:flex-row", // Cambia a fila en pantallas grandes
              "lg:justify-end", // Alinea a la derecha en pantallas grandes
              "lg:flex-1", // Mantiene el crecimiento en pantallas grandes
              "lg:gap-8", // Espaciado horizontal más grande en pantallas grandes
            )}
          >
            <li>
              <Link href="/mision">
                Mision y visión
                <Link.Icon />
              </Link>
            </li>
            <li>
              <Link href="/recorrido">
                Recorrido
                <Link.Icon />
              </Link>
            </li>
            <li>
              <Link href="/plan">
                Plan de accion
                <Link.Icon />
              </Link>
            </li>
            <li>
              <Contact />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
