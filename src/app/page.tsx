"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { BrandsScroll } from "@/components/brands-scroll";

interface Content {
  title: string;
  subtitle: string;
  cards: Card[];
  cta: string;
}

interface Card {
  title: string;
  description: string;
  image: string;
  link: string;
}

function HomeDesktop({ content }: { content: Content }) {
  const { title, subtitle, cards, cta } = content;

  return (
    <div className="container mx-auto px-4">
      <div className="container mx-auto px-4 md:px-40">
        <BrandsScroll />
      </div>
      <div className="text-center mb-12">
        <h1 className="text-8xl font-bold mb-2">{title}</h1>
        <p className="text-blue-600">{subtitle}</p>
      </div>

      <div className="grid gap-16">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`grid md:grid-cols-2 gap-8 items-center ${
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
                <div className="space-y-4 md:pl-8">
                  <h2 className="text-3xl font-bold text-center">
                    {card.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                  <div className="flex mt-4">
                    <Link href={card.link}>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                        {cta}
                      </Button>
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="space-y-4 md:pr-8">
                  <h2 className="text-3xl font-bold text-center">
                    {card.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-right">
                    {card.description}
                  </p>
                  <div className="flex justify-end mt-4">
                    <Link href={card.link}>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                        {cta}
                      </Button>
                    </Link>
                  </div>
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
      </div>
    </div>
  );
}

function HomeMobile({ content }: { content: Content }) {
  const { title, subtitle, cards, cta } = content;

  return (
    <div className="px-4">
      <div className="container mx-auto px-4 md:px-40">
        <BrandsScroll />
      </div>
      <div className="text-center mb-12">
        <h1 className="text-6xl font-bold mb-2">{title}</h1>
        <p className="text-blue-600 text-lg">{subtitle}</p>
      </div>
      {cards.map((card, index) => (
        <div key={index} className="mb-12 text-center">
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h2 className="text-2xl font-bold text-white">{card.title}</h2>
            </div>
          </div>
          <div className="mt-4">
            <Link href={card.link}>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                {cta}
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
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
      title: "SolarInstall",
      subtitle: "Votre partenaire pour l'énergie solaire",
      cards: [
        {
          title: "Installation Solaire pour Domicile",
          description:
            "Nous offrons des solutions solaires sur mesure pour les particuliers. Nos experts installent des panneaux solaires sur tout type de toit et placent des onduleurs hybrides avec des fonctions de gestion intelligentes. Vous pouvez suivre votre consommation d'énergie facilement via une application pratique. De plus, nous installons des bornes de recharge et nous nous occupons du nettoyage et de l'entretien de votre installation. Optez pour une énergie durable et une facture énergétique réduite.",
          image: "/images/residential.jpg",
          link: "/residential",
        },
        {
          title: "Installation Solaire pour Immeuble",
          description:
            "Optimisez la gestion énergétique de votre bâtiment avec nos solutions. Nous calculons votre installation solaire sur mesure et l'installons sur tout type de toit. Avec nos onduleurs intelligents, vous pouvez effectuer une surveillance en temps réel via une application. Nous installons des bornes de recharge et offrons des services de maintenance et de nettoyage pour vos panneaux solaires. Ensemble, nous assurons une énergie durable pour tous les résidents.",
          image: "/images/building.jpg",
          link: "/buildings",
        },
        {
          title: "Installation Solaire pour Entreprise",
          description:
            "Les entreprises bénéficient de solutions énergétiques puissantes sur mesure. Nous fournissons des onduleurs jusqu'à 200 kW et des batteries jusqu'à 250 kWh, parfaits pour une utilisation à grande échelle. Nos systèmes incluent des fonctions de sauvegarde et de gestion dynamique des tarifs pour optimiser les coûts. De plus, nous installons des bornes de recharge et des carports solaires pour vos employés et votre flotte de véhicules. Réduisez vos coûts énergétiques et augmentez votre efficacité.",
          image: "/images/enterprise.png",
          link: "/enterprise",
        },
        {
          title: "Installation Solaire pour Industrie",
          description:
            "Optimisez la gestion énergétique de votre installation industrielle avec nos solutions. Nous proposons des systèmes sur mesure pour vos besoins spécifiques. Nos onduleurs intelligents permettent une surveillance en temps réel via une application. Nous installons des bornes de recharge et offrons des services de maintenance et de nettoyage pour vos panneaux solaires. Ensemble, nous assurons une énergie durable pour tous les résidents.",
          image: "/images/industrial.jpg",
          link: "/industrial",
        },
      ],
      cta: "Plus d'informations",
    },
    nl: {
      title: "SolarInstall",
      subtitle: "Uw partner voor zonne-energie",
      cards: [
        {
          title: "Zonne-installatie voor thuis",
          description:
            "Wij bieden op maat gemaakte zonne-oplossingen voor particulieren. Onze experts installeren zonnepanelen op elk type dak en plaatsen hybride omvormers met slimme beheerfuncties. U kunt uw energieverbruik eenvoudig volgen via een handige app. Daarnaast installeren wij laadpalen en verzorgen wij het reinigen en onderhouden van uw installatie. Kies voor duurzame energie en een lagere energierekening.",
          image: "/images/residential.jpg",
          link: "/residential",
        },
        {
          title: "Zonne-installatie voor flatgebouw",
          description:
            "Optimaliseer het energiebeheer van uw gebouw met onze oplossingen. Wij berekenen uw zonne-installatie op maat en installeren deze op elk type dak. Met onze slimme omvormers kunt u realtime monitoring uitvoeren via een app. We plaatsen laadpalen en bieden onderhouds- en reinigingsservices voor uw zonnepanelen. Samen zorgen we voor duurzame energie voor alle bewoners.",
          image: "/images/building.jpg",
          link: "/buildings",
        },
        {
          title: "Zonne-installatie voor bedrijf",
          description:
            "Bedrijven profiteren van krachtige energieoplossingen op maat. Wij leveren omvormers tot 200 kW en batterijen tot 250 kWh, perfect voor grootschalig gebruik. Onze systemen bevatten back-up functies en dynamisch tariefbeheer om kosten te optimaliseren. Daarnaast plaatsen we laadpalen en zonnecarports voor uw werknemers en wagenpark. Verlaag uw energiekosten en verhoog uw efficiëntie.",
          image: "/images/enterprise.png",
          link: "/enterprise",
        },
        {
          title: "Zonne-installatie voor industrie",
          description:
            "Optimaliseer het energiebeheer van uw gebouw met onze oplossingen. Wij berekenen uw zonne-installatie op maat en installeren deze op elk type dak. Met onze slimme omvormers kunt u realtime monitoring uitvoeren via een app. We plaatsen laadpalen en bieden onderhouds- en reinigingsservices voor uw zonnepanelen. Samen zorgen we voor duurzame energie voor alle bewoners.",
          image: "/images/industrial.jpg",
          link: "/industrial",
        },
      ],
      cta: "Meer informatie",
    },
  };

  if (!mounted) return null;

  const currentContent = content[language];
  return isDesktop ? (
    <HomeDesktop content={currentContent} />
  ) : (
    <HomeMobile content={currentContent} />
  );
}
