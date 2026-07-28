import type { Metadata } from "next";
import Link from "next/link";
import { InfoPage } from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "Cuánto demora la ETA-IL y cuándo solicitarla",
  description:
    "La respuesta de ETA-IL puede demorar hasta 72 horas. Conocé cuándo conviene solicitarla, cómo revisar el estado y qué hacer si no recibís el correo.",
  alternates: { canonical: "/cuanto-demora-eta-il" },
  openGraph: {
    title: "¿Cuánto demora la ETA-IL?",
    description:
      "Tiempos de respuesta, anticipación recomendada y seguimiento de la autorización electrónica para viajar a Israel.",
    url: "/cuanto-demora-eta-il",
  },
};

export default function CuantoDemoraEtaIlPage() {
  return (
    <InfoPage
      title="¿Cuánto demora la ETA-IL?"
      intro="La respuesta puede enviarse dentro de las 72 horas posteriores a la presentación. Solicitarla con anticipación permite resolver cualquier inconveniente antes del viaje."
    >
      <section>
        <h2>Tiempo habitual de respuesta</h2>
        <p>
          La mayoría de las solicitudes puede resolverse rápidamente, pero el plazo informado es de hasta 72 horas. Una solicitud que requiera revisión adicional puede necesitar más gestiones o documentación.
        </p>
        <p>
          No existe una aprobación garantizada ni una vía legítima para prometer un resultado inmediato. Evitá dejar la gestión para el último momento.
        </p>
      </section>

      <section>
        <h2>¿Cuándo conviene solicitarla?</h2>
        <p>
          Presentala varios días antes de la salida. Aunque el plazo comunicado sea de 72 horas, dejar un margen mayor ayuda si hay errores en los datos, problemas con el pago, pedidos de información o demoras del correo electrónico.
        </p>
        <p>
          No es recomendable esperar hasta el día del vuelo. La autorización debe estar aprobada antes de comenzar el viaje cuando el requisito sea aplicable.
        </p>
      </section>

      <section>
        <h2>Qué hacer después de enviar</h2>
        <ol>
          <li>Guardá el número de referencia y el comprobante de pago.</li>
          <li>Revisá la bandeja de entrada y el correo no deseado.</li>
          <li>Verificá que el email informado esté escrito correctamente.</li>
          <li>No presentes solicitudes duplicadas sin revisar primero el estado.</li>
          <li>Ante un pedido adicional, respondé siguiendo las instrucciones recibidas.</li>
        </ol>
      </section>

      <section>
        <h2>¿Qué pasa si no recibo respuesta?</h2>
        <p>
          Primero controlá que hayan transcurrido las 72 horas, revisá todas las carpetas del correo y confirmá que conservás el recibo y el número de referencia.
        </p>
        <p>
          Utilizá el canal de seguimiento informado durante el proceso para revisar el estado disponible y verificar que no haya quedado pendiente información adicional.
        </p>
      </section>

      <section>
        <h2>Vigencia después de la aprobación</h2>
        <p>
          La ETA-IL puede ser válida por hasta dos años o hasta que venza el pasaporte asociado, lo que ocurra primero. Durante ese período puede utilizarse para viajes elegibles, sujetos a las condiciones de la autorización y al control fronterizo.
        </p>
        <p>
          Leé también los <Link href="/requisitos-eta-il">requisitos y datos necesarios</Link> para evitar errores antes de enviar.
        </p>
      </section>
    </InfoPage>
  );
}
