import type { Metadata } from "next";
import { InfoPage } from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "Aviso legal del servicio ETA-IL",
  description:
    "Información sobre el alcance del servicio de asistencia ETA-IL, los límites de la gestión y las responsabilidades de la persona solicitante.",
  alternates: { canonical: "/aviso-legal" },
  robots: { index: true, follow: true },
};

export default function AvisoLegalPage() {
  return (
    <InfoPage
      title="Aviso legal"
      intro="Esta página explica el alcance de la asistencia, los límites de la gestión y las responsabilidades relacionadas con una solicitud ETA-IL."
    >
      <section>
        <h2>Alcance del servicio</h2>
        <p>
          ETA-IL Ayuda brinda información, acompañamiento, revisión de datos y seguimiento en español durante la preparación de la solicitud. El alcance concreto se informa antes de completar el proceso y puede variar según el caso.
        </p>
      </section>

      <section>
        <h2>Costos y confirmación</h2>
        <p>
          El importe total aplicable se muestra antes de confirmar el pago. La persona solicitante debe revisar el detalle, la moneda, las condiciones y cualquier cargo asociado a su medio de pago.
        </p>
      </section>

      <section>
        <h2>Decisión y control migratorio</h2>
        <p>
          No podemos garantizar la aprobación de una solicitud ni el ingreso a Israel. La evaluación de la ETA-IL y la decisión final de admisión corresponden a las autoridades competentes.
        </p>
      </section>

      <section>
        <h2>Exactitud de la información</h2>
        <p>
          Procuramos mantener el contenido actualizado, pero los requisitos, aranceles y procedimientos pueden modificarse. La información general del sitio no reemplaza una evaluación individual de la situación migratoria de cada viajero.
        </p>
      </section>

      <section>
        <h2>Responsabilidad del solicitante</h2>
        <p>
          La persona solicitante es responsable de proporcionar información verdadera, completa y consistente con su documentación. También debe verificar las condiciones de viaje, seguridad, salud, visado y tránsito aplicables a su situación personal.
        </p>
      </section>

      <section>
        <h2>Uso de la información</h2>
        <p>
          Los contenidos del sitio tienen finalidad informativa y operativa. Las recomendaciones se basan en los datos proporcionados por la persona solicitante y en los requisitos disponibles al momento de la gestión.
        </p>
      </section>
    </InfoPage>
  );
}
