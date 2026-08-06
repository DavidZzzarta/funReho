import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import clsx from "clsx";
import { Rocket, HeartPulse, TableCellsMerge } from "lucide-react";
import { Link } from "@heroui/react";
import PlanContent from "../components/PlanContent"

function Icons() {
  return (
    <div className={clsx("flex", "justify-center", "gap-18", "mt-8")}>
      <Rocket className={clsx("w-12", "h-12")} color="#919191" />
      <HeartPulse className={clsx("w-12", "h-12")} color="#919191" />
      <TableCellsMerge className={clsx("w-12", "h-12")} color="#919191" />
    </div>
  );
}

function Content() {
  return (
    <div
      className={clsx(
        "max-w-4xl",
        "mx-auto",
        "px-4",
        "py-8",
        "rounded-lg",
        "shadow-lg",
        "p-6",
      )}
    >
<PlanContent />
    </div>
  );
}

function List() {
  return (
    <section
      className={clsx("container", "relative", "z-10", "max-w-4xl", "mx-auto")}
    >
      <h2
        className={clsx(
          "w-full",
          "text-5xl",
          "font-bold",
          "leading-tight",
          "text-center",
          "mt-32",
        )}
      >
        Nuestros proyectos
      </h2>
      <Link className="mt[-200px] pt-2">Cuidando tu salud mental</Link>
      <br />
      <Link className="mt[-200px] pt-2">United Academy</Link>
    </section>
  );
}

export function Plan() {
  return (
    <>
      <Nav />
      <List />
      <h2
        className={clsx(
          "w-full",
          "text-xl",
          "leading-tight",
          "text-center",
          "text-white",
        )}
      >
        Proyecto
      </h2>
      <h2
        className={clsx(
          "w-full",
          "text-5xl",
          "font-bold",
          "leading-tight",
          "text-center",
          "text-white",
        )}
      >
        Cuidando tu salud mental
      </h2>
      <Content />
      <Footer />
    </>
  );
}
