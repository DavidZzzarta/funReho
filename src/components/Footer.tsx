import clsx from "clsx";
import { Link } from "@heroui/react";
import { SocialIcons } from "./Social";
import ProjectsDropdown from "./ProjectsDropdown";

export function Footer() {
  return (
    <footer className={clsx("bg-neutral-900", "border-t")}>
      <div className={clsx("container", "mx-auto", "px-8", "py-12")}>
        <div
          className={clsx(
            "flex",
            "flex-col",
            "gap-10",
            "md:flex-row",
            "md:justify-between",
          )}
        >
          {/* Logo / Información */}
          <div className="max-w-[299px]">
            <img src="/icon.svg" alt="Logo" className="h-16 mb-4" />
            <div className="col-span-10">
              <h2 className={clsx("text-2xl", "font-bold")}>
                Fundación Rehoboth
              </h2>
              <p className={clsx("mt-3")}>
                Transformando vidas a través de la educación, el apoyo social y
                el desarrollo comunitario.
              </p>
            </div>

            <div className={clsx("mt-6", "flex", "gap-3")}>
              <SocialIcons />
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h3 className={clsx("mb-4", "text-lg", "font-semibold")}>
              Conócenos
            </h3>

            <ul className="space-y-2">
              <li>
                <Link href="/mision" className={clsx("hover:underline")}>
                  Misión y visión
                  <Link.Icon />
                </Link>
              </li>

              <li>
                <Link href="/recorrido" className={clsx("hover:underline")}>
                  Recorrido
                  <Link.Icon />
                </Link>
              </li>

              <li>
                <ProjectsDropdown />
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className={clsx("mb-4", "text-lg", "font-semibold")}>
              Contacto
            </h3>

            <ul className="space-y-2">
              <li>Email: rehobothfruc@gmail.com</li>
              <li>Tel: +57 323 6410 946</li>
              <li>Bogotá, Colombia</li>
            </ul>
          </div>
        </div>

        <div
          className={clsx(
            "mt-10",
            "border-t",
            "pt-6",
            "text-center",
            "text-sm",
          )}
        >
          © {new Date().getFullYear()} Fundación. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
