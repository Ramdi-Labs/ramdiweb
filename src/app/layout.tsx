import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ramdi Labs | Tecnología desde Acapulco",
  description:
    "Estudio de tecnología en Acapulco enfocado en software, automatización con inteligencia artificial y contenido digital.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-MX">
      <body>{children}</body>
    </html>
  );
}
