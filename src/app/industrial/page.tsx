"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/components/language-provider";
import {PowerCTA, PowerCTAMobile} from "@/components/power-cta";

interface Content {
  title: string;
  subtitle: string;
  cards: Card[];
}

interface Card {
  title: string;
  description: string;
  shortDescription: string;
  image?: string;
  video?: string;
  gif?: string;
  youtube?: string; // Add youtube property
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
                <div className="relative h-[400px] w-[1000] m-4 rounded-lg overflow-hidden">
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
  const { title, subtitle, cards} = content;

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
                  </>
                )}
              </div>
              <div className="flex flex-col h-full justify-between ">
                <h2 className="text-xl m-4 font-bold text-center text-[#355834]">
                  {card.title}
                </h2>
                <p className="text-gray-800 mx-4 text-justify leading-relaxed">
                  {card.shortDescription}
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
      title: "Installation Industrielle Solaire",
      subtitle: "Des solutions sur mesure pour votre industrie",
      cards: [
        {
          title: "Énergie Solaire Industrielle",
          description: "L’énergie solaire industrielle constitue une alternative fiable, économique et respectueuse de l’environnement aux énergies fossiles. Nos solutions sur mesure s’adaptent aux besoins spécifiques de chaque industrie, garantissant une efficacité optimale. Elles permettent de réduire considérablement les coûts énergétiques tout en assurant une alimentation stable et durable.",
          shortDescription: "Une solution verte et rentable pour répondre aux besoins énergétiques industriels. Nos systèmes garantissent une production efficace tout en réduisant les coûts.",
          image: "/images/industrial-roof.jpg",
        },
        {
          title: "Schémas de Branchement",
          description: "Nos schémas de raccordement assurent une conversion optimale de l’énergie solaire en électricité utilisable. Grâce à des onduleurs haute performance et une intégration intelligente, nous maximisons l’efficacité énergétique. Nos systèmes permettent une connexion fluide au réseau électrique et assurent une gestion efficace des flux d’énergie, optimisant ainsi la distribution et la consommation.",
          shortDescription: "Conception avancée pour des installations photovoltaïques performantes. Optimisation de la conversion et de l’intégration au réseau électrique.",
          image: "/images/shema-solaire.png",
        },
        {
          title: "ESS (Load Balancing)",
          description: "Ce système de répartition intelligente stocke l’énergie excédentaire et la redistribue de manière optimale. Grâce à des algorithmes avancés, il équilibre la consommation énergétique en fonction de la demande. Idéal pour les périodes de forte sollicitation, il assure une alimentation stable et réduit les pertes d’énergie.",
          shortDescription: "Optimisation de la consommation énergétique grâce à un stockage intelligent et une redistribution efficace, même en cas de forte demande.",
          image: "/images/EPES233.webp",
        },
        {
          title: "ESS (Unload Balancing)",
          description: "Ce système intelligent permet de gérer efficacement les surplus d’énergie solaire. L’énergie stockée est réinjectée dans le réseau pendant les périodes de faible production, garantissant ainsi une alimentation continue. Des dispositifs de sécurité avancés protègent le système contre les surcharges et assurent une performance fiable à long terme.",
          shortDescription: "Une gestion efficace des surplus d’énergie pour garantir une alimentation continue et sécurisée, avec protection contre les surcharges.",
          image: "/images/EPES233inside.webp",
        },
        {
          title: "EPPS 209",
          description: "Une solution de stockage avancée conçue pour répondre aux exigences des industries modernes. Dotée d’une grande capacité et d’un couplage AC sans arc DC, elle assure un fonctionnement sûr et efficace. Son système de refroidissement liquide actif prolonge la durée de vie des équipements tout en réduisant les coûts de maintenance.",
          shortDescription: "Stockage haute capacité avec couplage AC et refroidissement liquide pour une efficacité et une durabilité maximales.",
          image: "/images/epps-209.jpg",
        },
        {
          title: "H143/197",
          description: "Ce système robuste est conçu pour répondre aux besoins énergétiques les plus exigeants. Grâce à une technologie avancée, il offre une performance stable et durable, même dans des conditions difficiles. Son refroidissement actif permet de maintenir des températures optimales, réduisant ainsi les risques de panne et les coûts de maintenance.",
          shortDescription: "Solution fiable et performante avec refroidissement actif pour garantir une stabilité énergétique même en conditions extrêmes.",
          image: "/images/EPHS143-197.webp",
        },
      ],
    },
    nl: {
      title: "Industriële Zonne-installatie",
      subtitle: "Oplossingen op maat voor uw Industrie",
      cards: [
        {
          title: "Industriële Zonne-energie",
          description: "Industriële zonne-energie biedt een betrouwbaar, kostenefficiënt en milieuvriendelijk alternatief voor traditionele energiebronnen. Onze op maat gemaakte oplossingen zorgen voor maximale efficiëntie en naadloze integratie met bestaande infrastructuur. Door slim energiebeheer helpen we bedrijven hun energiekosten te verlagen en een duurzamere toekomst op te bouwen.",
          shortDescription: "Een groene en voordelige energieoplossing. Onze systemen zorgen voor optimale prestaties en lagere energiekosten.",
          image: "/images/industrial-roof.jpg",
        },
        {
          title: "Aansluitschema's",
          description: "Onze aansluitingsschema’s zijn ontworpen om een optimale omzetting van zonne-energie te garanderen. Door het gebruik van hoogwaardige omvormers en intelligente netintegratie verbeteren we de efficiëntie van grootschalige PV-installaties. Dit resulteert in een stabiele en duurzame energievoorziening met minimale verliezen.",
          shortDescription: "Efficiënte omzetting en integratie in het elektriciteitsnet voor maximale prestaties.",
          image: "/images/shema-solaire.png",
        },
        {
          title: "ESS (Load Balancing)",
          description: "Ons intelligente verdelingssysteem slaat overtollige zonne-energie op en verdeelt deze op het juiste moment. Met geavanceerde algoritmen wordt de energiestroom automatisch aangepast aan de vraag. Dit helpt bedrijven om piekbelastingen beter te beheren en de betrouwbaarheid van hun energievoorziening te verhogen.",
          shortDescription: "Slim energiebeheer voor een stabiele en efficiënte verdeling, zelfs bij hoge vraag.",
          image: "/images/EPES233.webp",
        },
        {
          title: "ESS (Unload Balancing)",
          description: "Dit systeem zorgt voor een efficiënte herverdeling van opgeslagen zonne-energie tijdens periodes van lage productie. Dankzij ingebouwde beschermingsmechanismen worden overbelasting en energieverliezen geminimaliseerd. Zo blijft de energievoorziening stabiel en veilig, met maximale benutting van de opgewekte stroom.",
          shortDescription: "Optimale benutting van overtollige energie en veilige distributie zonder risico op overbelasting.",
          image: "/images/EPES233inside.webp",
        },
        {
          title: "EPPS 209",
          description: "Een robuuste opslagoplossing met hoge capaciteit en AC-koppeling zonder DC-boog. Dankzij actieve vloeistofkoeling blijven de prestaties constant en wordt de levensduur van de installatie verlengd. De eenvoudige installatie en het minimale onderhoud maken het een kosteneffectieve keuze voor energie-intensieve industrieën.",
          shortDescription: "Opslag met hoge capaciteit, AC-koppeling en efficiënte koeling voor duurzame prestaties.",
          image: "/images/epps-209.jpg",
        },
        {
          title: "H143/197",
          description: "Dit krachtige systeem is ontworpen voor industriële toepassingen die een stabiele en betrouwbare energievoorziening vereisen. Het heeft een lange levensduur en biedt uitstekende prestaties, zelfs in extreme omstandigheden. De actieve koeling houdt de temperatuur onder controle, waardoor slijtage en onderhoudskosten worden verminderd.",
          shortDescription: "Robuust en betrouwbaar energiesysteem met geavanceerde koeling voor optimale prestaties.",
          image: "/images/EPHS143-197.webp",
        },
      ],
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