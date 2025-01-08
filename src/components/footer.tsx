"use client";
import React from "react";
import { useLanguage } from "@/components/language-provider";

const Footer = () => {
  const { language } = useLanguage();

  const content = {
    fr: {
      copyright: "SolarInstall. Tous droits réservés.",
    },
    nl: {
      copyright: "SolarInstall. Alle rechten voorbehouden.",
    },
  };

  const { copyright } = content[language];

  return (
    <footer className="bg-gray-300 text-black py-6">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} {copyright}
        </p>
        <div className="mt-4">
          <a href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </a>
          {" | "}
          <a href="/terms-of-service" className="hover:underline">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
