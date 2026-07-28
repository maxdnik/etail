import type { Metadata } from "next";
import { InfoPage } from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "Aviso legal y transparencia del servicio",
  description:
    "Información sobre el carácter privado e independiente de ETA-IL Ayuda, el portal oficial del Gobierno de Israel y los límites del servicio de asistencia.",
  alternates: { canonical: "/aviso-legal" },
  robots: { index: true, follow: true },
};

export default function AvisoLegalPage() {
  return (
    <InfoPage
      title="Aviso legal y transparencia"
      intro="Esta página explica con claridad qué servicio ofrecemos, qué no podemos garantizar y cómo identificar el portal oficial de la autorización ETA-IL."
    >
      <section>
        <h2>Servicio privado e independiente</h2>
        <p>
          ETA-IL Ayuda es un servicio privado de información, acompañamiento y revisión en español. No somos una dependencia gubernamental, no representamos al Estado de Israel y no estamos afiliados a la Population and Immigration Authority (PIBA), embajadas, consulados ni otras autoridades públicas.
        </p>
      </section>

      <section>
        <h2>El trámite puede realizarse sin intermediarios</h2>
        <p>
          Toda persona puede verificar su elegibilidad y realizar la solicitud directamente en el portal oficial del Gobierno de Israel. Los dominios gubernamentales oficiales terminan en <strong>gov.il</strong>.
        </p>
        <p>
          Acceso al <a href="https://israel-entry.piba.gov.il/" target="_blank" rel="noopener noreferrer">portal oficial de ETA-IL</a>.
        </p>
      </section>

      <section>
        <h2>Costos</h2>
        <p>
          El Gobierno de Israel informa un arancel oficial de 25 NIS para la ETA-IL. Nuestro servicio privado puede aplicar una tarifa adicional por asistencia, revisión y seguimiento. El precio correspondiente debe mostrarse antes de confirmar el pago.
        </p>
      </section>

      <section>
        <h2>Decisión y control migratorio</h2>
        <p>
          No podemos garantizar la aprobación de una solicitud ni el ingreso a Israel. La evaluación de la ETA-IL y la decisión final de admisión son competencia exclusiva de las autoridades israelíes.
        </p>
      </section>

      <section>
        <h2>Exactitud de la información</h2>
        <p>
          Procuramos mantener el contenido actualizado, pero los requisitos, aranceles y procedimientos pueden modificarse. Cuando exista una diferencia entre este sitio y una fuente gubernamental, prevalece la información oficial y la normativa aplicable.
        </p>
      </section>

      <section>
        <h2>Responsabilidad del solicitante</h2>
        <p>
          La persona solicitante es responsable de proporcionar información verdadera, completa y consistente con su documentación. También debe verificar las condiciones de viaje, seguridad, salud, visado y tránsito aplicables a su situación personal.
        </p>
      </section>
    </InfoPage>
  );
}
