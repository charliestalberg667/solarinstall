"use client";
import React from "react";
import { useLanguage } from "@/components/language-provider";

const Footer = () => {
  const { language } = useLanguage();

  const content = {
    fr: {
      copyright: "SolarInstall. Tous droits réservés.",
      conditions: "Conditions",
      privacy: "Politique de confidentialité",
      contact: "Contactez-nous",
    },
    nl: {
      copyright: "SolarInstall. Alle rechten voorbehouden.",
      conditions: "Voorwaarden",
      privacy: "Privacybeleid",
      contact: "Contacteer ons",
    },
  };

  const { copyright, conditions, privacy, contact } = content[language];

  return (
    <footer className="bg-gray-300 text-black py-6">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} {copyright}
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="/conditions" className="hover:underline">
            {conditions}
          </a>
          <a href="/privacy" className="hover:underline">
            {privacy}
          </a>
          <a href="/contact" className="hover:underline">
            {contact}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
