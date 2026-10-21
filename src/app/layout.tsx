import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ramdi Labs",
  description:
    "Estudio de tecnología en Acapulco especializado en software y automatización con inteligencia artificial.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-MX">
      <body>{children}</body>
    </html>
  );
}
