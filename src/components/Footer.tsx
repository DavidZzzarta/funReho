import { SocialIcon } from "react-social-icons";
import { Link } from "wouter";
import clsx from "clsx";

function SocialIcons() {
  return (
    <>
      <SocialIcon url="https://facebook.com/couetilc" />
      <SocialIcon url="https://instagram.com/couetilc" />
      <SocialIcon url="https://youtube.com/couetilc" />
      <SocialIcon url="mailto:contacto@fundacion.org" />
      <SocialIcon url="https://wa.me/573000000000" />
    </>
  );
}

export function Footer() {
  return (
    <footer className={clsx("bg-white", "border-t")}>
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
          <div className="max-w-sm">
            <h2 className={clsx("text-2xl", "font-bold", "text-black")}>
              Fundación Rehoboth
            </h2>
            <p className={clsx("mt-3", "text-gray-600")}>
              Transformando vidas a través de la educación, el apoyo social y el
              desarrollo comunitario.
            </p>

            <div className={clsx("mt-6", "flex", "gap-3")}>
              <SocialIcons />
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h3
              className={clsx("mb-4", "text-lg", "font-semibold", "text-black")}
            >
              Conócenos
            </h3>

            <ul className="space-y-2">
              <li>
                <Link
                  to="/mision"
                  className={clsx("hover:underline", "text-gray-600")}
                >
                  Misión y visión
                </Link>
              </li>

              <li>
                <Link
                  to="/plan"
                  className={clsx("hover:underline", "text-gray-600")}
                >
                  Plan de acción
                </Link>
              </li>

              <li>
                <Link
                  to="/recorrido"
                  className={clsx("hover:underline", "text-gray-600")}
                >
                  Recorrido
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3
              className={clsx("mb-4", "text-lg", "font-semibold", "text-black")}
            >
              Contacto
            </h3>

            <ul className="space-y-2">
              <li className="text-gray-600">Email: contacto@fundacion.org</li>
              <li className="text-gray-600">Tel: +57 300 000 0000</li>
              <li className="text-gray-600">Bogotá, Colombia</li>
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
            "text-gray-500",
          )}
        >
          © {new Date().getFullYear()} Fundación. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
