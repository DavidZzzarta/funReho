import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { Separator } from "@heroui/react";

import clsx from "clsx";
import { Rocket, HeartPulse, TableCellsMerge } from "lucide-react";

import { Surface } from "@heroui/react";

import { Typography } from "@heroui/react";

import OurSeparator from "../components/OurSeparator";

export function Basic() {
  return (
    <Surface className="rounded-3xl p-6" variant="tertiary">
      <p className="text-sm text-muted">
        La Fundación Rehobot en articulación con La Policía de Infancia y
        adolescencia, inicia su recorrido por las diferentes instituciones
        académicas del municipio de Soacha Cundinamarca. Para implementar el
        plan de acción denominado CUIDANDO TU SALUD MENTAL.
      </p>
    </Surface>
  );
}

function Icons() {
  return (
    <div className={clsx("flex", "justify-center", "gap-18")}>
      <Rocket className={clsx("w-12", "h-12")} color="#b83684" />
      <HeartPulse className={clsx("w-12", "h-12")} color="#b83643" />
      <TableCellsMerge className={clsx("w-12", "h-12")} color="#b86a36" />
    </div>
  );
}

function Content() {
  return (
    <div
      className={clsx(
        "flex max-w-4/5 md:max-w-4xl flex-col gap-4 mx-auto pb-30",
      )}
    >
      <img
        className="mt-[120px] w-[17rem] h-[7rem] mx-auto"
        src="/vision.png"
        alt="Visión"
      />
      <div className="text-center">
        <h2 className={clsx("my-2", "text-4xl", "font-bold", "leading-tight")}>
          Misión y Visión
        </h2>
        <OurSeparator />
        <h3
          className={clsx(
            "my-4",
            "text-2xl",
            "leading-tight",
            "max-w-xl",
            "mx-auto",
          )}
        >
          Nuestra misión es ayudar a las personas que lo necesitan
        </h3>
      </div>
      <Basic />
      <Typography type="h1">Hola</Typography>
      <Typography>
        En el cual estaremos compartiendo valiosa información de ayuda, por
        medio de conferencias, actividades, charlas. Para enfrentar la presente
        problemática que nos aqueja como sociedad y es el aumento exponencial en
        la población estudiantil de suicidios e intentos de suicidio, violencia
        familiar y escolar, auto lesiones, entre otras.
      </Typography>
      <Typography>
        Si bien es cierto que es el estado garante de prestar los diferentes
        servicios de salud para la población menos favorecida, la labor de las
        entidades sin ánimo de lucro es dar un apoyo. Desde la fundación estamos
        implementando planes de acción enseñando a los padres y maestros a
        identificar señales de alarma en niños niñas y o adolescentes, que los
        mismos puedan aprender a gestionar adecuadamente sus emociones logrando
        así que nuestros hijos busquen ayuda a tiempo y evitar desenlaces
        fatales.
      </Typography>

      <Icons />
      <Typography>Estamos comprometidos con la salud mental.</Typography>

      <Typography>Equipo de trabajo conformado por:</Typography>

      <ul className={clsx("list-disc", "list-inside")}>
        <li>Psicología</li>
        <li>Trabajo social</li>
        <li>Testimonio de personas con depresión y ansiedad</li>
        <li>Padres y madres de familia</li>
        <li>Logística</li>
      </ul>

      <Typography>
        Agradecemos enormemente a nuestro equipo de psicólogas y psicólogos,
        conferencistas, logística, voluntarios y por supuesto a los rectores de
        cada institución que nos abre sus puertas para enfrentar juntos este
        reto.
      </Typography>
      <Typography>
        No podemos esperar, cada 30 horas en Colombia se quita la vida una
        persona de entre 5 y 17 años. Según cifras oficiales del DANE.
      </Typography>
      <Separator variant="tertiary" className="m-8" />
      <Typography className={clsx("text-sm", "italic", "text-center")}>
        Cada 40 segundos se suicida una persona en el mundo. Según cifras
        oficiales de la OMS.
      </Typography>
    </div>
  );
}

export function Mision() {
  return (
    <>
      <Nav />

      <Content />
      <Footer />
    </>
  );
}
