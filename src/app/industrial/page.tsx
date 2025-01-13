"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/components/language-provider";
import { PowerCTAIndustrial } from "@/components/power-cta-industrial";

interface Content {
  title: string;
  subtitle: string;
  cards: Card[];
  cta: CTA;
}

interface Card {
  title: string;
  description: string;
  image: string;
}

interface CTA {
  title: string;
  description: string;
  button: string;
}

function IndustrialDesktop({ content }: { content: Content }) {
  const { title, subtitle, cards } = content;

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="text-xl">{subtitle}</p>
        <p>
          Chaque maison est unique. Notre équipe technique conçoit une
          installation solaire parfaitement adaptée à votre consommation et à
          votre toit.
        </p>
      </div>

      <div className="grid gap-8 pb-5">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`grid md:grid-cols-2 gap-4 items-center ${
              index % 2 === 0 ? "md:grid-flow-col" : "md:grid-flow-col-dense"
            }`}
          >
            {index % 2 === 0 ? (
              <>
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
                <div className="space-y-4 md:pl-2">
                  <h2 className="text-3xl font-bold text-center">
                    {card.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="space-y-4 md:pr-2">
                  <h2 className="text-3xl font-bold text-center">
                    {card.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              </>
            )}
          </div>
        ))}
        <PowerCTAIndustrial />
      </div>
    </div>
  );
}

function IndustrialMobile({ content }: { content: Content }) {
  const { title, subtitle, cards } = content;

  return (
    <div className="px-4">
      <div className="text-center mb-12">
        <h1 className="text-6xl font-bold mb-2">{title}</h1>
        <p className="text-blue-600 text-lg">{subtitle}</p>
      </div>
      {cards.map((card, index) => (
        <div key={index} className="mb-6 text-center">
          <div className="relative h-[350px] rounded-lg overflow-hidden">
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-8">
              <h2 className="text-2xl font-bold text-white mt-4">
                {card.title}
              </h2>
            </div>
          </div>
        </div>
      ))}
      <PowerCTAIndustrial />
    </div>
  );
}

export default function Industrial() {
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
      cards: [
        {
          title: "Tous types de toitures",
          description:
            "Nos experts installent des panneaux solaires sur tout type de toit. Que vous ayez un toit plat, incliné ou complexe, nous avons la solution adaptée à votre situation.",
          image: "/images/roof-installation.jpg",
        },
        {
          title: "Borne de recharge universelle",
          description:
            "Rechargez votre véhicule électrique efficacement avec nos bornes de recharge universelles. Optimisées pour une utilisation domestique.",
          image: "/images/charger.jpg",
        },
        {
          title: "Suivi en temps réel",
          description:
            "Gardez le contrôle de votre consommation d'énergie avec notre plateforme de surveillance intuitive. Suivez votre production d'énergie solaire en temps réel.",
          image: "/images/monitoring-fr.jpg",
        },
      ],
      cta: {
        title: "Plus d'informations",
        description: "Contactez-nous pour un devis gratuit.",
        button: "Contact",
      },
    },
    nl: {
      title: "Zonne-installatie voor Thuis",
      subtitle: "Oplossingen op maat voor uw woning",
      cards: [
        {
          title: "Alle soorten daken",
          description:
            "Onze experts installeren zonnepanelen op elk type dak. Of u nu een plat, schuin of complex dak heeft, wij hebben de oplossing die bij uw situatie past.",
          image: "/images/roof-installation.jpg",
        },
        {
          title: "Universele laadpaal",
          description:
            "Laad uw elektrische voertuig efficiënt op met onze universele laadpalen. Geoptimaliseerd voor thuisgebruik.",
          image: "/images/charger.jpg",
        },
        {
          title: "Realtime monitoring",
          description:
            "Houd controle over uw energieverbruik met ons intuïtieve monitoringplatform. Volg uw zonne-energieproductie in realtime.",
          image: "/images/monitoring-nl.jpg",
        },
      ],
      cta: {
        title: "Meer informatie",
        description: "Neem contact met ons op voor een gratis offerte.",
        button: "Contact",
      },
    },
  };

  if (!mounted) return null;

  const currentContent = content[language];
  return isDesktop ? (
    <IndustrialDesktop content={currentContent} />
  ) : (
    <IndustrialMobile content={currentContent} />
  );
}
