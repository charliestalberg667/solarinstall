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
      title: "Installation Solaire",
      subtitle: "Solutions solaires innovantes et sur mesure pour votre foyer.",
      cards: [
        {
          title: "Installation sur tous les toits",
          description:
            "Nos experts qualifiés réalisent des installations solaires adaptées à chaque configuration de toit, qu'il soit plat, incliné ou de forme complexe. Nous garantissons une intégration parfaite et performante, en utilisant des technologies de pointe pour maximiser la production d'énergie tout en respectant l'intégrité de votre toiture. Avec nous, vous bénéficiez d'une solution clé en main, de l'étude de faisabilité à la mise en service.",
          image: "/images/examplerooftop.png",
        },
        {
          title: "Borne de recharge universelle",
          description:
            "Nos bornes de recharge sont compatibles avec tous les modèles de voitures électriques et hybrides rechargeables. Elles offrent une charge rapide, sécurisée et économique, tout en s'intégrant parfaitement à votre installation solaire. Grâce à notre système, vous pouvez recharger votre véhicule en toute simplicité, même pendant les heures creuses, pour optimiser vos économies d'énergie.",
          image: "/images/charger.jpg",
        },
        {
          title: "Suivi en temps réel",
          description:
            "Notre plateforme de surveillance vous permet de suivre en temps réel votre production d'énergie solaire et votre consommation électrique. Visualisez des graphiques détaillés, recevez des alertes personnalisées et accédez à des conseils pour optimiser votre usage énergétique. Que vous soyez chez vous ou à l'autre bout du monde, gardez un œil sur votre installation solaire grâce à notre application mobile et web.",
          video: "/images/videoonduleur.mp4",
        },
        {
          title: "Suivi en temps réel",
          description:
              "Notre plateforme de surveillance vous permet de suivre en temps réel votre production d'énergie solaire et votre consommation électrique. Visualisez des graphiques détaillés, recevez des alertes personnalisées et accédez à des conseils pour optimiser votre usage énergétique. Que vous soyez chez vous ou à l'autre bout du monde, gardez un œil sur votre installation solaire grâce à notre application mobile et web.",
          video: "/images/videoonduleur.mp4",
        },
      ],
      cta: {
        title: "Prêt pour l'énergie solaire?",
        description:
          "Demandez un devis gratuit et personnalisé dès maintenant.",
        button: "Demander un Devis",
      },
    },
    nl: {
      title: "Zonne-installatie",
      subtitle: "Ontdek op maat gemaakte zonne-oplossingen voor uw woning.",
      cards: [
        {
          title: "Geschikt voor alle daken",
          description:
            "Onze gecertificeerde experts installeren zonnepanelen op elk type dak, of het nu plat, schuin of complex is. Wij zorgen voor een perfecte en esthetische integratie, terwijl we de energieproductie voor uw huis optimaliseren. Met onze oplossingen profiteert u van een naadloze installatie, van haalbaarheidsstudie tot inbedrijfstelling.",
          image: "/images/examplerooftop.png",
        },
        {
          title: "Universele laadpaal",
          description:
            "Onze laadpalen zijn geschikt voor alle modellen elektrische voertuigen en bieden een veilige, snelle en economische oplaadoplossing. Ze integreren perfect met uw zonne-installatie, zodat u uw voertuig eenvoudig kunt opladen, zelfs tijdens daluren, om uw energiebesparingen te maximaliseren.",
          image: "/images/charger.jpg",
        },
        {
          title: "Realtime monitoring",
          description:
            "Met ons intuïtieve monitoringplatform kunt u in realtime uw zonne-energieproductie en verbruik volgen. Bekijk gedetailleerde grafieken, ontvang gepersonaliseerde meldingen en krijg toegang tot advies om uw energiegebruik te optimaliseren. Of u nu thuis bent of aan de andere kant van de wereld, houd uw zonne-installatie in de gaten met onze mobiele en webapplicatie.",
          video: "/images/videoonduleur.mp4",
        },
        {
          title: "Realtiojp^pk^pkme monitoring",
          description:
              "Met ons intuïtieve monitoringplatform kunt u in realtime uw zonne-energieproductie en verbruik volgen. Bekijk gedetailleerde grafieken, ontvang gepersonaliseerde meldingen en krijg toegang tot advies om uw energiegebruik te optimaliseren. Of u nu thuis bent of aan de andere kant van de wereld, houd uw zonne-installatie in de gaten met onze mobiele en webapplicatie.",
          video: "/images/videoonduleur.mp4",
        },

      ],
      cta: {
        title: "Klaar voor zonne-energie?",
        description: "Vraag nu een gratis en persoonlijke offerte aan.",
        button: "Contacteer ons",
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
