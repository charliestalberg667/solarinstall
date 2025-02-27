"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/components/language-provider";
import {PowerCTA, PowerCTAMobile} from "@/components/power-cta";

interface Content {
  title: string;
  subtitle: string;
  cards: Card[];
  cta: CTA;
}

interface Card {
  title: string;
  description: string;
  image?: string;
  video?: string;
  gif?: string;
  youtube?: string; // Add youtube property
}

interface CTA {
  title: string;
  description: string;
  button: string;
}

function BuildingsDesktop({ content }: { content: Content }) {
  const { title, subtitle, cards } = content;

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2 text-[#355834]">{title}</h1>
        <p className="text-xl text-[#43964c]">{subtitle}</p>
      </div>

      <div className="grid gap-8 pb-5">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`grid md:grid-cols-2 items-center shadow-[0_5px_12px_rgba(0,_0,_0,_0.05)] bg-white rounded-lg ${
              index % 2 === 0 ? "md:grid-flow-col" : "md:grid-flow-col-dense"
            }`}
          >
            {index % 2 === 0 ? (
              <>
                <div className="relative h-[400px] m-4 rounded-lg overflow-hidden">
                  {card.youtube ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${card.youtube}`}
                      title={card.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    ></iframe>
                  ) : card.video ? (
                    <video
                      autoPlay
                      loop
                      muted
                      className="absolute inset-0 w-full h-full object-cover"
                    >
                      <source src={card.video} type="video/mp4" />
                    </video>
                  ) : card.gif ? (
                    <Image
                      src={card.gif}
                      alt={card.title}
                      fill
                      className="object-cover"
                      priority={index === 0}
                      unoptimized
                    />
                  ) : (
                    <Image
                      src={card.image || "/public/favicon.png"}
                      alt={card.title}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  )}
                </div>
                <div className="flex flex-col h-full justify-between md:px-8 py-8 ">
                  <div>
                    <h2 className="text-2xl font-bold text-center text-[#355834]">
                      {card.title}
                    </h2>
                  </div>
                  <p className="text-gray-800 leading-relaxed text-justify">
                    {card.description}
                  </p>
                  <div></div>
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col h-full justify-between md:px-8 py-8">
                  <div>
                    <h2 className="text-2xl font-bold text-center text-[#355834]">
                      {card.title}
                    </h2>
                  </div>
                  <p className="text-gray-800 leading-relaxed text-justify">
                    {card.description}
                  </p>
                  <div></div>
                </div>
                <div className="relative h-[400px] m-4 rounded-lg overflow-hidden">
                  {card.youtube ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${card.youtube}`}
                      title={card.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    ></iframe>
                  ) : card.video ? (
                    <video
                      autoPlay
                      loop
                      muted
                      className="absolute inset-0 w-full h-full object-cover"
                    >
                      <source src={card.video} type="video/mp4" />
                    </video>
                  ) : card.gif ? (
                    <Image
                      src={card.gif}
                      alt={card.title}
                      fill
                      className="object-cover"
                      priority={index === 0}
                      unoptimized
                    />
                  ) : (
                    <Image
                      src={card.image || "/public/favicon.png"}
                      alt={card.title}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  )}
                </div>
              </>
            )}
          </div>
        ))}
        <PowerCTA />
      </div>
    </div>
  );
}

function BuildingsMobile({ content }: { content: Content }) {
  const { title, subtitle, cards } = content;

  return (
    <div>
      <div id="content-section" className="container mx-auto px-4">
        <div className="text-center mb-7">
          <h1 className="text-2xl font-bold text-[#355834]">{title}</h1>
          <p className="text-sm text-[#43964c]">{subtitle}</p>
        </div>

        <div className="grid gap-8 pb-5">
          {cards.map((card, index) => (
            <div key={index} className="grid gap-4 items-center shadow-[0_10px_25px_rgba(0,_0,_0,_0.1)] bg-white rounded-lg">
              <div className="relative h-[220px] rounded-lg overflow-hidden">
                {card.youtube ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${card.youtube}`}
                    title={card.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                ) : card.video ? (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src={card.video} type="video/mp4" />
                  </video>
                ) : card.gif ? (
                  <>
                    <Image
                      src={card.gif}
                      alt={card.title}
                      layout="fill"
                      className="object-cover"
                      priority={index === 0}
                      unoptimized
                    />
                    <h2 className="text-xl font-bold text-[#355834] text-center">
                      {card.title}
                    </h2>
                  </>
                ) : (
                  <>
                    <Image
                      src={card.image || "/public/favicon.png"}
                      alt={card.title}
                      layout="fill"
                      className="object-cover"
                      priority={index === 0}
                    />
                    <h2 className="text-xl font-bold text-[#355834] text-center">
                      {card.title}
                    </h2>
                  </>
                )}
              </div>
              <div className="flex flex-col h-full justify-between ">
                <h2 className="text-xl my-4 font-bold text-[#355834] text-center">
                  {card.title}
                </h2>
                <p className="text-gray-800 mx-4 text-justify leading-relaxed">
                  {card.description}
                </p>
                <div className="flex mt-4 justify-center">
                  {/* Additional content could go here */}
                </div>
              </div>
            </div>
          ))}
          <PowerCTAMobile />
        </div>
      </div>
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
      title: "Solution solaire",
      subtitle: "Des solutions sur mesure pour votre industrie",
      cards: [
        {
          title: "Tous types de toits",
          description:
            "Nos experts installent des panneaux solaires sur tout type de toit. Que vous ayez un toit plat, incliné ou complexe, nous avons la solution adaptée à votre situation. Nous utilisons des technologies de pointe pour garantir une intégration parfaite et esthétique, tout en maximisant la production d'énergie. Notre équipe qualifiée assure une installation rapide et efficace, en minimisant les perturbations pour les occupants de l'immeuble. Faites confiance à notre expertise pour une solution énergétique durable et rentable.",
          image: "/images/roof-installation.jpg",
        },
        {
          title: "Borne de recharge universelle",
          description:
            "Rechargez votre véhicule électrique efficacement avec nos bornes de recharge universelles. Optimisées pour un usage domestique, elles sont compatibles avec tous les modèles de voitures électriques et hybrides rechargeables. Nos bornes offrent une charge rapide, sécurisée et économique, tout en s'intégrant parfaitement à votre installation solaire. Profitez d'une solution de recharge pratique et fiable, qui vous permet de maximiser vos économies d'énergie et de réduire votre empreinte carbone. Nos experts vous accompagnent dans le choix et l'installation de la borne la mieux adaptée à vos besoins.",
          image: "/images/charger.jpg",
        },
        {
          title: "Surveillance en temps réel",
          description:
            "Gardez le contrôle sur votre consommation d'énergie grâce à notre plateforme de surveillance intuitive. Suivez votre production d'énergie solaire en temps réel grâce à des graphiques détaillés et des alertes personnalisées. Accédez à des conseils pour optimiser votre usage énergétique et maximiser vos économies. Que vous soyez chez vous ou à l'autre bout du monde, notre application mobile et web vous permet de surveiller votre installation solaire à tout moment. Prenez des décisions éclairées pour un avenir plus durable et économisez sur vos factures d'énergie.",
          image: "/images/applivoltek.png",
        },
        {
          title: "ESS",
          description:
            "Il offre une expansion flexible, une longue durée de vie et des fonctionnalités de sécurité avancées, y compris une surveillance intelligente via le cloud 24/7. Parfait pour un stockage d'énergie fiable et évolutif en Europe. Le système est conçu pour s'adapter aux besoins croissants de votre entreprise, avec une maintenance simplifiée et une performance optimale assurée par un refroidissement actif par liquide.",
          image: "/images/EPES233.webp",
        },
        {
          title: "ESP",
          description:
            "La solution de stockage d'énergie tout-en-un est préassemblée pour une installation facile et offre des performances élevées grâce à la technologie PCS avancée et au couplage AC sans arc DC. Avec une possibilité d'expansion flexible et un faible coût initial, le système peut s'adapter aux besoins croissants. Le refroidissement actif par liquide (chauffage) et une température de fonctionnement optimale assurent une longue durée de vie de plus de 8000 cycles, simplifiant ainsi la maintenance.",
          image: "/images/EPES233inside.webp",
        },
      ],
      cta: {
        title: "Plus d'informations",
        description:
          "Contactez-nous pour un devis gratuit et personnalisé. Notre équipe d'experts est à votre disposition pour répondre à toutes vos questions et vous accompagner dans votre projet d'installation solaire. Ensemble, construisons un avenir plus vert et plus économique.",
        button: "Contact",
      },
    },
    nl: {
      title: "Zonne-installatie",
      subtitle: "Oplossingen op maat voor uw Industrie",
      cards: [
        {
          title: "Alle soorten daken",
          description:
            "Onze experts installeren zonnepanelen op elk type dak. Of u nu een plat, schuin of complex dak heeft, wij hebben de oplossing die bij uw situatie past. Wij maken gebruik van geavanceerde technologieën om een perfecte en esthetische integratie te garanderen, terwijl we de energieproductie maximaliseren. Ons gekwalificeerde team zorgt voor een snelle en efficiënte installatie, met minimale verstoring voor de bewoners van het gebouw. Vertrouw op onze expertise voor een duurzame en rendabele energieoplossing.",
          image: "/images/roof-installation.jpg",
        },
        {
          title: "Universele laadpaal",
          description:
            "Laad uw elektrische voertuig efficiënt op met onze universele laadpalen. Geoptimaliseerd voor thuisgebruik, zijn ze compatibel met alle modellen elektrische en plug-in hybride voertuigen. Onze laadpalen bieden een snelle, veilige en economische oplaadoplossing, die perfect integreert met uw zonne-installatie. Profiteer van een handige en betrouwbare oplaadoplossing, waarmee u uw energiebesparingen maximaliseert en uw ecologische voetafdruk verkleint. Onze experts helpen u bij het kiezen en installeren van de laadpaal die het beste bij uw behoeften past.",
          image: "/images/charger.jpg",
        },
        {
          title: "Realtime monitoring",
          description:
            "Houd controle over uw energieverbruik met ons intuïtieve monitoringplatform. Volg uw zonne-energieproductie in realtime met gedetailleerde grafieken en gepersonaliseerde meldingen. Krijg toegang tot advies om uw energiegebruik te optimaliseren en uw besparingen te maximaliseren. Of u nu thuis bent of aan de andere kant van de wereld, onze mobiele en webapplicatie stelt u in staat om uw zonne-installatie op elk moment te monitoren. Neem weloverwogen beslissingen voor een duurzamere toekomst en bespaar op uw energierekeningen.",
          image: "/images/applivoltek.png",
        },
        {
          title: "ESS",
          description:
            "Het biedt flexibele uitbreiding, een lange levensduur en geavanceerde veiligheidsfuncties, waaronder intelligente 24/7 cloudbewaking. Perfect voor betrouwbare en schaalbare energieopslag in Europa. Het systeem is ontworpen om aan de groeiende behoeften van uw bedrijf te voldoen, met vereenvoudigd onderhoud en optimale prestaties dankzij actieve vloeistofkoeling.",
          image: "/images/EPES233.webp",
        },
        {
          title: "ESP",
          description:
            "De All-in-One energieopslagoplossing is vooraf gemonteerd voor eenvoudige installatie en biedt hoge prestaties dankzij de geavanceerde PCS-technologie en AC-koppeling zonder DC-boog. Met een flexibele uitbreidingsmogelijkheid en lage initiële kosten kan het systeem worden aangepast aan groeiende behoeften. De actieve vloeistofkoeling (verwarming) en een optimale bedrijfstemperatuur zorgen voor een lange levensduur van meer dan cycli, wat onderhoud eenvoudig maakt.",
          image: "/images/EPES233inside.webp",
        },
      ],
      cta: {
        title: "Meer informatie",
        description:
          "Neem contact met ons op voor een gratis en persoonlijke offerte. Ons team van experts staat klaar om al uw vragen te beantwoorden en u te begeleiden bij uw zonne-installatieproject. Samen bouwen we aan een groenere en economischere toekomst.",
        button: "Contact",
      },
    },
  };

  if (!mounted) return null;

  const currentContent = content[language];
  return isDesktop ? (
    <BuildingsDesktop content={currentContent} />
  ) : (
    <BuildingsMobile content={currentContent} />
  );
}