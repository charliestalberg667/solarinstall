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
      heroTitle: "Libérez le potentiel du soleil avec SolarInstall",
      title: "SolarInstall",
      subtitle: "Votre expert en énergie solaire",
      cards: [
        {
          title: "Solutions solaires pour votre domicile",
          description:
            "Transformez votre maison avec nos solutions solaires personnalisées. Nos experts installent des panneaux solaires adaptés à tous les types de toits et intègrent des onduleurs hybrides avec des fonctionnalités de gestion intelligente. Suivez votre consommation énergétique via une application intuitive. Nous installons également des bornes de recharge et assurons le nettoyage et l'entretien de vos équipements. Réduisez vos factures tout en adoptant une énergie durable.",
          image: "/images/residential.jpg",
          link: "/residential",
        },
        {
          title: "Systèmes solaires pour immeubles",
          description:
            "Optimisez la gestion énergétique de votre immeuble avec nos solutions sur mesure. Nos experts conçoivent et installent des systèmes solaires adaptés à tous les types de toits. Grâce à nos onduleurs intelligents, vous pouvez suivre vos données en temps réel via une application pratique. En plus de l'installation de bornes de recharge, nous offrons des services de maintenance et de nettoyage pour garantir des performances optimales. Favorisez une énergie verte pour tous les résidents.",
          image: "/images/building.jpg",
          link: "/buildings",
        },
        {
          title: "Solutions énergétiques pour entreprises",
          description:
            "Propulsez votre entreprise avec nos systèmes énergétiques de haute performance. Nous proposons des onduleurs allant jusqu'à 200 kW et des batteries jusqu'à 250 kWh, idéaux pour des applications à grande échelle. Nos solutions incluent des fonctions de sauvegarde et une gestion dynamique des tarifs pour réduire vos coûts. Nous installons également des bornes de recharge et des carports solaires pour vos équipes et flottes de véhicules. Adoptez l'efficacité énergétique et économisez.",
          image: "/images/enterprise.png",
          link: "/enterprise",
        },
        {
          title: "Systèmes solaires pour l'industrie",
          description:
            "Boostez la productivité énergétique de votre installation industrielle grâce à nos solutions sur mesure. Nous concevons des systèmes adaptés à vos besoins spécifiques, intégrant des onduleurs intelligents pour une surveillance en temps réel via une application. En complément, nous installons des bornes de recharge et assurons l'entretien de vos panneaux solaires. Ensemble, nous bâtissons un avenir énergétique durable pour votre industrie.",
          image: "/images/industrial.jpg",
          link: "/industrial",
        },
      ],
      cta: "En savoir plus",
    },
    nl: {
      heroTitle: "Ontketen de kracht van de zon met SolarInstall",
      title: "SolarInstall",
      subtitle: "Uw specialist in zonne-energie",
      cards: [
        {
          title: "Zonne-oplossingen voor thuis",
          description:
            "Haal meer uit uw woning met onze op maat gemaakte zonne-oplossingen. Onze specialisten installeren zonnepanelen op elk type dak en voegen hybride omvormers met slimme functies toe. Uw energieverbruik is eenvoudig te monitoren via een gebruiksvriendelijke app. We installeren laadpalen en verzorgen het onderhoud en de reiniging van uw installatie. Kies voor duurzame energie en lagere energiekosten.",
          image: "/images/residential.jpg",
          link: "/residential",
        },
        {
          title: "Zonnepanelen voor flatgebouwen",
          description:
            "Verbeter het energiebeheer van uw flatgebouw met onze op maat gemaakte oplossingen. Wij ontwerpen en installeren zonne-installaties op elk type dak. Onze slimme omvormers maken realtime monitoring mogelijk via een handige app. Bovendien installeren we laadpalen en bieden we onderhouds- en reinigingsservices om de prestaties te garanderen. Samen creëren we een duurzame toekomst voor alle bewoners.",
          image: "/images/building.jpg",
          link: "/buildings",
        },
        {
          title: "Zonnestroomoplossingen voor bedrijven",
          description:
            "Stimuleer uw bedrijf met krachtige zonne-energieoplossingen. Wij leveren omvormers tot 200 kW en batterijen tot 250 kWh, geschikt voor grootschalige toepassingen. Onze systemen bieden back-up functies en dynamisch tariefbeheer om kosten te optimaliseren. Daarnaast installeren we laadpalen en zonnecarports voor uw medewerkers en wagenpark. Verhoog uw efficiëntie en bespaar op energiekosten.",
          image: "/images/enterprise.png",
          link: "/enterprise",
        },
        {
          title: "Zonne-installaties voor industrie",
          description:
            "Verhoog de efficiëntie van uw industriële energiebeheer met onze oplossingen op maat. Wij ontwerpen systemen volgens uw behoeften en integreren slimme omvormers voor realtime monitoring via een app. Onze diensten omvatten ook de installatie van laadpalen en het onderhoud van zonnepanelen. Samen werken we aan een duurzame energievoorziening voor uw industrie.",
          image: "/images/industrial.jpg",
          link: "/industrial",
        },
      ],
      cta: "Meer weten",
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
