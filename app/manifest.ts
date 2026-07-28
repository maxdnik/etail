import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ETA-IL Ayuda",
    short_name: "ETA-IL",
    description:
      "Información y asistencia en español para preparar una solicitud ETA-IL para viajar a Israel.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#172554",
    lang: "es-AR",
    categories: ["travel", "business"],
  };
}
