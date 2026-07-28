import type { Metadata } from "next";
import Link from "next/link";
import { InfoPage } from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "Requisitos ETA-IL: documentos y datos necesarios",
  description:
    "Conocé los requisitos para solicitar la ETA-IL: pasaporte, correo, información del viaje, pago y controles antes de enviar la autorización para Israel.",
  alternates: { canonical: "/requisitos-eta-il" },
  openGraph: {
    title: "Requisitos para solicitar la ETA-IL",
    description:
      "Lista de documentos, datos y verificaciones necesarias antes de completar la autorización electrónica para Israel.",
    url: "/requisitos-eta-il",
  },
};

export default function RequisitosEtaIlPage() {
  return (
    <InfoPage
      title="Requisitos para solicitar la ETA-IL"
      intro="Antes de completar la autorización electrónica para viajar a Israel, prepará el pasaporte y todos los datos tal como figuran en la documentación oficial."
    >
      <section>
        <h2>1. Pasaporte vigente</h2>
        <p>
          La solicitud debe completarse con el mismo pasaporte que vas a utilizar durante el viaje. Copiá nombres, apellidos, número, nacionalidad, fecha de nacimiento y fechas de emisión y vencimiento sin abreviaturas ni cambios.
        </p>
        <p>
          Si obtenés un nuevo pasaporte después de recibir la ETA-IL, normalmente será necesario solicitar una nueva autorización porque el permiso queda asociado al documento informado.
        </p>
      </section>

      <section>
        <h2>2. Correo electrónico activo</h2>
        <p>
          Las confirmaciones, pedidos de información y la respuesta se envían por correo. Usá una dirección que revises con frecuencia y controlá también la carpeta de correo no deseado.
        </p>
      </section>

      <section>
        <h2>3. Información personal y del viaje</h2>
        <p>Durante el proceso pueden solicitarse datos como:</p>
        <ul>
          <li>domicilio y datos de contacto;</li>
          <li>nacionalidades actuales o anteriores;</li>
          <li>motivo principal de la visita;</li>
          <li>fechas estimadas del viaje;</li>
          <li>antecedentes migratorios o respuestas de seguridad.</li>
        </ul>
        <p>
          Respondé con información verdadera y completa. Las inconsistencias pueden generar consultas adicionales, demoras o rechazo.
        </p>
      </section>

      <section>
        <h2>4. Medio de pago</h2>
        <p>
          El Gobierno de Israel informa un arancel oficial de 25 NIS para la ETA-IL. El importe puede cobrarse en moneda extranjera y generar conversión o cargos de la entidad emisora de la tarjeta.
        </p>
        <p>
          Nuestro servicio privado de asistencia puede tener un costo adicional, que debe informarse de forma separada antes de confirmar el pago. También podés realizar la gestión directamente en el portal gubernamental.
        </p>
      </section>

      <section>
        <h2>5. Elegibilidad para ETA-IL</h2>
        <p>
          La ETA-IL está dirigida a visitantes de países exentos de visa para estadías cortas. No es la vía adecuada para trabajo, estudio, residencia ni otras actividades que requieran una visa específica.
        </p>
        <p>
          Los ciudadanos israelíes, titulares de determinados documentos israelíes y personas con una visa israelí válida pueden estar exentos. La verificación definitiva debe hacerse con la autoridad israelí.
        </p>
      </section>

      <section>
        <h2>Lista de control antes de enviar</h2>
        <ol>
          <li>Compará cada dato con la página biográfica del pasaporte.</li>
          <li>Confirmá que el número de pasaporte no tenga espacios ni caracteres incorrectos.</li>
          <li>Verificá las fechas y el país emisor.</li>
          <li>Revisá todas las respuestas de elegibilidad y seguridad.</li>
          <li>Guardá el comprobante y el correo de confirmación.</li>
        </ol>
        <p>
          Después de enviar, consultá <Link href="/cuanto-demora-eta-il">los tiempos habituales de respuesta</Link> y las recomendaciones de seguimiento.
        </p>
      </section>

      <section>
        <h2>Fuente oficial</h2>
        <p>
          Las condiciones pueden cambiar. Verificá siempre la información más reciente en el <a href="https://israel-entry.piba.gov.il/" target="_blank" rel="noopener noreferrer">portal oficial del Gobierno de Israel</a>, identificado por el dominio <strong>gov.il</strong>.
        </p>
      </section>
    </InfoPage>
  );
}
