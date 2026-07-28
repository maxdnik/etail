import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solicitud ETA-IL",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function ApplyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
