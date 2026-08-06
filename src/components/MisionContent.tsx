import clsx from "clsx";
import { Typography } from "@heroui/react";
import { Separator } from "@heroui/react";
import {
  Rocket,
  HeartPulse,
  TableCellsMerge,
  Eye,
  SquareActivity,
  WavesHorizontal,
} from "lucide-react";

function Icons1() {
  return (
    <div className={clsx("flex", "justify-center", "gap-18", "mb-2", "mt-4")}>
      <Rocket className={clsx("w-12", "h-12")} color="#b83684" />
      <HeartPulse className={clsx("w-12", "h-12")} color="#b83643" />
      <TableCellsMerge className={clsx("w-12", "h-12")} color="#b86a36" />
    </div>
  );
}

function Icons2() {
  return (
    <div className={clsx("flex", "justify-center", "gap-18", "mb-2", "mt-4")}>
      <Eye className={clsx("w-12", "h-12")} color="#b83684" />
      <SquareActivity className={clsx("w-12", "h-12")} color="#b83643" />
      <WavesHorizontal className={clsx("w-12", "h-12")} color="#b86a36" />
    </div>
  );
}

export default function MisionContent() {
  return (
    <>
      <Icons1 />
      <Typography type="h1">Misión de la Fundación Rehobot</Typography>
      <Separator />
      <Typography>
        Somos una organización sin ánimo de lucro comprometida con la **salud
        mental integral** de la población colombiana, especialmente de niños,
        adolescentes, jóvenes, mujeres y adultos mayores en situación de
        vulnerabilidad. Nuestro propósito es construir una sociedad más
        empática, resiliente y consciente, donde cada persona encuentre apoyo
        oportuno para superar crisis emocionales, prevenir el suicidio y
        desarrollar todo su potencial humano.
      </Typography>

      <Typography type="h2">Nuestros ejes de acción:</Typography>
      <Typography type="h3">
        1. Intervención en salud mental y prevención del suicidio
      </Typography>
      <Typography>
        Brindamos atención psicológica inmediata, gratuita y confidencial
        (presencial, telefónica y virtual) a personas en crisis emocional.
        Implementamos campañas educativas en instituciones educativas, empresas
        y comunidades para detectar señales de alarma, desestigmatizar los
        trastornos mentales y redirigir pensamientos suicidas hacia la búsqueda
        de ayuda profesional y apoyo familiar.
      </Typography>

      <Typography type="h3">
        2. Fortalecimiento familiar y comunitario
      </Typography>
      <Typography>
        Capacitamos a padres, madres y docentes a través de nuestros innovadores
        *Encuentros de Padres Reales*, alejándonos del enfoque culpabilizador
        tradicional. Promovemos herramientas prácticas para educar con empatía,
        establecer límites saludables y acompañar el crecimiento emocional de
        los hijos. Atendemos especialmente a familias en desplazamiento,
        monoparentales o en extrema pobreza, facilitando acceso a educación,
        empleo y desarrollo humano.
      </Typography>

      <Typography type="h3">
        3. Desarrollo integral de niños, niñas y adolescentes
      </Typography>
      <Typography>
        Fomentamos el uso creativo del tiempo libre mediante actividades
        artísticas, musicales, culturales y deportivas que fortalecen su
        crecimiento personal, social y espiritual. Priorizamos a población
        infantil de 0 a 14 años en alto riesgo, pobreza extrema o
        desplazamiento, ofreciéndoles espacios seguros que potencien sus
        talentos y su autoestima.
      </Typography>

      <Typography type="h3">
        4. Empoderamiento juvenil y vocación productiva
      </Typography>
      <Typography>
        Motivamos a los jóvenes a superar mentalidades derrotistas a través de
        talleres de creatividad, orientación vocacional, emprendimiento y
        liderazgo. Coordinados por la fundación pero dirigidos por los propios
        jóvenes, estos espacios les permiten ser protagonistas de su futuro,
        generando confianza, oportunidades y proyectos de vida sostenibles.
      </Typography>

      <Typography type="h3">
        5. Apoyo a la mujer y equidad de género**
      </Typography>
      <Typography>
        Reconocemos y visibilizamos el rol fundamental de la mujer en el hogar y
        la sociedad. Brindamos asesoría, capacitación y proyectos empresariales
        desde casa para madres cabeza de hogar, embarazadas o en situación de
        desempleo, permitiéndoles desarrollarse integralmente sin descuidar a
        sus hijos. Acompañamos su crecimiento físico, mental, espiritual e
        intelectual.
      </Typography>

      <Typography type="h3">6. Bienestar del adulto mayor**</Typography>
      <Typography>
        Orientamos a familias y cuidadores para garantizar condiciones de vida
        dignas que favorezcan la salud física, mental, social y espiritual de
        los adultos mayores, optimizando su participación social y ampliando su
        esperanza de vida con calidad.
      </Typography>

      <Typography type="h3">7. Inclusión sin discriminación</Typography>
      <Typography>
        Atendemos a todas las personas sin distinción de edad, género, raza,
        creencias religiosas, orientación sexual o condición socioeconómica.
        Nuestro único criterio es la necesidad real y el deseo de superación.
      </Typography>

      <Typography type="h3">
        8. Alianzas estratégicas y sostenibilidad**
      </Typography>
      <Typography>
        Gestionamos convenios con entidades públicas y privadas (municipales,
        departamentales, nacionales e internacionales) para impulsar proyectos
        alineados con los planes de desarrollo y políticas públicas. Contamos
        con un equipo humano altamente calificado y voluntarios comprometidos,
        garantizando calidad en el servicio interno y externo, bajo el lema del
        **respeto** como bandera institucional.
      </Typography>

      <Icons2 />

      <Typography type="h1">Vision de la Fundación Rehobot</Typography>

      <Typography>
        Ser la fundación líder y más reconocida de Colombia en la prevención del
        suicidio y la promoción de la salud mental, trabajando incansablemente
        por la población vulnerable con un enfoque inclusivo, humano y
        transformador.
      </Typography>

      <Typography type="h3">Nuestros horizontes:</Typography>
      <Typography>A corto y mediano plazo (5 años)</Typography>
      <Typography>
        Consolidarnos como referente departamental en atención integral de la
        salud mental, ofreciendo:
      </Typography>

      <ul className={clsx("list-disc", "list-inside")}>
        <li>Terapias grupales, familiares y ocupacionales.</li>
        <li>
          Capacitación y talleres presenciales y virtuales para desarrollar
          inteligencia emocional desde la infancia.
        </li>
        <li>Capacitación en primeros auxilios emocionales</li>
        <li>
          Acompañamiento psicológico, terapéutico y pedagógico a familias que
          deseen mejorar su entorno y sus vínculos afectivos.
        </li>
        <li>
          Crear proyectos para niños, niñas, adolescentes, jóvenes, de
          aprovechamiento del tiempo libre
        </li>
        <li>
          Oportunidades de generar ingresos para padres o madres cabeza de
          familia.
        </li>
      </ul>

      <Typography>A largo plazo (10 años)</Typography>
      <Typography>
        Proyectarnos a nivel nacional e internacional como un modelo de
        intervención efectivo, reconocido por:
      </Typography>

      <ul className={clsx("list-disc", "list-inside")}>
        <li>
          Su impacto social en la prevención, tratamiento y seguimiento de
          trastornos mentales asociados al suicidio.
        </li>
        <li>
          Su capacidad de llegar a comunidades remotas y marginadas mediante
          herramientas digitales y alianzas estratégicas.
        </li>
        <li>
          Su compromiso con la inclusión sin distinción: no excluimos por edad,
          género, raza, creencias, orientación sexual, condición socioeconómica
          o cualquier otra diferencia. Nuestra prioridad es la persona y su
          necesidad real.
        </li>
      </ul>

      <Typography type="h3">Nuestro legado</Typography>
      <Typography>
        Soñamos con una sociedad donde la inteligencia emocional sea tan
        valorada como la académica, donde pedir ayuda no sea un tabú y donde
        cada vida encuentre razones para seguir adelante. Queremos ser el puente
        que conecte el dolor con la esperanza, la crisis con la oportunidad y la
        indiferencia con la acción.
      </Typography>

      <Typography type="h4">
        Porque creemos que un futuro con salud mental es posible, y trabajamos
        cada día para construirlo.
      </Typography>

      <Typography type="h4">Nuestro compromiso final</Typography>
      <Typography>
        Disminuir significativamente las cifras de suicidio e intentos de
        suicidio en el país, transformando la indiferencia en acción, el dolor
        en esperanza y la crisis en oportunidad. Creemos firmemente que, con
        empatía, educación y acompañamiento profesional, podemos salvar vidas y
        construir un futuro donde la salud mental sea una prioridad real y
        accesible para todos.
      </Typography>

      <Typography type="h4">
        Juntos, cuidamos lo que más importa: la vida.
      </Typography>
    </>
  );
}
