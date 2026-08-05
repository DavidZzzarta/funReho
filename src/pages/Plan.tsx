import { Typography } from "@heroui/react";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import clsx from "clsx";
import { Rocket, HeartPulse, TableCellsMerge } from "lucide-react";
import { Link } from "@heroui/react";

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
      <Typography type="h1">Origen y propósito</Typography>
      <Typography>
        La fundación nace ante la urgente necesidad de frenar el creciente
        número de suicidios asociados a depresión y ansiedad, mediante una red
        de apoyo real, oportuna y efectiva.
      </Typography>
      <Typography type="h1">El problema</Typography>
      <Typography>
        Quienes padecen estas enfermedades suelen ver el suicidio como única
        salida, agravado por la indiferencia de su entorno, que minimiza su
        sufrimiento como algo pasajero o solucionable con simple voluntad o fe.
        Sin embargo, la recuperación exige tratamiento profesional y
        acompañamiento constante.
      </Typography>
      <Typography type="h1">Datos clave</Typography>
      <Typography>
        La OMS reporta 800.000 suicidios anuales, uno cada 40 segundos. Detrás
        de cada cifra hay una vida que pudo recibir ayuda a tiempo.
      </Typography>

      <Typography type="h1">Nuestra estrategia</Typography>
      <Typography>
        Aprovechamos la inmediatez de internet y redes sociales para brindar
        apoyo psicológico en tiempo real a personas en crisis, ayudándolas a
        estabilizarse y reorientar su realidad.
      </Typography>
      <Icons />

      <Typography type="h1">Apoyo integral</Typography>
      <Typography>
        Además de la intervención emocional, cubrimos necesidades básicas de
        pacientes críticos: alimentación digna y vestuario, ya que muchos no
        logran empleo por su condición mental. Gestionamos donaciones
        voluntarias (personas o empresas) que proveen asistencia alimentaria
        mensual y dos mudas de ropa al año.
      </Typography>

      <Typography type="h1">Inclusión sin distinción</Typography>
      <Typography>
        Atendemos a quien lo necesite, sin discriminar por edad, género, raza,
        creencias u otra condición. Nuestro único filtro es la necesidad real.
      </Typography>

      <Typography type="h1">¿Por qué actuamos?</Typography>
      <Typography>
        El proyecto nace ante una realidad alarmante: cada 40 segundos una
        persona se quita la vida en el mundo (OMS) y, en Colombia, cada 30 horas
        fallece por suicidio un niño, niña o adolescente entre 5 y 17 años
        (DANE). Detrás de estas cifras hay depresión, ansiedad, indiferencia y
        falta de oportunidades. Nuestra misión es construir una red de apoyo
        real, oportuna y efectiva para quienes sufren en silencio.
      </Typography>

      <Typography type="h1">Nuestra estrategia</Typography>
      <Typography>
        En articulación con la Policía de Infancia y Adolescencia, recorremos
        las instituciones educativas de Soacha (Cundinamarca) implementando el
        plan **"Cuidando tu Salud Mental"**, a través de conferencias, talleres
        y actividades prácticas que llevan información valiosa a estudiantes,
        docentes y familias. Proyectados a impactar todas las regiones.
      </Typography>

      <Typography type="h1">Foco de acción</Typography>
      <Typography>
        Abordamos de frente el aumento de suicidios, intentos de suicidio,
        autolesiones y violencia familiar y escolar en la población juvenil.
        Para ello:
      </Typography>

      <ul>
        <li>
          Capacitamos a padres y maestros en la detección temprana de señales de
          alarma.
        </li>
        <li>
          Enseñamos a niños y adolescentes a gestionar sus emociones y pedir
          ayuda a tiempo.
        </li>
        <li>Capacitamos en primeros auxilios emocionales</li>
        <li>
          Brindamos charlas y conferencias de salud mental en diferentes grupos
          poblacionales
        </li>
        <li>
          Brindamos acompañamiento psicológico en tiempo real vía internet y
          redes sociales, llegando a quien está en crisis justo cuando más lo
          necesita.
        </li>
      </ul>

      <Typography type="h1">Apoyo integral</Typography>
      <Typography>
        Sabemos que la salud mental no se sostiene sin lo básico. Por eso,
        gestionamos donaciones voluntarias (personas naturales o jurídicas) para
        garantizar alimentación mensual y dos mudas de ropa al año a pacientes
        críticos que, por su condición, no logran vincularse laboralmente.
        Atendemos sin discriminar por edad, género, raza, creencias u otra
        condición: nuestro único criterio es la necesidad real.
      </Typography>

      <Typography type="h1">Equipo y alianzas</Typography>
      <Typography>
        Contamos con un equipo multidisciplinario: psicología, trabajo social,
        testimonios de personas con depresión y ansiedad, padres y madres de
        familia, conferencistas, voluntarios y logística. Agradecemos a los
        rectores de cada institución que abren sus puertas y a la Policía de
        Infancia y Adolescencia por su articulación fundamental.
      </Typography>

      <Typography type="h1">Llamado a la acción</Typography>
      <Typography>
        El Estado es garante de la salud, pero las entidades sin ánimo de lucro
        somos un puente que no puede esperar. Si deseas llevar conferencias,
        talleres o charlas sobre cuidado de la salud mental a tu colegio,
        empresa o grupo, contáctanos. Juntos podemos salvar vidas.
      </Typography>

      <Typography type="h1"></Typography>
      <Typography></Typography>
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
