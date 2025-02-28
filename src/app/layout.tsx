import "./globals.css";
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
        <body className={inter.className}>
          <LanguageProvider>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
            <Toaster />
          </LanguageProvider>
        </body>
      </html>
    </StrictMode>
  );
}