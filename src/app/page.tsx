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
import {BrandsScroll} from "@/components/brands-scroll";

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
      galleryTitle: "Nos Réalisations Solaires",
      brandsTitle: "Nos Marques Partenaires",
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
      galleryTitle: "Onze Zonne-installaties",
      brandsTitle: "Onze Partnermerken",
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

  const {
    title,
    description,
    cta,
    galleryTitle,
    brandsTitle,
    benefitsTitle,
    benefits,
    readyTitle,
  } = content[language];

  const images = [
    { src: "/images/solar1.jpg", alt: "Installation solaire 1" },
    { src: "/images/solar2.jpg", alt: "Installation solaire 2" },
    { src: "/images/solar3.jpg", alt: "Installation solaire 3" },
    { src: "/images/solar4.jpg", alt: "Installation solaire 4" },
    { src: "/images/solar5.jpg", alt: "Installation solaire 5" },
    { src: "/images/solar6.jpg", alt: "Installation solaire 6" },
  ];

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openDialog = (index: number) => {
    setCurrentImageIndex(index);
    setIsDialogOpen(true);
  };

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
      <div className="container mx-auto px-4 py-12">
        <div className="relative mb-16">
          <div className="relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">
              {title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-black">
              {description}
            </p>
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
          <h2 className="text-3xl font-semibold mb-6 text-center text-orange-900">
            {galleryTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="cursor-pointer overflow-hidden rounded-lg shadow-lg relative w-full h-64 group"
                onClick={() => openDialog(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                  <Sun
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    size={48}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-orange-900">
            {benefitsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4"
              >
                <Sun className="text-yellow-500" size={32}/>
                <p className="text-lg text-orange-900">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-center text-orange-900">
            {brandsTitle}
          </h2>
          <BrandsScroll/>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-6 text-orange-900">
            {readyTitle}
          </h2>
          <Link href="/services">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white"
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
            <DialogClose/>
          </div>
          <div className="flex justify-between mt-4">
            <Button variant="outline" onClick={showPrevImage}>
              <ChevronLeft size={24}/>
            </Button>
            <Button variant="outline" onClick={showNextImage}>
              <ChevronRight size={24}/>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
