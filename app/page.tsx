import Link from "next/link";

const faqItems = [
  {
    question: "¿Qué es la ETA-IL?",
    answer:
      "Es una autorización electrónica previa al viaje para personas de países exentos de visa que visitan Israel por turismo, negocios o tránsito, normalmente por estadías de hasta 90 días.",
  },
  {
    question: "¿Los ciudadanos argentinos necesitan ETA-IL?",
    answer:
      "Los viajeros con pasaporte argentino deben verificar su elegibilidad y, cuando corresponda, contar con una ETA-IL aprobada antes de iniciar el viaje. La situación personal y el tipo de pasaporte pueden modificar el requisito.",
  },
  {
    question: "¿Cuánto demora la respuesta?",
    answer:
      "La respuesta puede enviarse dentro de las 72 horas posteriores a la presentación. Conviene solicitarla con varios días de anticipación.",
  },
  {
    question: "¿Cuánto dura la ETA-IL?",
    answer:
      "Puede tener una vigencia de hasta dos años o hasta el vencimiento del pasaporte utilizado, lo que ocurra primero.",
  },
  {
    question: "¿La aprobación garantiza el ingreso?",
    answer:
      "No. La autorización permite viajar y presentarse ante el control fronterizo, pero la decisión final de admisión corresponde a las autoridades migratorias.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.israel-entrypiba.com/#website",
      url: "https://www.israel-entrypiba.com/",
      name: "ETA-IL Ayuda",
      inLanguage: "es-AR",
    },
    {
      "@type": "Organization",
      "@id": "https://www.israel-entrypiba.com/#organization",
      name: "ETA-IL Ayuda",
      url: "https://www.israel-entrypiba.com/",
      description:
        "Información, acompañamiento y revisión en español para solicitudes ETA-IL.",
    },
    {
      "@type": "Service",
      "@id": "https://www.israel-entrypiba.com/#service",
      name: "Asistencia para solicitud ETA-IL",
      serviceType: "Asistencia para autorización electrónica de viaje",
      provider: {
        "@id": "https://www.israel-entrypiba.com/#organization",
      },
      areaServed: {
        "@type": "Country",
        name: "Argentina",
      },
      availableLanguage: "Spanish",
      url: "https://www.israel-entrypiba.com/",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <Link href="/" className="text-xl font-extrabold text-blue-950" aria-label="ETA-IL Ayuda, inicio">
            ETA-IL Ayuda
          </Link>
          <nav className="hidden items-center gap-5 text-sm font-medium text-slate-700 lg:flex" aria-label="Navegación principal">
            <Link href="/eta-il-para-argentinos" className="hover:text-blue-900">
              ETA-IL para argentinos
            </Link>
            <Link href="/requisitos-eta-il" className="hover:text-blue-900">
              Requisitos
            </Link>
            <Link href="/cuanto-demora-eta-il" className="hover:text-blue-900">
              Cuánto demora
            </Link>
            <Link href="/preguntas-frecuentes" className="hover:text-blue-900">
              Preguntas frecuentes
            </Link>
          </nav>
          <Link
            href="/apply/step-1"
            className="rounded-full bg-blue-950 px-5 py-2.5 text-sm font-bold text-white hover:bg-blue-900"
          >
            Iniciar solicitud
          </Link>
        </div>
      </header>

      <section className="relative isolate overflow-hidden bg-blue-950 text-white">
        <div className="absolute inset-0 bg-[url('/bg-hero-israel.jpg')] bg-cover bg-center opacity-25" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/90 to-blue-950/55" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-blue-200">
              Autorización electrónica de viaje a Israel
            </p>
            <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              ETA-IL para viajar a Israel, con asistencia en español
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100 md:text-xl">
              Prepará tu solicitud con información clara, revisión de datos y acompañamiento durante el proceso. Conocé los requisitos, los tiempos y la vigencia antes de empezar.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/apply/step-1"
                className="inline-flex justify-center rounded-full bg-white px-7 py-3.5 font-bold text-blue-950 hover:bg-blue-50"
              >
                Iniciar solicitud
              </Link>
              <Link
                href="/requisitos-eta-il"
                className="inline-flex justify-center rounded-full border border-blue-200 px-7 py-3.5 font-bold text-white hover:bg-white/10"
              >
                Ver requisitos
              </Link>
            </div>
          </div>

          <aside className="rounded-3xl border border-white/20 bg-white/10 p-7 backdrop-blur-sm" aria-label="Información rápida de ETA-IL">
            <h2 className="text-xl font-bold">Información esencial</h2>
            <dl className="mt-6 space-y-5 text-sm">
              <div>
                <dt className="font-semibold text-blue-200">Tiempo de respuesta</dt>
                <dd className="mt-1 text-base text-white">Puede demorar hasta 72 horas</dd>
              </div>
              <div>
                <dt className="font-semibold text-blue-200">Vigencia</dt>
                <dd className="mt-1 text-base text-white">Hasta 2 años o hasta que venza el pasaporte</dd>
              </div>
              <div>
                <dt className="font-semibold text-blue-200">Estadía</dt>
                <dd className="mt-1 text-base text-white">Hasta 90 días por visita, según autorización de ingreso</dd>
              </div>
              <div>
                <dt className="font-semibold text-blue-200">Proceso</dt>
                <dd className="mt-1 text-base text-white">Solicitud online y comunicaciones por correo</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-6xl gap-5 px-6 py-7 text-sm text-slate-700 md:grid-cols-3">
          <div className="font-semibold">Información actualizada y explicada en español</div>
          <div className="font-semibold">Revisión de datos antes de continuar</div>
          <div className="font-semibold">Seguimiento del estado por correo electrónico</div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-800">Guía clara</p>
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-blue-950">
              ¿Qué es la ETA-IL y quién debe solicitarla?
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-slate-700">
            <p>
              La ETA-IL es una autorización electrónica previa al viaje destinada a ciudadanos de países exentos de visa que planean ingresar a Israel por turismo, negocios o tránsito. Desde el 1 de enero de 2025, los viajeros alcanzados por el sistema deben contar con una aprobación antes de comenzar el viaje.
            </p>
            <p>
              La autorización permite presentarse para viajar, pero no garantiza el ingreso: la decisión final corresponde al control fronterizo israelí. También puede ser necesario tramitar una visa diferente cuando el motivo sea trabajo, estudio o una estadía prolongada.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 text-base">
              <Link href="/eta-il-para-argentinos" className="font-bold text-blue-900 underline">
                Información para argentinos
              </Link>
              <Link href="/requisitos-eta-il" className="font-bold text-blue-900 underline">
                Revisar requisitos
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-800">Antes de empezar</p>
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-blue-950">
              Requisitos básicos para completar la solicitud
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Tener la información preparada reduce errores y evita demoras innecesarias.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Pasaporte vigente", "Usá exactamente los datos y la ortografía que figuran en el documento con el que vas a viajar."],
              ["Correo electrónico", "Debe estar activo porque las comunicaciones y la respuesta se envían por email."],
              ["Datos del viaje", "Tené a mano fechas estimadas, motivo del viaje y datos de contacto cuando sean solicitados."],
              ["Medio de pago", "Utilizá un medio habilitado para operaciones internacionales y revisá el importe antes de confirmar."],
            ].map(([title, text]) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-blue-950">{title}</h3>
                <p className="mt-3 leading-7 text-slate-700">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-800">Proceso</p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-blue-950">
            Cómo funciona nuestra asistencia
          </h2>
        </div>
        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            ["1", "Completás tus datos", "Ingresás la información del viaje y del pasaporte de forma guiada."],
            ["2", "Revisamos la información", "Controlamos consistencia, campos incompletos y posibles errores antes de continuar."],
            ["3", "Recibís el seguimiento", "Te mantenemos informado por correo sobre el avance y la respuesta correspondiente."],
          ].map(([number, title, text]) => (
            <li key={number} className="list-none rounded-3xl bg-blue-950 p-7 text-white">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white font-extrabold text-blue-950">{number}</span>
              <h3 className="mt-5 text-2xl font-bold">{title}</h3>
              <p className="mt-3 leading-7 text-blue-100">{text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-800">Respuestas rápidas</p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-blue-950">
            Preguntas frecuentes sobre ETA-IL
          </h2>
        </div>
        <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
          {faqItems.map((item) => (
            <details key={item.question} className="group py-6">
              <summary className="cursor-pointer list-none pr-8 text-xl font-bold text-blue-950 marker:hidden">
                {item.question}
              </summary>
              <p className="mt-4 leading-7 text-slate-700">{item.answer}</p>
            </details>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/preguntas-frecuentes" className="font-bold text-blue-900 underline">
            Ver todas las preguntas frecuentes
          </Link>
        </div>
      </section>

      <section className="bg-blue-950 py-16 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-extrabold">Prepará tu solicitud ETA-IL</h2>
            <p className="mt-3 max-w-2xl text-lg text-blue-100">
              Completá la información paso a paso y revisá cada dato antes de continuar.
            </p>
          </div>
          <Link
            href="/apply/step-1"
            className="shrink-0 rounded-full bg-white px-7 py-3.5 font-bold text-blue-950 hover:bg-blue-50"
          >
            Iniciar solicitud
          </Link>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 text-sm text-slate-600 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-lg font-extrabold text-blue-950">ETA-IL Ayuda</p>
            <p className="mt-3 max-w-2xl leading-6">
              Información y asistencia en español para preparar la solicitud. La aprobación de la ETA-IL y la admisión al país dependen de las autoridades correspondientes.
            </p>
            <p className="mt-3">© {new Date().getFullYear()} ETA-IL Ayuda. Todos los derechos reservados.</p>
          </div>
          <nav className="grid gap-2 md:justify-self-end" aria-label="Enlaces del pie de página">
            <Link href="/eta-il-para-argentinos" className="hover:text-blue-900">ETA-IL para argentinos</Link>
            <Link href="/requisitos-eta-il" className="hover:text-blue-900">Requisitos ETA-IL</Link>
            <Link href="/cuanto-demora-eta-il" className="hover:text-blue-900">Cuánto demora</Link>
            <Link href="/preguntas-frecuentes" className="hover:text-blue-900">Preguntas frecuentes</Link>
            <Link href="/aviso-legal" className="hover:text-blue-900">Aviso legal</Link>
          </nav>
        </div>
      </footer>

      <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 md:hidden">
        <Link
          href="/apply/step-1"
          className="whitespace-nowrap rounded-full bg-blue-950 px-6 py-3 font-bold text-white shadow-xl"
        >
          Iniciar solicitud
        </Link>
      </div>
    </main>
  );
}
