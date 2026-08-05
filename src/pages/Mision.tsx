import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

import { SubHero } from "../components/SubHero";
import clsx from "clsx";
import { Rocket, HeartPulse, TableCellsMerge } from "lucide-react";

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
      <p>
        La Fundación Rehobot en articulación con La Policía de Infancia y
        adolescencia, inicia su recorrido por las diferentes instituciones
        académicas del municipio de Soacha Cundinamarca. Para implementar el
        plan de acción denominado<strong> CUIDANDO TU SALUD MENTAL</strong>.
      </p>
      <br />
      <Icons />
      <br />
      <p>
        En el cual estaremos compartiendo valiosa información de ayuda, por
        medio de conferencias, actividades, charlas. Para enfrentar la presente
        problemática que nos aqueja como sociedad y es el aumento exponencial en
        la población estudiantil de suicidios e intentos de suicidio, violencia
        familiar y escolar, auto lesiones, entre otras.
      </p>
      <br />
      <p>
        Si bien es cierto que es el estado garante de prestar los diferentes
        servicios de salud para la población menos favorecida, la labor de las
        entidades sin ánimo de lucro es dar un apoyo. Desde la fundación estamos
        implementando planes de acción enseñando a los padres y maestros a
        identificar señales de alarma en niños niñas y o adolescentes, que los
        mismos puedan aprender a gestionar adecuadamente sus emociones logrando
        así que nuestros hijos busquen ayuda a tiempo y evitar desenlaces
        fatales.
      </p>
      <br />
      <p>Estamos comprometidos con la salud mental.</p>
      <br />
      <p>Equipo de trabajo conformado por:</p>
      <br />
      <ul className={clsx("list-disc", "list-inside")}>
        <li>Psicología</li>
        <li>Trabajo social</li>
        <li>Testimonio de personas con depresión y ansiedad</li>
        <li>Padres y madres de familia</li>
        <li>Logística</li>
      </ul>

      <br />
      <p>
        Agradecemos enormemente a nuestro equipo de psicólogas y psicólogos,
        conferencistas, logística, voluntarios y por supuesto a los rectores de
        cada institución que nos abre sus puertas para enfrentar juntos este
        reto.
      </p>
      <br />
      <p>
        No podemos esperar, cada 30 horas en Colombia se quita la vida una
        persona de entre 5 y 17 años. Según cifras oficiales del DANE.
      </p>
      <br />
      <p className={clsx("text-sm", "italic", "text-center")}>
        Cada 40 segundos se suicida una persona en el mundo. Según cifras
        oficiales de la OMS.
      </p>
    </div>
  );
}

export function Mision() {
  return (
    <>
      <Nav />
      <SubHero
        title="Misión y Visión"
        subtitle="Nuestra misión es ayudar a las personas que lo necesitan"
      />
      <Content />
      <Footer />
    </>
  );
}
