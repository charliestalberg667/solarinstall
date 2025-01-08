"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/components/language-provider";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Sun,
  Zap,
  Battery,
  Wrench,
  ChevronDown,
  ChevronUp,
  Check,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

export default function Services() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "Nos Services Solaires Complets",
      description:
        "Découvrez notre gamme complète de services d'installation de systèmes solaires, conçus pour transformer votre consommation d'énergie et réduire votre empreinte carbone",
      learnMore: "En savoir plus",
      collapse: "Réduire",
      efficiency: "Efficacité",
      costSaving: "Économies",
      ecoFriendly: "Écologique",
      services: [
        {
          title: "Installation de Panneaux Solaires de Pointe",
          description:
            "Nous installons des panneaux solaires de haute qualité pour maximiser votre production d'énergie et réduire vos factures d'électricité.",
          icon: Sun,
          image: "/images/solar-panel-installation.jpg",
          efficiency: 95,
          costSaving: 70,
          ecoFriendly: 100,
          details: [
            "Évaluation personnalisée de votre propriété pour une installation optimale",
            "Conception sur mesure de votre système solaire pour une efficacité maximale",
            "Installation professionnelle par des experts certifiés et expérimentés",
            "Utilisation de panneaux solaires de dernière génération pour une performance supérieure",
            "Garantie de performance de 25 ans et suivi post-installation détaillé",
          ],
          cta: "Demander un devis gratuit",
        },
        {
          title: "Installation d'Onduleurs Intelligents",
          description:
            "Nos onduleurs de pointe convertissent efficacement l'énergie solaire en électricité utilisable, tout en optimisant la performance de votre système.",
          icon: Zap,
          image: "/images/smart-inverter.jpg",
          efficiency: 98,
          costSaving: 60,
          ecoFriendly: 90,
          details: [
            "Sélection d'onduleurs adaptés à votre système pour une conversion d'énergie optimale",
            "Installation et configuration expertes pour une intégration parfaite",
            "Optimisation avancée de la conversion d'énergie pour maximiser le rendement",
            "Surveillance en temps réel de la production avec des rapports détaillés",
            "Maintenance préventive et mises à jour logicielles pour une longévité accrue",
          ],
          cta: "Découvrir nos onduleurs",
        },
        {
          title: "Systèmes de Stockage d'Énergie Révolutionnaires",
          description:
            "Optimisez votre consommation avec nos solutions de stockage d'énergie avancées, vous permettant d'utiliser l'énergie solaire même la nuit.",
          icon: Battery,
          image: "/images/energy-storage.jpg",
          efficiency: 90,
          costSaving: 80,
          ecoFriendly: 95,
          details: [
            "Analyse approfondie de vos besoins en stockage d'énergie",
            "Installation de batteries de haute capacité et longue durée",
            "Intégration transparente avec votre système solaire existant",
            "Gestion intelligente de l'énergie pour une utilisation optimale",
            "Augmentation significative de votre indépendance énergétique",
          ],
          cta: "Explorer les options de stockage",
        },
        {
          title: "Maintenance Proactive et Réparation Experte",
          description:
            "Nous offrons des services de maintenance régulière et de réparation pour garantir les performances optimales de votre système à long terme.",
          icon: Wrench,
          image: "/images/solar-maintenance.jpg",
          efficiency: 99,
          costSaving: 50,
          ecoFriendly: 85,
          details: [
            "Inspections régulières programmées pour prévenir les problèmes",
            "Nettoyage et entretien des panneaux solaires pour maintenir l'efficacité",
            "Diagnostics avancés et dépannage rapide en cas de problème",
            "Réparations rapides et efficaces par des techniciens qualifiés",
            "Mises à jour du système pour une performance constamment optimale",
          ],
          cta: "Planifier un entretien",
        },
      ],
    },
    nl: {
      title: "Onze Uitgebreide Zonne-energiediensten",
      description:
        "Ontdek ons complete assortiment van installatiediensten voor zonne-energiesystemen, ontworpen om uw energieverbruik te transformeren en uw koolstofvoetafdruk te verkleinen",
      learnMore: "Meer informatie",
      collapse: "Inklappen",
      efficiency: "Efficiëntie",
      costSaving: "Kostenbesparing",
      ecoFriendly: "Milieuvriendelijk",
      services: [
        {
          title: "Installatie van Geavanceerde Zonnepanelen",
          description:
            "We installeren hoogwaardige zonnepanelen om uw energieproductie te maximaliseren en uw elektriciteitsrekeningen te verlagen.",
          icon: Sun,
          image: "/images/solar-panel-installation.jpg",
          efficiency: 95,
          costSaving: 70,
          ecoFriendly: 100,
          details: [
            "Gepersonaliseerde evaluatie van uw eigendom voor optimale installatie",
            "Op maat gemaakt ontwerp van uw zonne-energiesysteem voor maximale efficiëntie",
            "Professionele installatie door gecertificeerde en ervaren experts",
            "Gebruik van de nieuwste generatie zonnepanelen voor superieure prestaties",
            "25 jaar prestatiegarantie en gedetailleerde nazorg",
          ],
          cta: "Vraag een gratis offerte aan",
        },
        {
          title: "Installatie van Slimme Omvormers",
          description:
            "Onze geavanceerde omvormers zetten zonne-energie efficiënt om in bruikbare elektriciteit, terwijl ze de prestaties van uw systeem optimaliseren.",
          icon: Zap,
          image: "/images/smart-inverter.jpg",
          efficiency: 98,
          costSaving: 60,
          ecoFriendly: 90,
          details: [
            "Selectie van omvormers aangepast aan uw systeem voor optimale energieomzetting",
            "Deskundige installatie en configuratie voor naadloze integratie",
            "Geavanceerde optimalisatie van energieomzetting voor maximaal rendement",
            "Real-time monitoring van de productie met gedetailleerde rapportages",
            "Preventief onderhoud en software-updates voor verhoogde levensduur",
          ],
          cta: "Ontdek onze omvormers",
        },
        {
          title: "Revolutionaire Energieopslagsystemen",
          description:
            "Optimaliseer uw verbruik met onze geavanceerde energieopslagoplossingen, waarmee u zonne-energie zelfs 's nachts kunt gebruiken.",
          icon: Battery,
          image: "/images/energy-storage.jpg",
          efficiency: 90,
          costSaving: 80,
          ecoFriendly: 95,
          details: [
            "Grondige analyse van uw energieopslagbehoeften",
            "Installatie van batterijen met hoge capaciteit en lange levensduur",
            "Naadloze integratie met uw bestaande zonne-energiesysteem",
            "Intelligent energiebeheer voor optimaal gebruik",
            "Aanzienlijke verhoging van uw energie-onafhankelijkheid",
          ],
          cta: "Verken opslagopties",
        },
        {
          title: "Proactief Onderhoud en Deskundige Reparatie",
          description:
            "We bieden regelmatige onderhoudsdiensten en reparaties om de optimale prestaties van uw systeem op lange termijn te garanderen.",
          icon: Wrench,
          image: "/images/solar-maintenance.jpg",
          efficiency: 99,
          costSaving: 50,
          ecoFriendly: 85,
          details: [
            "Geplande regelmatige inspecties om problemen te voorkomen",
            "Reiniging en onderhoud van zonnepanelen om de efficiëntie te behouden",
            "Geavanceerde diagnostiek en snelle probleemoplossing bij problemen",
            "Snelle en efficiënte reparaties door gekwalificeerde technici",
            "Systeemupdates voor constant optimale prestaties",
          ],
          cta: "Plan onderhoud",
        },
      ],
    },
  };

  const {
    title,
    description,
    learnMore,
    collapse,
    efficiency,
    costSaving,
    ecoFriendly,
    services,
  } = content[language];

  const [expandedServices, setExpandedServices] = useState<number[]>([]);

  const toggleService = (index: number) => {
    setExpandedServices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center">{title}</h1>
      <p className="text-xl mb-12 text-center max-w-3xl mx-auto">
        {description}
      </p>
      <div className="space-y-12">
        {services.map((service, index) => (
          <Card
            key={index}
            className="overflow-hidden transition-all duration-300 ease-in-out transform hover:shadow-xl"
          >
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/3 relative h-[300px] lg:h-auto">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg lg:rounded-none"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 opacity-35"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <service.icon className="w-24 h-24 text-white" />
                </div>
              </div>
              <div className="lg:w-2/3 p-6">
                <CardHeader>
                  <CardTitle className="text-2xl mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-lg">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>{efficiency}</span>
                        <span>{service.efficiency}%</span>
                      </div>
                      <Progress value={service.efficiency} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>{costSaving}</span>
                        <span>{service.costSaving}%</span>
                      </div>
                      <Progress value={service.costSaving} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>{ecoFriendly}</span>
                        <span>{service.ecoFriendly}%</span>
                      </div>
                      <Progress value={service.ecoFriendly} className="h-2" />
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <Button
                      onClick={() => toggleService(index)}
                      variant="outline"
                      className="w-full sm:w-1/3 border-blue-500 border-2"
                    >
                      {expandedServices.includes(index) ? (
                        <>
                          {collapse} <ChevronUp className="ml-2 h-4 w-4" />
                        </>
                      ) : (
                        <>
                          {learnMore} <ChevronDown className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                    <Button className="w-full sm:w-1/3 bg-orange-500 hover:bg-orange-600 text-white">
                      {service.cta} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <AnimatePresence>
                    {expandedServices.includes(index) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 space-y-4"
                      >
                        <ul className="space-y-2">
                          {service.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start">
                              <Check className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-1" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
