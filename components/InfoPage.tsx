import Link from "next/link";
import type { ReactNode } from "react";

type InfoPageProps = {
  title: string;
  intro: string;
  children: ReactNode;
};

export function InfoPage({ title, intro, children }: InfoPageProps) {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <Link href="/" className="text-xl font-extrabold text-blue-950">
            ETA-IL Ayuda
          </Link>
          <nav className="hidden items-center gap-5 text-sm font-medium text-slate-700 md:flex" aria-label="Navegación principal">
            <Link href="/eta-il-para-argentinos" className="hover:text-blue-900">
              Para argentinos
            </Link>
            <Link href="/requisitos-eta-il" className="hover:text-blue-900">
              Requisitos
            </Link>
            <Link href="/cuanto-demora-eta-il" className="hover:text-blue-900">
              Tiempos
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

      <article className="mx-auto max-w-4xl px-6 py-12 md:py-16">
        <nav aria-label="Migas de pan" className="mb-8 text-sm text-slate-500">
          <Link href="/" className="hover:text-blue-900">Inicio</Link>
          <span aria-hidden="true"> / </span>
          <span>{title}</span>
        </nav>

        <header className="mb-10">
          <h1 className="text-4xl font-extrabold tracking-tight text-blue-950 md:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-xl leading-8 text-slate-700">{intro}</p>
        </header>

        <div className="space-y-10 text-lg leading-8 text-slate-700 [&_a]:font-semibold [&_a]:text-blue-900 [&_a]:underline [&_h2]:mt-12 [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-blue-950 [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-blue-950 [&_li]:mb-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ul]:list-disc [&_ul]:pl-6">
          {children}
        </div>

        <section className="mt-14 rounded-3xl bg-blue-950 p-8 text-white md:p-10">
          <h2 className="text-3xl font-bold">¿Preferís asistencia en español?</h2>
          <p className="mt-4 max-w-2xl text-blue-100">
            Podés completar el proceso con acompañamiento, revisión de datos y seguimiento por correo.
          </p>
          <Link
            href="/apply/step-1"
            className="mt-6 inline-flex rounded-full bg-white px-6 py-3 font-bold text-blue-950 hover:bg-blue-50"
          >
            Empezar ahora
          </Link>
        </section>
      </article>

      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-10 text-sm text-slate-600 md:grid-cols-2">
          <div>
            <p className="font-bold text-slate-900">ETA-IL Ayuda</p>
            <p className="mt-2 max-w-xl">
              Información y asistencia en español para preparar solicitudes ETA-IL. La aprobación y las condiciones de ingreso dependen de las autoridades correspondientes.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 md:justify-end">
            <Link href="/aviso-legal" className="hover:text-blue-900">Aviso legal</Link>
            <Link href="/preguntas-frecuentes" className="hover:text-blue-900">Preguntas frecuentes</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
