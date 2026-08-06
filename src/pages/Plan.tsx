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
      <OurSeparator />
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
