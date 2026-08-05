import { useState } from "react";
import clsx from "clsx";
import { Link } from "wouter";
import {Button} from "@heroui/react";
import { Menu } from 'lucide-react'

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={clsx(
        "w-full",
        "z-30",
        "top-0",
        "backdrop-blur-md",
        "fixed"
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
        <div className={clsx("block", "lg:hidden", "pr-4")}>
          <Button
            isIconOnly
            variant="ghost"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu />
          </Button>
        </div>
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
            "bg-white",
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
            )}
          >
            <li className={clsx("mr-3")}>
              <Link
                className={clsx(
                  "inline-block",
                  "no-underline",
                  "hover:text-underline",
                  "py-2",
                  "px-4",
                )}
                href="/mision"
              >
                Mision y visión
              </Link>
            </li>
            <li className={clsx("mr-3")}>
              <Link
                className={clsx(
                  "inline-block",
                  "no-underline",
                  "hover:text-underline",
                  "py-2",
                  "px-4",
                )}
                href="/recorrido"
              >
                Recorrido
              </Link>
            </li>
            <li className={clsx("mr-3")}>
              <Link
                className={clsx(
                  "inline-block",

                  "no-underline",
                  "hover:text-underline",
                  "py-2",
                  "px-4",
                )}
                href="/plan"
              >
                Plan de accion
              </Link>
            </li>
          </ul>
          <Button
            id="navAction"
            className={clsx(
              "mx-auto",
              "lg:mx-0",
              "mt-4",
              "lg:mt-0",
            )}
            size="lg"
          >
            Contacto
          </Button>
        </div>
      </div>
      <hr
        className={clsx(
          "opacity-25",
          "my-0",
          "py-0",
        )}
      />
    </nav>
  );
}
