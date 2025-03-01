"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/language-provider";

interface Content {
  intro:cardIntro[];
  title: string;
  cards: Card[];
}
interface cardIntro{
  title1:string;
  title2:string;
  title3:string;
  title4:string;
  title5:string;
  text1:string;
  text2:string;  
  text3:string;
  text4:string;
  text5:string;
}
interface Card {
  title: string;
  description: string;
  shortDescription: string;
  image?: string;
  video?: string;
  gif?: string;
  link: string;
}

function HomeDesktop({ content }: { content: Content }) {
  const { title, intro, cards } = content;

  return (
    <div id="content-section" className="">
      {/* Section 1 : Qui sommes-nous ? */}
      <div className="flex flex-col justify-center items-center py-6 bg-[#13331a]">
        <h1 className="text-4xl font-bold text-white">{title}</h1>
        <div className="flex flex-row justify-center items-center gap-4 mt-8">
          <div className="max-w-md">
            <h3 className="text-2xl font-bold text-white">{intro.title1}</h3>
            <p className="text-white mt-4">{intro.text1}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {/* Case 1 */}
            <div className="p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#13331a]">{intro.title2}</h3>
              <p className="text-white mt-2">{intro.text2}</p>
            </div>
            {/* Case 2 */}
            <div className=" p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#13331a]">{intro.title3}</h3>
              <p className="text-white mt-2">{intro.text3}</p>
            </div>
            {/* Case 3 */}
            <div className="p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#13331a]">{intro.title4}</h3>
              <p className="text-white mt-2">{intro.text4}</p>
            </div>
            {/* Case 4 */}
            <div className="p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#13331a]">{intro.title5}</h3>
              <p className="text-white mt-2">{intro.text5}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 : Solutions solaires */}
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
                  {card.image && (
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  )}
                </div>
                <div className="flex flex-col h-full justify-between md:px-4 py-8">
                  <h2 className="text-3xl font-bold text-center text-[#355834]">
                    {card.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-justify">
                    {card.description}
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col h-full justify-between md:px-4 py-8">
                  <h2 className="text-3xl font-bold text-center text-[#355834]">
                    {card.title}
                  </h2>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    {card.description}
                  </p>
                </div>
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  {card.image && (
                    <Image
                      src={card.image}
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
      </div>
    </div>
  );
}
function HomeMobile({ content }: { content: Content }) {
  const { title, cards } = content;

  return (
    <div id="content-section" className="container mx-auto px-4">
      <div className="flex flex-col justify-center items-center mb-7">
        <h1 className="text-lg text-center mb-4 font-bold text-[#13331a]">{title}</h1>
        <Image
          src="/images/illustration-maison.png"
          alt="illustration maison"
          width={300}
          height={300}
          className=""
        />
      </div>

      <div className="grid gap-8 pb-5">
        {cards.map((card, index) => (
          <div key={index} className="grid gap-4 items-center">
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Link href={card.link}>
                {card.image && (
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                )}
              </Link>
            </div>
            <div className="flex flex-col h-full justify-between md:px-4 py-4">
              <p className="text-gray-700 text-center leading-relaxed">
                {card.shortDescription}
              </p>
            </div>
          </div>
        ))}
      </div>
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
      title: "Libérez la puissance du soleil ...",
      intro: {
        title1: "Qui sommes-nous ?",
        text1: "Chez SolarInstall, nous rendons l’énergie solaire accessible à tous. Avec plus de 10 ans d’expérience, nous installons des systèmes solaires performants et durables pour les particuliers et les entreprises. Notre mission : des solutions sur mesure pour un avenir énergétique vert.",
        title2: "Durable et évolutif",
        text2: "Un système intégré pour toutes vos solutions énergétiques, aujourd’hui et demain.",
        title3: "Rendement maximal",
        text3: "Optimisez votre production d’énergie avec notre application intelligente.",
        title4: "Intégration transparente",
        text4: "Des produits conçus pour fonctionner ensemble.",
        title5: "Simplicité",
        text5: "Un seul partenaire pour toutes vos solutions énergétiques.",
      },
      cards: [
        {
          title: "Solutions solaires pour votre domicile",
          description:
            "Transformez votre maison avec nos solutions solaires personnalisées. Nos experts installent des panneaux solaires adaptés à tous les types de toits et intègrent des onduleurs hybrides avec des fonctionnalités de gestion intelligente. Suivez votre consommation énergétique via une application intuitive. Nous installons également des bornes de recharge et assurons le nettoyage et l'entretien de vos équipements. Réduisez vos factures tout en adoptant une énergie durable.",
          shortDescription:
            "Transformez votre maison avec nos solutions solaires et réduisez vos factures.",
          image: "/images/residential.jpg",
          link: "/residential",
        },
      ],
    },
    nl: {
      title: "Ontketen de kracht van de zon met SolarInstall ...",
      intro: {
        title1: "Wie zijn wij?",
        text1: "Bij SolarInstall maken we zonne-energie toegankelijk voor iedereen. Met meer dan 10 jaar ervaring installeren we hoogwaardige en duurzame zonne-energiesystemen voor particulieren en bedrijven. Onze missie: op maat gemaakte oplossingen voor een groene energietoekomst.",
        title2: "Duurzaam en schaalbaar",
        text2: "Een geïntegreerd systeem voor al uw energiebehoeften, vandaag en morgen.",
        title3: "Maximaal rendement",
        text3: "Optimaliseer uw energieproductie met onze intelligente app.",
        title4: "Naadloze integratie",
        text4: "Producten die samenwerken voor een optimaal resultaat.",
        title5: "Eenvoud",
        text5: "Eén partner voor al uw energieoplossingen.",
      },
      cards: [
        {
          title: "Zonne-oplossingen voor thuis",
          description:
            "Haal meer uit uw woning met onze op maat gemaakte zonne-oplossingen. Onze specialisten installeren zonnepanelen op elk type dak en voegen hybride omvormers met slimme functies toe. Uw energieverbruik is eenvoudig te monitoren via een gebruiksvriendelijke app. We installeren laadpalen en verzorgen het onderhoud en de reiniging van uw installatie. Kies voor duurzame energie en lagere energiekosten.",
          shortDescription:
            "Haal meer uit uw woning met onze zonne-oplossingen en lagere energiekosten.",
          image: "/images/residential.jpg",
          link: "/residential",
        },
      ],
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
