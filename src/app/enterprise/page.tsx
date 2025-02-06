"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/components/language-provider";
import { PowerCTAEnterprise } from "@/components/power-cta-enterprise";
import { PowerCTAMobile } from "@/components/power-cta";

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

function EnterpriseDesktop({ content }: { content: Content }) {
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
                  <p className="text-gray-600 leading-relaxed text-justify">
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
                  <p className="text-gray-600 leading-relaxed text-justify">
                    {card.description}
                  </p>
                  <div></div>
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
        <PowerCTAEnterprise />
      </div>
    </div>
  );
}

function EnterpriseMobile({ content }: { content: Content }) {
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
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  layout="fill"
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4">
                  <h2 className="text-xl font-bold text-white text-center">
                    {card.title}
                  </h2>
                </div>
              </div>
              <div className="flex flex-col h-full justify-between px-4 py-4">
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
}

export default function Enterprise() {
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
      title: "Installation Solaire pour entreprise",
      subtitle: "Solutions sur mesure pour votre entreprise",
      cards: [
        {
          title: "Tous types de toitures",
          description:
            "Nos experts installent des panneaux solaires sur tout type de toit. Que vous ayez un toit plat, incliné ou complexe, nous avons la solution adaptée à votre situation. Nous utilisons des matériaux de haute qualité pour garantir la durabilité et l'efficacité de vos installations. Nos équipes sont formées pour travailler dans des conditions variées et s'assurer que chaque projet est réalisé avec précision et soin. De plus, nous offrons des services de maintenance réguliers pour assurer le bon fonctionnement de vos panneaux solaires sur le long terme. ",
          image: "/images/roof-installation.jpg",
        },
        {
          title: "Borne de recharge universelle",
          description:
            "Rechargez votre véhicule électrique efficacement avec nos bornes de recharge universelles. Optimisées pour une utilisation domestique, nos bornes sont compatibles avec tous les modèles de véhicules électriques. Elles sont conçues pour être faciles à installer et à utiliser, avec des options de charge rapide pour vous permettre de reprendre la route en un rien de temps. Nos bornes de recharge sont également équipées de fonctionnalités de sécurité avancées pour protéger votre véhicule et votre maison. Nous proposons des solutions personnalisées pour répondre à vos besoins spécifiques et maximiser l'efficacité de votre système de recharge. ",
          image: "/images/charger.jpg",
        },
        {
          title: "Suivi en temps réel",
          description:
            "Gardez le contrôle de votre consommation d'énergie avec notre plateforme de surveillance intuitive. Suivez votre production d'énergie solaire en temps réel grâce à des graphiques détaillés et des rapports personnalisés. Notre plateforme vous permet de détecter rapidement toute anomalie et de prendre des mesures correctives pour optimiser votre production. Vous pouvez également comparer votre performance avec des données historiques et des benchmarks pour évaluer l'efficacité de votre installation. De plus, notre service client est disponible 24/7 pour vous assister en cas de besoin et répondre à toutes vos questions. ",
          image: "/images/applivoltek.png",
        },
      ],
      cta: {
        title: "Plus d'informations",
        description: "Contactez-nous pour un devis gratuit.",
        button: "Contact",
      },
    },
    nl: {
      title: "Zonne-installatie voor bedrijven",
      subtitle: "Oplossingen op maat voor uw bedrijf",
      cards: [
        {
          title: "Alle soorten daken",
          description:
            "Onze experts installeren zonnepanelen op elk type dak. Of u nu een plat, schuin of complex dak heeft, wij hebben de oplossing die bij uw situatie past. We gebruiken hoogwaardige materialen om de duurzaamheid en efficiëntie van uw installaties te garanderen. Onze teams zijn getraind om in verschillende omstandigheden te werken en ervoor te zorgen dat elk project nauwkeurig en zorgvuldig wordt uitgevoerd. Bovendien bieden we regelmatige onderhoudsdiensten aan om ervoor te zorgen dat uw zonnepanelen op de lange termijn goed blijven functioneren. ",
          image: "/images/roof-installation.jpg",
        },
        {
          title: "Universele laadpaal",
          description:
            "Laad uw elektrische voertuig efficiënt op met onze universele laadpalen. Geoptimaliseerd voor thuisgebruik, zijn onze laadpalen compatibel met alle modellen elektrische voertuigen. Ze zijn ontworpen om eenvoudig te installeren en te gebruiken, met opties voor snel opladen zodat u in een mum van tijd weer op weg kunt. Onze laadpalen zijn ook uitgerust met geavanceerde veiligheidsfuncties om uw voertuig en uw huis te beschermen. We bieden op maat gemaakte oplossingen om aan uw specifieke behoeften te voldoen en de efficiëntie van uw laadsysteem te maximaliseren. ",
          image: "/images/charger.jpg",
        },
        {
          title: "Realtime monitoring",
          description:
            "Houd controle over uw energieverbruik met ons intuïtieve monitoringplatform. Volg uw zonne-energieproductie in realtime met gedetailleerde grafieken en gepersonaliseerde rapporten. Ons platform stelt u in staat om snel eventuele afwijkingen te detecteren en corrigerende maatregelen te nemen om uw productie te optimaliseren. U kunt ook uw prestaties vergelijken met historische gegevens en benchmarks om de efficiëntie van uw installatie te evalueren. Bovendien is onze klantenservice 24/7 beschikbaar om u te helpen en al uw vragen te beantwoorden. ",
          image: "/images/applivoltek.png",
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
    <EnterpriseDesktop content={currentContent} />
  ) : (
    <EnterpriseMobile content={currentContent} />
  );
}
