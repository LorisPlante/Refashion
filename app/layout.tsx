import type { Metadata } from "next";
import { lato, poppins } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Re-fresh",
  description: "Donnez une deuxième vie à vos vêtements, linge de maison et chaussures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-FR">
      <head>
        <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Re_fresh" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body className={`${lato} ${poppins}`}>{children}</body>
    </html>
  );
}
