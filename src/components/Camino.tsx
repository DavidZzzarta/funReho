import clsx from "clsx";

function Punto() {
  return (
    <div className="relative flex items-center justify-center w-4 h-4">
      <span
        className="absolute inset-0 rounded-full bg-emerald-500 animate-ping"
        style={{ animationDuration: "2s" }}
      ></span>
      <span className="relative w-3 h-3 rounded-full bg-emerald-500"></span>
    </div>
  );
}

function Fecha({
  fecha,
  descripcion,
  children,
  contenido,
}: {
  fecha: string;
  descripcion: string;
  children: React.ReactNode;
  contenido: string;
}) {
  return (
    <div className="relative border-l-1 border-l-emerald-500 pl-6 pt-10 pb-10">
      <div className="absolute -left-[8.5px] top-12">
        <Punto />
      </div>

      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
        <div className="flex-1">
          <h2 className="text-2xl font-bold">{fecha}</h2>

          <p className="mt-2 text-default-600">{descripcion}</p>

          <p className="mt-6 text-sm">{contenido}</p>
        </div>

        <div className="flex-shrink-0">{children}</div>
      </div>
    </div>
  );
}

export function Camino() {
  // <div className={clsx("flex max-w-4/5 md:max-w-4xl flex-col gap-4 mx-auto pb-30")}>
  return (
    <div className={clsx("max-w-4/5", "xl:max-w-4xl", "mx-auto", "mb-24")}>
      <Fecha
        fecha="Agosto del 2014"
        descripcion="Ayudas, impulsos y acompañamientos"
        contenido="
                En el barrio El Salado de Ibagué, realizamos diferentes actividades con los niños, enfocadas en el buen uso del tiempo libre y en impulsar sus talentos, con el apoyo de los Carabineritos y otros voluntarios.
                "
      >
        <div className={clsx("w-full", "p-6")}>
          <img
            src="/rec5.jpeg"
            alt="Icono"
            className={clsx("w-6/6", "sm:h-64", "mx-auto", "rounded-4xl")}
          />
        </div>
      </Fecha>

      <Fecha
        fecha="Julio del 2015"
        descripcion="Ayudas comunitarias"
        contenido="
                
Nuestro enfoque en la niñez es preventivo. En un ambiente cultural y deportivo, enseñamos a los niños a cuidar su salud mental, a descubrir sus talentos y a fomentar la cultura del respeto. Los padres son una parte fundamental de nuestra gestión. Por eso, realizamos talleres enfocados en promover un entorno de bienestar y escucha activa, dotándolos de herramientas para ejercer su rol de cuidadores y garantizar a nuestros niños respeto, comprensión y educación de calidad.

                "
      >
        <div className={clsx("w-full", "p-6")}>
          <img
            src="/rec6.jpeg"
            alt="Icono"
            className={clsx("w-6/6", "sm:h-64", "mx-auto", "rounded-4xl")}
          />
        </div>
      </Fecha>

      <Fecha
        fecha="Septiembre del 2015"
        descripcion="Apoyo a la niñez"
        contenido="
                Logramos llevar alegría a los corazones de niños en Soacha y en Ibagué, gracias a los regalos de Navidad patrocinados por comerciantes del municipio de Soacha y por Mercacentro en Ibagué. Agradecemos profundamente a esos empresarios que, más que un juguete, brindan esperanza a una niñez golpeada por la desigualdad.
                "
      >
        <div className={clsx("w-full", "p-6")}>
          <img
            src="/rec2.jpeg"
            alt="Icono"
            className={clsx("w-6/6", "sm:h-64", "mx-auto", "rounded-4xl")}
          />
        </div>
      </Fecha>

      <Fecha
        fecha="Mayo del 2016"
        descripcion="Ayudas comunitarias"
        contenido="
                Agradecemos a los colegios que nos abrieron sus puertas para compartir con alumnos, profesores y padres la importancia de conocer cómo funciona el cerebro. Brindamos a los estudiantes hábitos saludables, así como herramientas de prevención y acción, para que cuiden su salud mental y aprendan a pedir ayuda cuando la necesiten.
                "
      >
        <div className={clsx("w-full", "p-6")}>
          <img
            src="/foto1.jpeg"
            alt="Icono"
            className={clsx("w-6/6", "sm:h-64", "mx-auto", "rounded-4xl")}
          />
        </div>
      </Fecha>
      <Fecha
        fecha="Agosto del 2020"
        descripcion="Ayudas comunitarias"
        contenido="
                Recorrimos los colegios de Soacha brindando charlas sobre la importancia de la salud mental. A través de actividades didácticas y dinámicas participativas, buscamos generar conciencia, derribar estigmas y demostrar que cuidar la salud mental es fundamental para el bienestar y el desarrollo de cada persona.
                "
      >
        <div className={clsx("w-full", "p-6")}>
          <img
            src="/foto2.jpeg"
            alt="Icono"
            className={clsx("w-6/6", "sm:h-64", "mx-auto", "rounded-4xl")}
          />
        </div>
      </Fecha>
      <Fecha
        fecha="Agosto del 2020"
        descripcion="Ayudas comunitarias"
        contenido='
                En el municipio de Soacha, el proyecto "Cuidando tu salud mental" fue muy bien recibido. Trabajamos junto a psicólogos, trabajadores sociales y la Policía de Infancia y Adolescencia en charlas sobre el cuidado de la salud mental, con el fin de estar atentos a las señales de alarma ante posibles intentos de suicidio, especialmente dado el aumento de estos casos en la población adolescente
                 '
      >
        <div className={clsx("w-full", "p-6")}>
          <img
            src="/rec.jpeg"
            alt="Icono"
            className={clsx("w-6/6", "sm:h-64", "mx-auto", "rounded-4xl")}
          />
        </div>
      </Fecha>

      <Fecha
        fecha="Agosto del 2020"
        descripcion="Ayudas comunitarias"
        contenido="
                Recorrimos los colegios de Soacha brindando charlas sobre la importancia de la salud mental. A través de actividades didácticas y dinámicas participativas, buscamos generar conciencia, derribar estigmas y demostrar que cuidar la salud mental es fundamental para el bienestar y el desarrollo de cada persona.
                "
      >
        <div className={clsx("w-full", "p-6")}>
          <img
            src="/rec3.jpeg"
            alt="Icono"
            className={clsx("w-6/6", "sm:h-64", "mx-auto", "rounded-4xl")}
          />
        </div>
      </Fecha>

      <Fecha
        fecha="Agosto del 2020"
        descripcion="Ayudas comunitarias"
        contenido="
                Visitamos colegios y barrios, donde entregamos información clave y escuchamos activamente a la comunidad, con el objetivo de construir una red de apoyo que salve vidas desde la prevención y la acción oportuna.
                "
      >
        <div className={clsx("w-full", "p-6")}>
          <img
            src="/rec4.jpeg"
            alt="Icono"
            className={clsx("w-6/6", "sm:h-64", "mx-auto", "rounded-4xl")}
          />
        </div>
      </Fecha>

      <Fecha
        fecha="Agosto del 2020"
        descripcion="Ayudas comunitarias"
        contenido="
                Recorrimos los colegios de Soacha brindando charlas sobre la importancia de la salud mental. A través de actividades didácticas y dinámicas participativas, buscamos generar conciencia, derribar estigmas y demostrar que cuidar la salud mental es fundamental para el bienestar y el desarrollo de cada persona.
                "
      >
        <div className={clsx("w-full", "p-6")}>
          <img
            src="/rec7.webp"
            alt="Icono"
            className={clsx("w-6/6", "sm:h-64", "mx-auto", "rounded-4xl")}
          />
        </div>
      </Fecha>

      <Fecha
        fecha="Agosto del 2020"
        descripcion="Ayudas comunitarias"
        contenido="
                Fuimos convocados por diferentes comunidades para conversar sobre salud mental, en articulación con la Alcaldía de Soacha, con el fin de activar protocolos de emergencia en casos de intento de suicidio. La preparación y la respuesta oportuna son asunto de todos. Agradecemos a quienes están dispuestos a aprender juntos a cuidarnos, a estar atentos y a actuar con empatía, porque así construimos redes que salvan vidas.
                "
      >
        <div className={clsx("w-full", "p-6")}>
          <img
            src="/rec8.jpg"
            alt="Icono"
            className={clsx("w-6/6", "sm:h-64", "mx-auto", "rounded-4xl")}
          />
        </div>
      </Fecha>

      <Fecha
        fecha="Agosto del 2020"
        descripcion="Ayudas comunitarias"
        contenido="
                Padres de familia y cuidadores participan activamente en nuestros talleres, donde aprender es accesible y cercano. Los profesionales de salud mental les brindan información clara y estrategias prácticas en cuidado, autocuidado, prevención y acción. Estar preparados nos permite responder con mayor tranquilidad y efectividad ante una emergencia emocional en nuestro hogar o comunidad. Así, tejemos una red de apoyo sólida y comprometida con la protección de nuestros niños, niñas y adolescentes. Porque juntos, sin duda, podemos salvar vidas.
                "
      >
        <div className={clsx("w-full", "p-6")}>
          <img
            src="/rec9.jpg"
            alt="Icono"
            className={clsx("w-6/6", "sm:h-64", "mx-auto", "rounded-4xl")}
          />
        </div>
      </Fecha>

      <Fecha
        fecha="Agosto del 2020"
        descripcion="Ayudas comunitarias"
        contenido="
                Recorrimos los colegios de Soacha brindando charlas sobre la importancia de la salud mental. A través de actividades didácticas y dinámicas participativas, buscamos generar conciencia, derribar estigmas y demostrar que cuidar la salud mental es fundamental para el bienestar y el desarrollo de cada persona.
                "
      >
        <div className={clsx("w-full", "p-6")}>
          <img
            src="/rec10.jpg"
            alt="Icono"
            className={clsx("w-6/6", "sm:h-64", "mx-auto", "rounded-4xl")}
          />
        </div>
      </Fecha>
    </div>
  );
}
