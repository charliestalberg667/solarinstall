"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useLanguage } from "./language-provider";
import { Menu, Sun, Moon } from "lucide-react";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { href: "/", label: language === "fr" ? "Accueil" : "Home" },
    { href: "/services", label: language === "fr" ? "Services" : "Diensten" },
    { href: "/about", label: language === "fr" ? "À propos" : "Over ons" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900 dark:to-orange-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="SolarStock Logo"
                width={150}
                height={50}
              />
            </Link>
          </div>
          <div className="hidden md:flex flex-grow justify-center">
            <div className="flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                aria-label={
                  theme === "dark"
                    ? "Switch to light mode"
                    : "Switch to dark mode"
                }
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}
            <button
              onClick={() => setLanguage(language === "fr" ? "nl" : "fr")}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {language === "fr" ? "NL" : "FR"}
            </button>
          </div>
          <div className="md:hidden">
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
            {mounted && (
              <button
                onClick={() => {
                  setTheme(theme === "dark" ? "light" : "dark");
                  toggleMenu();
                }}
                className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                {theme === "dark"
                  ? "Mode clair | Lichte modus"
                  : "Mode sombre | Donkere modus"}
              </button>
            )}
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
