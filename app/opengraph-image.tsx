import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ETA-IL para viajar a Israel con asistencia en español";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #0f172a 0%, #172554 55%, #1d4ed8 100%)",
          color: "white",
          padding: "72px 82px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 34, fontWeight: 800 }}>ETA-IL Ayuda</div>
          <div
            style={{
              display: "flex",
              border: "1px solid rgba(255,255,255,0.45)",
              borderRadius: 999,
              padding: "12px 22px",
              fontSize: 21,
            }}
          >
            Información en español
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 950 }}>
          <div style={{ fontSize: 26, color: "#bfdbfe", marginBottom: 22 }}>
            Autorización electrónica de viaje a Israel
          </div>
          <div style={{ fontSize: 68, lineHeight: 1.06, fontWeight: 900, letterSpacing: "-2px" }}>
            ETA-IL para viajar a Israel
          </div>
          <div style={{ fontSize: 30, lineHeight: 1.35, color: "#dbeafe", marginTop: 28 }}>
            Requisitos, tiempos, vigencia y asistencia privada paso a paso.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 20, color: "#bfdbfe" }}>
          Servicio privado e independiente · No afiliado al Gobierno de Israel
        </div>
      </div>
    ),
    size,
  );
}
