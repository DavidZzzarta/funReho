import clsx from "clsx";
import { Button } from "@heroui/react";

export function Hero() {
  return (
    <div>
      <div className={clsx("absolute", "top-0", "left-0", "w-full", "h-full")}>
  <img className={clsx("w-full", "h-full", "object-cover", "object-bottom")} src="/bg-kids.png" />
</div>



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
          "h-screen"
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
          <p className={clsx("text-xs", "my-4")}>Si repararamos familias, reparamos la sociedad</p>


          <Button size="lg">
            Conoce más
          </Button>


        </div>
        <div className={clsx("w-full", "md:w-3/5", "py-6", "text-center")}>
          <img className={clsx("w-full", "md:w-4/5", "z-50")} src="/hero2.png" />
        </div>
      </div>
      
    </div>
  );
}
