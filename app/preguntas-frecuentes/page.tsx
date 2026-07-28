import type { Metadata } from "next";
import Link from "next/link";
import { InfoPage } from "@/components/InfoPage";

const questions = [
  {
    q: "¿Qué significa ETA-IL?",
    a: "ETA-IL es la autorización electrónica de viaje a Israel. Se utiliza para evaluar previamente a viajeros de países exentos de visa que realizan visitas cortas elegibles.",
  },
  {
    q: "¿Desde cuándo es obligatoria?",
    a: "El requisito comenzó a aplicarse el 1 de enero de 2025 para las personas alcanzadas por el sistema que viajan desde países exentos de visa.",
  },
  {
    q: "¿Cómo se informa el costo?",
    a: "El importe total de la gestión se muestra antes de confirmar el pago. Revisá la moneda, el detalle y los posibles cargos de conversión de tu medio de pago.",
  },
  {
    q: "¿Cuánto tarda en aprobarse?",
    a: "La respuesta puede enviarse dentro de las 72 horas posteriores a la presentación. Una revisión adicional puede requerir más gestiones.",
  },
  {
    q: "¿Cuánto tiempo es válida?",
    a: "Puede tener vigencia de hasta dos años o hasta el vencimiento del pasaporte informado, lo que ocurra primero.",
  },
  {
    q: "¿Cuánto tiempo puedo permanecer en Israel?",
    a: "Para visitas elegibles, la estadía puede ser de hasta 90 días por visita. La duración autorizada y la admisión final dependen de las autoridades fronterizas.",
  },
  {
    q: "¿Necesito una ETA-IL para trabajar o estudiar?",
    a: "No es el permiso adecuado para empleo, estudios prolongados o residencia. Esas actividades suelen requerir una visa específica.",
  },
  {
    q: "¿Qué pasa si cambio el pasaporte?",
    a: "La ETA-IL está vinculada al pasaporte utilizado. Si renovás o reemplazás el documento, normalmente deberás presentar una nueva solicitud.",
  },
  {
    q: "¿La aprobación garantiza la entrada a Israel?",
    a: "No. Autoriza a viajar y presentarse ante el control fronterizo. La decisión final de ingreso corresponde a las autoridades israelíes.",
  },
  {
    q: "¿Cómo reduzco errores en la solicitud?",
    a: "Copiá los datos exactamente como figuran en el pasaporte, verificá fechas y números, utilizá un correo activo y revisá todas las respuestas antes de confirmar.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: questions.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export const metadata: Metadata = {
  title: "Preguntas frecuentes sobre ETA-IL",
  description:
    "Respuestas sobre costo, demora, vigencia, requisitos, estadía, pasaporte y preparación de la autorización ETA-IL para viajar a Israel.",
  alternates: { canonical: "/preguntas-frecuentes" },
  openGraph: {
    title: "Preguntas frecuentes sobre la ETA-IL",
    description:
      "Todo lo que necesitás saber antes de solicitar la autorización electrónica para viajar a Israel.",
    url: "/preguntas-frecuentes",
  },
};

export default function PreguntasFrecuentesPage() {
  return (
    <InfoPage
      title="Preguntas frecuentes sobre ETA-IL"
      intro="Respuestas claras sobre la autorización electrónica para viajar a Israel, sus requisitos, tiempos, vigencia y revisión de datos."
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="divide-y divide-slate-200 border-y border-slate-200">
        {questions.map((item) => (
          <div key={item.q} className="py-7">
            <h2 className="!mt-0 !text-2xl">{item.q}</h2>
            <p className="mt-3">{item.a}</p>
          </div>
        ))}
      </section>

      <section>
        <h2>Guías relacionadas</h2>
        <ul>
          <li><Link href="/eta-il-para-argentinos">ETA-IL para ciudadanos argentinos</Link></li>
          <li><Link href="/requisitos-eta-il">Documentos y requisitos necesarios</Link></li>
          <li><Link href="/cuanto-demora-eta-il">Plazos y seguimiento de la solicitud</Link></li>
        </ul>
      </section>
    </InfoPage>
  );
}
