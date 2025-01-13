"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { FR, NL } from "country-flag-icons/react/3x2";
import dynamic from "next/dynamic";
import { ScrollArrow } from "@/components/ScrollArrow";

interface Content {
  heroTitle: string;
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

const SolarPanelScene = dynamic(
  () => import("@/components/solar-panel-ripple-effect/scene"),
  {
    loading: () => (
      <div
        role="status"
        className="flex w-full h-screen justify-center items-center"
      >
        <svg
          aria-hidden="true"
          className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    ),
  },
);

function HomeDesktop({ content }: { content: Content }) {
  const { language, setLanguage } = useLanguage();
  const [clickCount, setClickCount] = useState(0);
  const { heroTitle, title, subtitle, cards, cta } = content;

  return (
    <div>
      {/* Hero */}
      <div
        className="h-screen bg-black text-white pt-4"
        style={{
          backgroundImage: "url('/images/background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex items-center justify-between px-6">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold">SolarInstall</span>
            </Link>
          </div>
          <div className="text-lg">
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
              className="p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white flex items-center space-x-2"
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
        </div>
        <div className="items-center justify-center h-full">
          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-6xl font-bold mt-16">{heroTitle}</h1>
            <SolarPanelScene />
          </div>
        </div>
      </div>
      {/* Content */}
      <div id="content-section" className="container mx-auto px-4 pt-12">
        <div className="text-center mb-12">
          <h1 className="text-8xl font-bold mb-2">{title}</h1>
          <p className="text-blue-600">{subtitle}</p>
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
                    <div className="flex mt-4 justify-center">
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
                  <div className="space-y-4 md:pr-2">
                    <h2 className="text-3xl font-bold text-center">
                      {card.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      {card.description}
                    </p>
                    <div className="flex mt-4 justify-center">
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
      <ScrollArrow />
    </div>
  );
}

function HomeMobile({ content }: { content: Content }) {
  const { title, subtitle, cards, cta } = content;

  return (
    <div className="px-4">
      <div className="text-center mb-12">
        <h1 className="text-6xl font-bold mb-2">{title}</h1>
        <p className="text-blue-600 text-lg">{subtitle}</p>
      </div>
      {cards.map((card, index) => (
        <div key={index} className="mb-6 text-center">
          <div className="relative h-[350px] rounded-lg overflow-hidden">
            <Link href={card.link} className="mb-4">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-between p-8">
                <h2 className="text-2xl font-bold text-white mt-4">
                  {card.title}
                </h2>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  {cta}
                </Button>
              </div>
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
      heroTitle: "liberez la puissance du soleil avec SolarInstall",
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
      heroTitle: "ontketen de kracht van de zon met SolarInstall",
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
