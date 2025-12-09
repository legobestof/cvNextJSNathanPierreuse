import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CV Nathan Pierreuse",
  description: "CV en ligne de Nathan Pierreuse - Étudiant en BUT Informatique à l'IUT de Lens",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}
