"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/components/language-provider";
import { PowerCTA, PowerCTAMobile } from "@/components/power-cta";

interface Content {
  title: string;
  subtitle: string;
  cards: Card[];
}

interface Card {
  title: string;
  description: string;
  image?: string;
  video?: string;
  gif?: string;
}

function ResidentialDesktop({ content }: { content: Content }) {
  const { title, subtitle, cards } = content;

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="text-xl">{subtitle}</p>
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
                  {card.video ? (
                    <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
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
                      src={card.image||"/public/favicon.png"}
                      alt={card.title}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  )}
                </div>
                <div className="flex flex-col h-full justify-between md:px-4 py-8 ">
                  <h2 className="text-3xl font-bold text-center">
                    {card.title}
                  </h2>
                  <p className="text-gray-800 leading-relaxed text-justify">
                    {card.description}
                  </p>
                  <div></div>
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col h-full justify-between md:px-4 py-8">
                  <h2 className="text-3xl font-bold text-center ">
                    {card.title}
                  </h2>
                  <p className="text-gray-800 leading-relaxed text-justify">
                    {card.description}
                  </p>
                  <div></div>
                </div>
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  {card.video ? (
                      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
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
                      src={card.image||"/public/favicon.png"}
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

const ResidentialMobile = ({ content }: { content: Content }) => {
  const { title, subtitle, cards } = content;

  return (
    <div>
      <div id="content-section" className="container mx-auto px-4">
        <div className="text-center mb-7">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="text-sm text-blue-600">{subtitle}</p>
        </div>

        <div className="grid gap-8 pb-5">
          {cards.map((card, index) => (
            <div key={index} className="grid gap-4 items-center">
              <div className="relative h-[220px] rounded-lg overflow-hidden">
                {card.video ? (
                  <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
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
                    <h2 className="text-xl font-bold text-white text-center">
                      {card.title}
                    </h2>
                  </>
                ) : (
                  <>
                    <Image
                      src={card.image||"/public/favicon.png"}
                      alt={card.title}
                      layout="fill"
                      className="object-cover"
                      priority={index === 0}
                    />
                    <h2 className="text-xl font-bold text-white text-center">
                      {card.title}
                    </h2>
                  </>
                )}
              </div>
              <div className="flex flex-col h-full justify-between ">
                <p className="text-gray-800 text-justify leading-relaxed">
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
};

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
      title: "Installation Solaire Résidentielle",
      subtitle: "Transformez  votre maison en source d'énergie propre et économique",
      cards: [
        {
          title: "Expertise en Installation Solaire",
          description: "Notre équipe d'experts certifiés analyse minutieusement votre toiture pour une installation optimale des panneaux solaires. Nous prenons en compte l'orientation, l'inclinaison et la structure de votre toit pour maximiser votre production d'énergie. Grâce à nos technologies de pointe et notre savoir-faire, nous garantissons une intégration esthétique qui respecte l'architecture de votre maison tout en optimisant les performances énergétiques.",
          image: "/images/examplerooftop.png"
        },
        {
          title: "Mobilité Électrique Intelligente",
          description: "Passez à la mobilité durable avec nos solutions de recharge intelligentes. Notre borne de recharge connectée s'adapte automatiquement à votre production solaire pour privilégier la charge de votre véhicule aux heures les plus favorables. Profitez d'une interface intuitive pour programmer vos recharges, suivre votre consommation et optimiser vos coûts. Compatible avec tous les véhicules électriques, notre solution vous garantit une recharge rapide et sécurisée.",
          image: "/images/charger.jpg"
        },
        {
          title: "Monitoring Intelligent",
          description: "Prenez le contrôle total de votre installation avec notre système de monitoring dernière génération. Notre application vous offre une vision claire et détaillée de votre production solaire, votre consommation électrique et vos économies réalisées. Visualisez en temps réel l'impact positif de votre installation sur l'environnement, recevez des notifications personnalisées et optimisez votre autoconsommation grâce à nos algorithmes d'intelligence artificielle.",
          video: "/images/videoonduleur.mp4"
        },
        {
          title: "Solution de Stockage Avancée",
          description: "Maximisez votre indépendance énergétique avec nos solutions de stockage innovantes. Nos batteries intelligentes stockent votre surplus d'énergie solaire pendant la journée pour la restituer quand vous en avez besoin. Grâce à notre technologie de gestion intelligente, votre système anticipe vos besoins énergétiques et optimise automatiquement l'utilisation de l'énergie stockée, vous garantissant une autonomie maximale et des économies accrues.",
          gif: "/images/battery-animation.gif"
        }
      ],
      cta: {
        title: "Prêt pour l'énergie solaire?",
        description: "Demandez un devis gratuit et personnalisé dès maintenant.",
        button: "Demander un Devis"
      }
    },
    nl: {
      title: "Residentiële Zonne-installatie", 
      subtitle: "Transformeer uw huis in een bron van schone en betaalbare energie",
      cards: [
        {
          title: "Expertise in Zonne-installaties",
          description: "Ons team van gecertificeerde experts analyseert zorgvuldig uw dak voor een optimale installatie van zonnepanelen. We houden rekening met de oriëntatie, hellingshoek en structuur van uw dak om uw energieproductie te maximaliseren. Dankzij onze geavanceerde technologieën en expertise garanderen we een esthetische integratie die de architectuur van uw huis respecteert en tegelijkertijd de energieprestaties optimaliseert.",
          image: "/images/examplerooftop.png"
        },
        {
          title: "Slimme Elektrische Mobiliteit",
          description: "Stap over op duurzame mobiliteit met onze slimme oplaadoplossingen. Ons connected laadstation past zich automatisch aan uw zonne-energieproductie aan om uw voertuig op de meest gunstige momenten op te laden. Profiteer van een intuïtieve interface om uw oplaadbeurten te programmeren, uw verbruik te volgen en uw kosten te optimaliseren. Compatibel met alle elektrische voertuigen, onze oplossing garandeert u een snelle en veilige oplaadbeurt.",
          image: "/images/charger.jpg"
        },
        {
          title: "Intelligente Monitoring",
          description: "Neem de volledige controle over uw installatie met ons nieuwste monitoring systeem. Onze applicatie biedt u een helder en gedetailleerd overzicht van uw zonne-energieproductie, elektriciteitsverbruik en gerealiseerde besparingen. Bekijk in realtime de positieve impact van uw installatie op het milieu, ontvang gepersonaliseerde meldingen en optimaliseer uw eigen verbruik dankzij onze AI-algoritmes.",
          video: "/images/videoonduleur.mp4"
        },
        {
          title: "Geavanceerde Opslagoplossing",
          description: "Maximaliseer uw energieonafhankelijkheid met onze innovatieve opslagoplossingen. Onze slimme batterijen slaan uw overtollige zonne-energie overdag op om deze te gebruiken wanneer u deze nodig heeft. Dankzij onze slimme beheertechnologie anticipeert uw systeem op uw energiebehoeften en optimaliseert het automatisch het gebruik van opgeslagen energie, waardoor u maximale autonomie en verhoogde besparingen garandeert.",
          gif: "/images/battery-animation.gif"
        }
      ],
      cta: {
        title: "Klaar voor zonne-energie?",
        description: "Vraag nu een gratis en persoonlijke offerte aan.",
        button: "Contacteer ons"
      }
    }
  };

  if (!mounted) return null;

  const currentContent = content[language];
  return isDesktop ? (
    <ResidentialDesktop content={currentContent} />
  ) : (
    <ResidentialMobile content={currentContent} />
  );
}
