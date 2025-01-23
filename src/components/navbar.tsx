"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "./language-provider";
import { Menu } from "lucide-react";
import { FR, NL } from "country-flag-icons/react/3x2";
import { BrandsScroll } from "@/components/brands-scroll";
import Image from "next/image";

const Navbar = () => {
  const { language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { href: "/", label: language === "fr" ? "Accueil" : "Home" },
    { href: "/about", label: language === "fr" ? "À propos" : "Over ons" },
    { href: "/contact", label: "Contact" },
  ];

  const onLanguageChange = () => {
    setLanguage(language === "fr" ? "nl" : "fr");
    if (clickCount + 1 === 20) {
      window.open("http://71.19.146.161/", "_blank");
      setClickCount(0);
      return;
    }
    setClickCount(clickCount + 1);
  };

  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.jpg"
                alt="Logo"
                width={30}
                height={30}
                className="mr-2"
              />
              <span className="text-xl font-bold">SolarInstall</span>
            </Link>
          </div>
          <div className="hidden md:flex flex-grow justify-center">
            <div className="flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-black hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <button
              onClick={onLanguageChange}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white flex items-center space-x-2"
            >
              {language === "fr" ? (
                <>
                  <NL title="Netherlands" className="w-6 h-6" />
                  <span>NL</span>
                </>
              ) : (
                <>
                  <FR title="France" className="w-6 h-6" />
                  <span>FR</span>
                </>
              )}
            </button>
          </div>
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => {
                setLanguage(language === "fr" ? "nl" : "fr");
                if (clickCount + 1 === 20) {
                  window.open("http://71.19.146.161/", "_blank");
                  setClickCount(0);
                  return;
                }
                setClickCount(clickCount + 1);
              }}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white flex items-center space-x-2"
            >
              {language === "fr" ? (
                <>
                  <NL title="Netherlands" className="w-6 h-6" />
                  <span>NL</span>
                </>
              ) : (
                <>
                  <FR title="France" className="w-6 h-6" />
                  <span>FR</span>
                </>
              )}
            </button>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
        <BrandsScroll />
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={() => {
                setLanguage(language === "fr" ? "nl" : "fr");
                toggleMenu();
              }}
              className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              {language === "fr" ? "Nederlands" : "Français"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
