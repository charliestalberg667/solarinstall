"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Home, Battery, Zap } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

const steps = {
  fr: [
    { icon: Sun, label: "Soleil", color: "text-yellow-500" },
    { icon: "SolarPanel", label: "Panneaux Solaires", color: "text-blue-500" },
    { icon: Zap, label: "Onduleur", color: "text-green-500" },
    { icon: Battery, label: "Batterie", color: "text-purple-500" },
    { icon: Home, label: "Maison", color: "text-orange-500" },
  ],
  nl: [
    { icon: Sun, label: "Zon", color: "text-yellow-500" },
    { icon: "SolarPanel", label: "Zonnepanelen", color: "text-blue-500" },
    { icon: Zap, label: "Omvormer", color: "text-green-500" },
    { icon: Battery, label: "Batterij", color: "text-purple-500" },
    { icon: Home, label: "Huis", color: "text-orange-500" },
  ],
};

const explanations = {
  fr: [
    "Le soleil fournit de l'énergie sous forme de lumière.",
    "Les panneaux solaires convertissent la lumière du soleil en électricité.",
    "L'onduleur transforme le courant continu en courant alternatif pour un usage domestique.",
    "L'excès d'énergie est stocké dans des batteries pour une utilisation ultérieure.",
    "Votre maison est alimentée par une énergie solaire propre et renouvelable !",
  ],
  nl: [
    "De zon levert energie in de vorm van licht.",
    "Zonnepanelen zetten zonlicht om in elektriciteit.",
    "De omvormer zet gelijkstroom om in wisselstroom voor huishoudelijk gebruik.",
    "Overtollige energie wordt opgeslagen in batterijen voor later gebruik.",
    "Uw huis wordt aangedreven door schone, hernieuwbare zonne-energie!",
  ],
};

export function SolarPowerExplanation() {
  const { language } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prevStep) => (prevStep + 1) % steps[language].length);
    }, 5000);

    return () => clearInterval(timer);
  }, [language]);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 lg:px-8 flex flex-col items-center gap-8">
      <div className="w-full text-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-black mb-6">
          {language === "fr"
            ? "Comment fonctionne l'énergie solaire ?"
            : "Hoe werkt zonne-energie?"}
        </h2>
        <p className="text-gray-600 text-sm lg:text-base">
          {explanations[language][currentStep]}
        </p>
      </div>

      <div className="lg:w-1/2">
        <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-4 sm:gap-6">
          {steps[language].map((step, index) => (
            <div
              key={step.label}
              className="flex flex-col items-center w-1/5 sm:w-auto"
            >
              <motion.div
                className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center ${
                  index <= currentStep ? "bg-blue-100" : "bg-gray-100"
                }`}
                animate={{
                  scale: index === currentStep ? 1.2 : 1,
                  transition: { duration: 0.3 },
                }}
              >
                {step.icon === "SolarPanel" ? (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className={`w-10 h-10 sm:w-12 sm:h-12 ${step.color}`}
                  >
                    <path
                      d="M3 7h18M3 17h18M5 7v10M9 7v10M13 7v10M17 7v10M19 7v10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <step.icon
                    className={`w-10 h-10 sm:w-12 sm:h-12 ${step.color}`}
                  />
                )}
              </motion.div>
              <motion.p
                className="mt-2 text-xs sm:text-sm font-medium text-center"
                animate={{
                  opacity: index <= currentStep ? 1 : 0.5,
                  transition: { duration: 0.3 },
                }}
              >
                {step.label}
              </motion.p>
            </div>
          ))}
        </div>
        <motion.div
          className="h-2 bg-blue-500 mt-4 sm:mt-6 rounded-full"
          initial={{ width: "0%" }}
          animate={{
            width: `${((currentStep + 1) / steps[language].length) * 100}%`,
          }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  );
}
