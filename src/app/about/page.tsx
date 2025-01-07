"use client";

import { useLanguage } from "@/components/language-provider";
import { Sun, Users, Award, Leaf } from "lucide-react";
import Image from "next/image";

export default function About() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "À Propos de SolarStock",
      description: "Votre partenaire de confiance pour l'énergie solaire",
      mission: "Notre mission",
      missionText:
        "Chez SolarStock, notre mission est de rendre l'énergie solaire accessible à tous. Nous nous engageons à fournir des solutions d'énergie solaire de haute qualité et durables pour les particuliers et les entreprises.",
      experience: "Notre expérience",
      experienceText:
        "Avec plus de 10 ans d'expérience dans le domaine de l'énergie solaire, notre équipe d'experts qualifiés a installé avec succès des milliers de systèmes solaires à travers le pays. Notre expertise couvre tous les aspects de l'énergie solaire, de la conception initiale à l'installation et à la maintenance à long terme.",
      commitment: "Notre engagement",
      commitmentText:
        "Nous nous engageons à utiliser les meilleures pratiques de l'industrie et les technologies les plus récentes pour garantir que chaque installation est optimisée pour une efficacité et une durabilité maximales.",
      values: "Nos valeurs",
      valuesItems: [
        {
          title: "Innovation",
          description:
            "Nous restons à la pointe de la technologie solaire pour offrir les meilleures solutions à nos clients.",
          icon: Sun,
        },
        {
          title: "Expertise",
          description:
            "Notre équipe hautement qualifiée garantit une installation et un service de qualité supérieure.",
          icon: Users,
        },
        {
          title: "Qualité",
          description:
            "Nous n'utilisons que des composants et des matériaux de la plus haute qualité pour nos installations.",
          icon: Award,
        },
        {
          title: "Durabilité",
          description:
            "Notre engagement envers l'environnement guide chacune de nos actions et décisions.",
          icon: Leaf,
        },
      ],
      stats: {
        title: "SolarStock en chiffres",
        items: [
          { value: "10k+", label: "Installations réalisées" },
          { value: "50MW+", label: "Capacité totale installée" },
          { value: "99%", label: "Taux de satisfaction client" },
          {
            value: "30%",
            label: "Économies moyennes sur les factures d'électricité",
          },
        ],
      },
    },
    nl: {
      title: "Over SolarStock",
      description: "Uw betrouwbare partner voor zonne-energie",
      mission: "Onze missie",
      missionText:
        "Bij SolarStock is onze missie om zonne-energie toegankelijk te maken voor iedereen. We zetten ons in om hoogwaardige en duurzame zonne-energieoplossingen te leveren voor particulieren en bedrijven.",
      experience: "Onze ervaring",
      experienceText:
        "Met meer dan 10 jaar ervaring in de zonne-energiesector heeft ons team van gekwalificeerde experts met succes duizenden zonne-energiesystemen door het hele land geïnstalleerd. Onze expertise omvat alle aspecten van zonne-energie, van het initiële ontwerp tot installatie en langdurig onderhoud.",
      commitment: "Onze toewijding",
      commitmentText:
        "We zetten ons in om de beste praktijken in de industrie en de nieuwste technologieën te gebruiken om ervoor te zorgen dat elke installatie is geoptimaliseerd voor maximale efficiëntie en duurzaamheid.",
      values: "Onze waarden",
      valuesItems: [
        {
          title: "Innovatie",
          description:
            "We blijven voorop lopen in zonne-technologie om de beste oplossingen aan onze klanten te bieden.",
          icon: Sun,
        },
        {
          title: "Expertise",
          description:
            "Ons hoogopgeleide team zorgt voor installatie en service van topkwaliteit.",
          icon: Users,
        },
        {
          title: "Kwaliteit",
          description:
            "We gebruiken alleen componenten en materialen van de hoogste kwaliteit voor onze installaties.",
          icon: Award,
        },
        {
          title: "Duurzaamheid",
          description:
            "Onze toewijding aan het milieu stuurt al onze acties en beslissingen.",
          icon: Leaf,
        },
      ],
      stats: {
        title: "SolarStock in cijfers",
        items: [
          { value: "10k+", label: "Voltooide installaties" },
          { value: "50MW+", label: "Totale geïnstalleerde capaciteit" },
          { value: "99%", label: "Klanttevredenheid" },
          {
            value: "30%",
            label: "Gemiddelde besparingen op elektriciteitsrekeningen",
          },
        ],
      },
    },
  };

  const {
    title,
    description,
    mission,
    missionText,
    experience,
    experienceText,
    commitment,
    commitmentText,
    values,
    valuesItems,
    stats,
  } = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900 dark:to-orange-900">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-center">{title}</h1>
        <p className="text-xl mb-12 text-center max-w-3xl mx-auto">
          {description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Sun className="w-6 h-6 mr-2 text-yellow-500" />
              {mission}
            </h2>
            <p>{missionText}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Users className="w-6 h-6 mr-2 text-yellow-500" />
              {experience}
            </h2>
            <p>{experienceText}</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Award className="w-6 h-6 mr-2 text-yellow-500" />
            {commitment}
          </h2>
          <p>{commitmentText}</p>
        </div>

        <h2 className="text-3xl font-semibold mb-6 text-center">{values}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {valuesItems.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            >
              <item.icon className="w-12 h-12 mb-4 text-yellow-500" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            {stats.title}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.items.map((item, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl font-bold text-yellow-500">
                  {item.value}
                </p>
                <p className="text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 relative h-64 rounded-lg overflow-hidden">
          <Image
            src="/images/solar-team.jpg"
            alt="SolarStock Team"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <p className="text-white text-2xl font-semibold">
              Notre équipe dévouée
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
