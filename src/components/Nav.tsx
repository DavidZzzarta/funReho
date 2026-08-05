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
      className={clsx(
        "w-full",
        "z-30",
        "top-0",
        "backdrop-blur-md",
        "bg-black/70",
        "p-3",
        "fixed",
      )}
    >
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
          isIconOnly
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
              "lg:flex",
              "justify-end",
              "flex-1",
              "items-center",
              "gap-8",
            )}
          >
            <li>
              <Link href="/mision">Mision y visión</Link>
            </li>
            <li>
              <Link href="/recorrido">Recorrido</Link>
            </li>
            <li>
              <Link href="/plan">Plan de accion</Link>
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
