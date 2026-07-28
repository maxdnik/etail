import type { Metadata } from "next";
import Link from "next/link";
import { InfoPage } from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "ETA-IL para argentinos: requisitos para viajar a Israel",
  description:
    "Guía en español sobre la ETA-IL para ciudadanos argentinos: quién debe solicitarla, requisitos, vigencia, tiempos y recomendaciones antes de viajar a Israel.",
  alternates: { canonical: "/eta-il-para-argentinos" },
  openGraph: {
    title: "ETA-IL para argentinos: guía para viajar a Israel",
    description:
      "Requisitos, tiempos y vigencia de la autorización ETA-IL para viajeros con pasaporte argentino.",
    url: "/eta-il-para-argentinos",
  },
};

export default function EtaIlParaArgentinosPage() {
  return (
    <InfoPage
      title="ETA-IL para argentinos"
      intro="Los viajeros con pasaporte argentino deben verificar antes de salir si necesitan una autorización ETA-IL o una visa. Esta guía resume los puntos principales para una visita corta a Israel."
    >
      <section>
        <h2>¿Un argentino necesita ETA-IL para viajar a Israel?</h2>
        <p>
          Desde el 1 de enero de 2025, las personas de países exentos de visa que viajan a Israel deben contar con una ETA-IL aprobada antes de iniciar el viaje, salvo que se encuentren dentro de una excepción o ya posean una visa israelí válida.
        </p>
        <p>
          El requisito se determina por la nacionalidad, el tipo de pasaporte, el motivo del viaje y la situación migratoria particular. Antes de presentar la solicitud, conviene revisar cuidadosamente la elegibilidad y los datos del documento.
        </p>
      </section>

      <section>
        <h2>¿Para qué viajes sirve?</h2>
        <p>La ETA-IL está pensada para visitas de corta duración, como:</p>
        <ul>
          <li>turismo y vacaciones;</li>
          <li>visitas familiares;</li>
          <li>reuniones o actividades de negocios sin empleo local;</li>
          <li>tránsito cuando corresponda pasar por el control fronterizo.</li>
        </ul>
        <p>
          No reemplaza las visas de trabajo, estudio, residencia ni otros permisos especiales. Para esos casos se debe tramitar la categoría migratoria correspondiente.
        </p>
      </section>

      <section>
        <h2>Qué necesitás preparar</h2>
        <ul>
          <li>Pasaporte argentino vigente y en buen estado.</li>
          <li>Correo electrónico al que tengas acceso.</li>
          <li>Datos personales exactamente como aparecen en el pasaporte.</li>
          <li>Información básica del viaje y motivo de la visita.</li>
          <li>Medio de pago habilitado para compras internacionales.</li>
        </ul>
        <p>
          Revisá la guía completa de <Link href="/requisitos-eta-il">requisitos para solicitar la ETA-IL</Link> antes de comenzar.
        </p>
      </section>

      <section>
        <h2>Tiempo de respuesta y vigencia</h2>
        <p>
          La respuesta puede demorar hasta 72 horas. Por ese motivo, es recomendable completar el trámite varios días antes del vuelo y evitar hacerlo a último momento.
        </p>
        <p>
          Una ETA-IL aprobada puede ser válida por hasta dos años o hasta la fecha de vencimiento del pasaporte utilizado, lo que ocurra primero. Si cambiás de pasaporte o se modifican datos esenciales, puede ser necesaria una nueva solicitud.
        </p>
        <p>
          Encontrá más detalles en <Link href="/cuanto-demora-eta-il">cuánto demora la ETA-IL</Link>.
        </p>
      </section>

      <section>
        <h2>La aprobación no garantiza el ingreso</h2>
        <p>
          La ETA-IL permite viajar y presentarse ante el control fronterizo, pero la decisión final de admisión corresponde a las autoridades de Israel. Llevá documentación que respalde el motivo y las condiciones de tu viaje cuando sea pertinente.
        </p>
      </section>

      <section>
        <h2>Revisión antes de comenzar</h2>
        <p>
          Controlá que el pasaporte esté vigente, que los nombres y números coincidan exactamente y que el correo electrónico pueda recibir las comunicaciones del proceso. Una revisión previa reduce errores y demoras.
        </p>
      </section>
    </InfoPage>
  );
}
