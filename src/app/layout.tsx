import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-space-grotesk",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sideredev.com.br"),
  title: "Poliana Sidere — Software Developer | Frontend, Mobile & Software Engineering",
  description:
    "Portfolio of Poliana Sidere, a developer focused on Frontend, Mobile and Software Engineering — turning complex problems into digital products.",
  authors: [{ name: "Poliana Sidere" }],
  openGraph: {
    title: "Poliana Sidere — Software Developer | Frontend, Mobile & Software Engineering",
    description:
      "Portfolio of Poliana Sidere, a developer focused on Frontend, Mobile and Software Engineering — turning complex problems into digital products.",
    url: "https://sideredev.com.br",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}