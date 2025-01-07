"use client";

import { useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  AtSign,
  MessageSquare,
} from "lucide-react";

export default function Contact() {
  const { language } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const content = {
    fr: {
      title: "Contactez-nous",
      description:
        "Nous sommes là pour répondre à vos questions sur l'énergie solaire",
      nameLabel: "Nom",
      emailLabel: "Email",
      messageLabel: "Message",
      submitButton: "Envoyer",
      successMessage:
        "Votre message a été envoyé avec succès. Nous vous contacterons bientôt.",
      errorMessage: "Une erreur s'est produite. Veuillez réessayer.",
      contactInfo: {
        title: "Informations de contact",
        description: "N'hésitez pas à nous contacter par ces moyens",
        email: "spl@solarstock.be",
        phone: "+32 (0)2 241 08 00",
        address: "Chaussée de Mons 458, 1600 Sint-Pieters-Leeuw, Belgique",
      },
      faq: {
        title: "Questions fréquentes",
        items: [
          {
            question:
              "Combien de temps dure l'installation d'un système solaire ?",
            answer:
              "La durée d'installation varie selon la taille du système, mais généralement entre 1 et 3 jours pour une maison individuelle.",
          },
          {
            question:
              "Quelles économies puis-je espérer sur ma facture d'électricité ?",
            answer:
              "En moyenne, nos clients constatent une réduction de 50 à 70% de leur facture d'électricité après l'installation de panneaux solaires.",
          },
          {
            question:
              "Les panneaux solaires fonctionnent-ils par temps nuageux ?",
            answer:
              "Oui, les panneaux solaires fonctionnent même par temps nuageux, bien qu'avec une efficacité réduite. Ils produisent de l'électricité tant qu'il y a de la lumière.",
          },
        ],
      },
    },
    nl: {
      title: "Neem contact op",
      description:
        "We zijn er om al uw vragen over zonne-energie te beantwoorden",
      nameLabel: "Naam",
      emailLabel: "E-mail",
      messageLabel: "Bericht",
      submitButton: "Versturen",
      successMessage:
        "Uw bericht is succesvol verzonden. We nemen binnenkort contact met u op.",
      errorMessage: "Er is een fout opgetreden. Probeer het opnieuw.",
      contactInfo: {
        title: "Contactgegevens",
        description: "Neem gerust contact met ons op via deze kanalen",
        email: "spl@solarstock.be",
        phone: "+32 (0)2 241 08 00",
        address: "Bergensesteenweg 458, 1600 Sint-Pieters-Leeuw, België",
      },
      faq: {
        title: "Veelgestelde vragen",
        items: [
          {
            question:
              "Hoe lang duurt de installatie van een zonne-energiesysteem?",
            answer:
              "De installatietijd varieert afhankelijk van de grootte van het systeem, maar meestal tussen 1 en 3 dagen voor een gemiddeld huis.",
          },
          {
            question: "Hoeveel kan ik besparen op mijn elektriciteitsrekening?",
            answer:
              "Gemiddeld zien onze klanten een vermindering van 50-70% op hun elektriciteitsrekening na de installatie van zonnepanelen.",
          },
          {
            question: "Werken zonnepanelen op bewolkte dagen?",
            answer:
              "Ja, zonnepanelen werken ook op bewolkte dagen, zij het met verminderde efficiëntie. Ze produceren elektriciteit zolang er licht is.",
          },
        ],
      },
    },
  };

  const {
    title,
    description,
    nameLabel,
    emailLabel,
    messageLabel,
    submitButton,
    successMessage,
    errorMessage,
    contactInfo,
    faq,
  } = content[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const triggerError =
      process.env.NEXT_PUBLIC_TRIGGER_CONTACT_ERROR_MESSAGE === "true";

    if (triggerError) {
      toast({
        title: errorMessage,
        description: "An error occurred while sending your message.",
      });
    } else {
      // TODO: send stuff here
      toast({
        title: successMessage,
        description: `Name: ${name}, Email: ${email}`,
      });
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900 dark:to-orange-900 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6 text-center dark:text-white">
          {title}
        </h1>
        <p className="text-xl mb-12 text-center max-w-3xl mx-auto dark:text-gray-200">
          {description}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-white dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold dark:text-white">
                {contactInfo.title}
              </CardTitle>
              <CardDescription className="dark:text-gray-300">
                {contactInfo.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3 dark:text-gray-200">
                <Mail className="w-5 h-5 text-yellow-500" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:underline"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-3 dark:text-gray-200">
                <Phone className="w-5 h-5 text-yellow-500" />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="hover:underline"
                >
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3 dark:text-gray-200">
                <MapPin className="w-5 h-5 text-yellow-500" />
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    contactInfo.address,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {contactInfo.address}
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold dark:text-white">
                {faq.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {faq.items.map((item, index) => (
                <div key={index}>
                  <h3 className="font-semibold mb-2 dark:text-white">
                    {item.question}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.answer}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card className="mt-12 bg-white dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold dark:text-white">
              {title}
            </CardTitle>
            <CardDescription className="dark:text-gray-300">
              {description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1 dark:text-gray-200"
                >
                  {nameLabel}
                </label>
                <div className="relative">
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="pl-10 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                  />
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1 dark:text-gray-200"
                >
                  {emailLabel}
                </label>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="pl-10 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                  />
                  <AtSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1 dark:text-gray-200"
                >
                  {messageLabel}
                </label>
                <div className="relative">
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="pl-10 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                  />
                  <MessageSquare className="absolute left-3 top-3 text-gray-400 dark:text-gray-500" />
                </div>
              </div>
              <Button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white"
              >
                {submitButton} <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
