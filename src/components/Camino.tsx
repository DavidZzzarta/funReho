import clsx from "clsx";

function Punto () {
    return (
        <div className="relative flex items-center justify-center w-4 h-4">
            <span
                className="absolute inset-0 rounded-full bg-emerald-500 animate-ping"
                style={{animationDuration: '2s'}}
            ></span>
            <span className="relative w-3 h-3 rounded-full bg-emerald-500"></span>
        </div>
    );
}

function Fecha({ fecha, descripcion, children, contenido }: { fecha: string; descripcion: string; children: React.ReactNode; contenido: string }) {
  return (
    <div className="relative border-l-1 border-l-emerald-500 pl-6 pt-10 pb-10">
      <div className="absolute -left-[8.5px] top-12">
        <Punto />
      </div>

      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
        <div className="flex-1">
          <h2 className="text-2xl font-bold">
            {fecha}
          </h2>

          <p className="mt-2 text-default-600">
            {descripcion}
          </p>

          <p className="mt-6 text-sm">
            {contenido}
          </p>
        </div>

        <div className="flex-shrink-0">
          {children}
        </div>
      </div>
    </div>
  );
}

export function Camino() {
    return (
        <div className={clsx('max-w-5xl', 'mx-auto', 'mb-24')}>
            <Fecha
                fecha="12 de Mayo del 2016"
                descripcion="Ayudas comunitarias"
                contenido="
                Recorrimos los colegios de Soacha brindando charlas sobre la importancia de la salud mental. A través de actividades didácticas y dinámicas participativas, buscamos generar conciencia, derribar estigmas y demostrar que cuidar la salud mental es fundamental para el bienestar y el desarrollo de cada persona.
                "
            >
                <div className={clsx("w-full", "p-6")}>
                            <img
                              src="/foto1.jpeg"
                              alt="Icono"
                              className={clsx(
                                "w-6/6",
                                "sm:h-64",
                                "mx-auto",
                                "rounded-4xl",
                              )}
                            />
                          </div>
            </Fecha>
            <Fecha
                fecha="27 de Agosto del 2022"
                descripcion="Ayudas comunitarias"
                contenido="
                Recorrimos los colegios de Soacha brindando charlas sobre la importancia de la salud mental. A través de actividades didácticas y dinámicas participativas, buscamos generar conciencia, derribar estigmas y demostrar que cuidar la salud mental es fundamental para el bienestar y el desarrollo de cada persona.
                "
            >
                <div className={clsx("w-full", "p-6")}>
                            <img
                              src="/foto2.jpeg"
                              alt="Icono"
                              className={clsx(
                                "w-6/6",
                                "sm:h-64",
                                "mx-auto",
                                "rounded-4xl",
                              )}
                            />
                          </div>
            </Fecha>
        </div>
    );
}