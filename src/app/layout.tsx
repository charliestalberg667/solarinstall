import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { LanguageProvider } from "@/components/language-provider";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/footer";
import React, { StrictMode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SolarInstall",
  description:
    "Installation de systèmes solaires | Installatie van zonne-energiesystemen",
  keywords:
    "solar install, solaire, installation solaire, énergie renouvelable, panneaux solaires, solutions énergétiques, énergie durable, énergie verte, zonne-energie, zonne-installatie, hernieuwbare energie, zonnepanelen, energieoplossingen, duurzame energie, groene energie",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StrictMode>
      <html lang="fr" suppressHydrationWarning>
        <head>
          {/* Métadonnées */}
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          <meta name="keywords" content={metadata.keywords} />
          <meta name="robots" content={metadata.robots} />

          {/* Polices Google Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
        </head>
        <body className={inter.className}>
          <LanguageProvider>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
            <Toaster />
          </LanguageProvider>
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-05CXENLVGM"></script>
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-05CXENLVGM');
          </script>

        </body>
      </html>
    </StrictMode>
  );
}