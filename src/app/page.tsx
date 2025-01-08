"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, Sun } from "lucide-react";
import { VisuallyHidden } from "@reach/visually-hidden";
import { BrandsScroll } from "@/components/brands-scroll";
import { SolarPowerExplanation } from "@/components/SolarPowerExplanation";

export default function Home() {
  const { language } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const content = {
    fr: {
      title: "Libérez la Puissance du Soleil avec SolarStock",
      description: "Transformez votre maison en centrale d'énergie propre",
      cta: "Découvrez nos services",
      benefitsTitle: "Avantages de l'Énergie Solaire",
      benefits: [
        "Économies d'énergie substantielles",
        "Réduction de l'empreinte carbone",
        "Augmentation de la valeur immobilière",
        "Indépendance énergétique",
      ],
      readyTitle: "Prêt à commencer?",
    },
    nl: {
      title: "Ontgrendel de Kracht van de Zon met SolarStock",
      description: "Transformeer uw huis in een schone energiecentrale",
      cta: "Ontdek onze diensten",
      benefitsTitle: "Voordelen van Zonne-energie",
      benefits: [
        "Aanzienlijke energiebesparingen",
        "Vermindering van de koolstofvoetafdruk",
        "Verhoogde onroerend goed waarde",
        "Energie-onafhankelijkheid",
      ],
      readyTitle: "Klaar om te beginnen?",
    },
  };

  const { title, description, cta, benefitsTitle, benefits, readyTitle } =
    content[language];

  const images = [
    {
      src: "/images/solar1.jpg",
      alt: language === "fr" ? "Installation solaire 1" : "Zonne-installatie 1",
    },
    {
      src: "/images/solar2.jpg",
      alt: language === "fr" ? "Installation solaire 2" : "Zonne-installatie 2",
    },
    {
      src: "/images/solar3.jpg",
      alt: language === "fr" ? "Installation solaire 3" : "Zonne-installatie 3",
    },
    {
      src: "/images/solar4.jpg",
      alt: language === "fr" ? "Installation solaire 4" : "Zonne-installatie 4",
    },
    {
      src: "/images/solar5.jpg",
      alt: language === "fr" ? "Installation solaire 5" : "Zonne-installatie 5",
    },
    {
      src: "/images/solar6.jpg",
      alt: language === "fr" ? "Installation solaire 6" : "Zonne-installatie 6",
    },
  ];

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const showPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 md:px-40">
        <BrandsScroll />
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="relative mb-16">
          <div className="relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">
              {title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-black">{description}</p>
            <Link href="/services">
              <Button
                size="lg"
                className="bg-blue-950 hover:bg-blue-900 text-white rounded-lg"
              >
                {cta}
              </Button>
            </Link>
          </div>
        </div>

        <div className="mb-16">
          <SolarPowerExplanation />
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-black">
            {benefitsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-blue-50 p-6 rounded-lg shadow-lg flex items-center space-x-4"
              >
                <Sun className="text-yellow-500" size={32} />
                <p className="text-lg text-black">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-6 text-black">
            {readyTitle}
          </h2>
          <Link href="/services">
            <Button
              size="lg"
              className="bg-blue-950 hover:bg-blue-900 text-white rounded-lg"
            >
              {cta}
            </Button>
          </Link>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl w-full bg-white">
          <DialogTitle>
            <VisuallyHidden>Image Dialog</VisuallyHidden>
          </DialogTitle>
          <div className="relative">
            <Image
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              width={800}
              height={600}
              className="w-full h-auto"
            />
            <DialogClose />
          </div>
          <div className="flex justify-between mt-4">
            <Button variant="outline" onClick={showPrevImage}>
              <ChevronLeft size={24} />
            </Button>
            <Button variant="outline" onClick={showNextImage}>
              <ChevronRight size={24} />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
