import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import clsx from "clsx";
import PlanContent from "../components/PlanContent";
import OurSeparator from "../components/OurSeparator";

function Titles() {
  return (
    <>
      <h2
        className={clsx(
          "w-full",
          "leading-tight",
          "text-center",

          "italic",
        )}
      >
        Proyecto
      </h2>

      <div className="text-center">
        <h2
          className={clsx(
            "my-2",
            "text-4xl",
            "font-black", // Cambiado de font-bold a font-black para dar más grosor
            "leading-tight",
            "bg-gradient-to-r",
            "from-emerald-700", // Verde más oscuro para contrastar con fondos claros
            "to-yellow-400", // Amarillo puro muy brillante
            "bg-clip-text",
            "text-transparent", // ¡Corregido! Ahora sí aplica el gradiente
          )}
        >
          Cuidando tu salud mental
        </h2>
        <OurSeparator />
        <h3
          className={clsx(
            "my-4",
            "text-xm",
            "leading-tight",
            "max-w-2xl",
            "mx-auto",
          )}
        >
          Transformando vidas a través del amor y el conocimiento
        </h3>
      </div>
    </>
  );
}

function Content() {
  return (
    <div
      className={clsx(
        "flex max-w-4/5 md:max-w-4xl flex-col gap-4 mx-auto pb-30 mt-[120px]",
      )}
    >
      <Titles />
      <PlanContent />
    </div>
  );
}

export function Plan() {
  return (
    <>
      <Nav />
      <Content />
      <Footer />
    </>
  );
}
