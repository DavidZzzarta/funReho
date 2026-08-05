import clsx from "clsx";
import { Button } from "@heroui/react";





export function Hero() {
  return (
    <div className={clsx('w-full', 'overflow-hidden', 'flex', 'items-center', 'justify-center')}>
      {/* Contenedor del patrón de cuadros */}
      <div 
  className={clsx(
    'absolute inset-0 -z-10 h-[600px] w-full',
    // Creamos las líneas usando solo transparencias (así no alteramos tu fondo)
    'bg-[linear-gradient(to_right,rgba(51,65,85,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(51,65,85,0.25)_1px,transparent_1px)]',
    'bg-[size:4rem_4rem]'
  )}
  style={{
    // La máscara desvanece SOLO las líneas que acabamos de pintar arriba
    maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
    WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
  }}
/>







      <div className={clsx("absolute", "top-0", "left-0", "w-full", "h-full")}>
  <img 
    className={clsx(
      "w-full h-full",
      "object-contain object-bottom", // Por defecto: En celulares se encoge para mostrarse completa
      "md:object-cover md:object-bottom" // En tablets y computadoras: Se expande cubriendo el fondo
    )} 
    src="/bg-kids.png" 
  />
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
            <strong className={clsx(
  "font-bold",
  "bg-gradient-to-r from-purple-600 to-red-500", // Gradiente de morado a rojo
  "bg-clip-text text-transparent" // Aplica el gradiente estrictamente al texto
)}>
  2014
</strong>

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
