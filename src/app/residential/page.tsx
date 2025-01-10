"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";

interface Content {
  title: string;
  subtitle: string;
  sections: Section[];
  cta: CTA;
}

interface Section {
  title: string;
  description: string;
  image: string;
  alt: string;
}

interface CTA {
  title: string;
  description: string;
  button: string;
}

function ResidentialDesktop({ content }: { content: Content }) {
  const { title, subtitle, sections, cta } = content;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-6xl font-bold mb-4">{title}</h1>
        <p className="text-xl text-blue-600">{subtitle}</p>
      </div>

      <div className="grid gap-16">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`grid md:grid-cols-2 gap-8 items-center ${
              index % 2 === 0 ? "" : "md:grid-flow-col-dense"
            }`}
          >
            {index % 2 === 0 ? (
              <>
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src={section.image}
                    alt={section.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
                <div className="space-y-4 md:pl-8">
                  <h2 className="text-3xl font-bold">{section.title}</h2>
                  <p className="text-gray-600 leading-relaxed">
                    {section.description}
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="space-y-4 md:pr-8">
                  <h2 className="text-3xl font-bold">{section.title}</h2>
                  <p className="text-gray-600 leading-relaxed">
                    {section.description}
                  </p>
                </div>
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src={section.image}
                    alt={section.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      <div className="mt-16 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg p-8 text-center shadow-lg transform transition-transform hover:scale-105">
        <h2 className="text-4xl font-bold mb-4">{cta.title}</h2>
        <p className="text-xl mb-6">{cta.description}</p>
        <Link href="/contact">
          <Button className="bg-white text-blue-700 hover:bg-gray-200 text-lg px-8 py-3">
            {cta.button}
          </Button>
        </Link>
      </div>
    </div>
  );
}

function ResidentialMobile({ content }: { content: Content }) {
  const { sections, cta } = content;

  return (
    <div className="px-4 py-8">
      {sections.map((section, index) => (
        <div key={index} className="mb-12 text-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src={section.image}
              alt={section.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white">{section.title}</h2>
            </div>
          </div>
          <p className="mt-4 text-gray-600 leading-relaxed">
            {section.description}
          </p>
        </div>
      ))}

      <div className="mt-16 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg p-8 text-center shadow-lg transform transition-transform hover:scale-105">
        <h2 className="text-4xl font-bold mb-4">{cta.title}</h2>
        <p className="text-xl mb-6">{cta.description}</p>
        <Link href="/contact">
          <Button className="bg-white text-blue-700 hover:bg-gray-200 text-lg px-8 py-3">
            {cta.button}
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default function Residential() {
  const { language } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const content = {
    fr: {
      title: "Installation Solaire pour Domicile",
      subtitle: "Solutions sur mesure pour votre maison",
      sections: [
        {
          title: "Tous types de toitures",
          description:
            "Nos experts installent des panneaux solaires sur tout type de toit. Que vous ayez un toit plat, incliné ou complexe, nous avons la solution adaptée à votre situation.",
          image: "/images/roof-installation.jpg",
          alt: "Installation sur toit",
        },
        {
          title: "Installation sur mesure",
          description:
            "Chaque maison est unique. Notre équipe technique conçoit une installation solaire parfaitement adaptée à votre consommation et à votre toit.",
          image: "/images/custom-installation.jpg",
          alt: "Plan personnalisé",
        },
        {
          title: "Borne de recharge universelle",
          description:
            "Rechargez votre véhicule électrique efficacement avec nos bornes de recharge universelles. Optimisées pour une utilisation domestique.",
          image: "/images/charger.jpg",
          alt: "Borne de recharge",
        },
        {
          title: "Suivi en temps réel",
          description:
            "Gardez le contrôle de votre consommation d'énergie avec notre plateforme de surveillance intuitive. Suivez votre production d'énergie solaire en temps réel.",
          image: "/images/monitoring-fr.jpg",
          alt: "Application de suivi",
        },
      ],
      cta: {
        title: "Devis gratuit dans notre magasin",
        description: "Découvrez nos installations solaires résidentielles",
        button: "Prendre rendez-vous",
      },
    },
    nl: {
      title: "Zonne-installatie voor thuis",
      subtitle: "Oplossingen op maat voor uw woning",
      sections: [
        {
          title: "Alle type dakstructuren",
          description:
            "Onze zonne-installaties zijn geschikt voor elk type dak. Of u nu een plat dak, hellend dak of een complexere structuur heeft, wij bieden oplossingen die perfect op uw behoeften aansluiten.",
          image: "/images/roof-installation.jpg",
          alt: "Dakinstallatie",
        },
        {
          title: "Een installatie op maat",
          description:
            "Elke woning is uniek, en daarom bieden wij zonne-installaties op maat. Van ontwerp tot installatie, ons team begeleidt u bij elke stap om het meeste uit zonne-energie te halen.",
          image: "/images/custom-installation.jpg",
          alt: "Maatwerk plan",
        },
        {
          title: "Universele autolader",
          description:
            "Laad uw elektrische voertuig snel en efficiënt op met onze universele autoladers. Geoptimaliseerd voor gebruik thuis of onderweg, biedt het een duurzame oplossing voor uw mobiliteitsbehoeften.",
          image: "/images/charger.jpg",
          alt: "Autolader",
        },
        {
          title: "Volg de productie in real-time",
          description:
            "Houd controle over uw energieverbruik met ons intuïtieve monitoringplatform. Volg in real-time de productie van zonne-energie en optimaliseer uw gebruik voor maximale.",
          image: "/images/monitoring-nl.jpg",
          alt: "Monitoring app",
        },
      ],
      cta: {
        title: "Gratis offerte in onze winkel",
        description:
          "Bekijk hoe onze zonne-installaties woningen transformeren!",
        button: "Maak een afspraak",
      },
    },
  };

  if (!mounted) return null;

  const currentContent = content[language];
  return isDesktop ? (
    <ResidentialDesktop content={currentContent} />
  ) : (
    <ResidentialMobile content={currentContent} />
  );
}
