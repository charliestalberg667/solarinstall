"use client";

import type React from "react";
import { useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

export default function Appointment() {
  const { language } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [appointmentType, setAppointmentType] = useState("residential");
  const { toast } = useToast();

  const content = {
    fr: {
      title: "Prenez rendez-vous",
      description:
        "Planifiez une consultation pour vos besoins en énergie solaire.",
      nameLabel: "Nom",
      emailLabel: "Email",
      phoneLabel: "Téléphone",
      addressLabel: "Adresse",
      messageLabel: "Message",
      typeLabel: "Type de rendez-vous",
      types: ["Résidentiel", "Bâtiment", "Entreprise", "Industriel"],
      submitButton: "Envoyer",
      visitShowroom: "Visitez notre showroom",
      successMessage: "Votre demande a été envoyée avec succès !",
      errorMessage: "Une erreur s'est produite. Veuillez réessayer.",
      contactInfo: {
        address: "Chaussée de Mons 458, 1600 Sint-Pieters-Leeuw, Belgique",
      },
    },
    nl: {
      title: "Maak een afspraak",
      description: "Plan een consultatie voor uw zonne-energiebehoeften.",
      nameLabel: "Naam",
      emailLabel: "E-mail",
      phoneLabel: "Telefoon",
      addressLabel: "Adres",
      messageLabel: "Bericht",
      typeLabel: "Afspraaktype",
      types: ["Residentieel", "Gebouw", "Bedrijf", "Industrieel"],
      submitButton: "Verzenden",
      visitShowroom: "Bezoek onze showroom",
      successMessage: "Uw aanvraag is succesvol verzonden!",
      errorMessage: "Er is een fout opgetreden. Probeer het opnieuw.",
      contactInfo: {
        address: "Chaussée de Mons 458, 1600 Sint-Pieters-Leeuw, Belgique",
      },
    },
  };

  const {
    title,
    description,
    nameLabel,
    emailLabel,
    phoneLabel,
    addressLabel,
    messageLabel,
    typeLabel,
    types,
    submitButton,
    visitShowroom,
    successMessage,
    errorMessage,
    contactInfo,
  } = content[language];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          address,
          message,
          appointmentType,
        }),
      });

      if (response.ok) {
        toast({
          title: successMessage,
          description: "We will contact you soon.",
        });
        setName("");
        setEmail("");
        setPhone("");
        setAddress("");
        setMessage("");
        setAppointmentType("residential");
      } else {
        toast({ title: errorMessage, description: "Something went wrong." });
      }
    } catch {
      toast({
        title: errorMessage,
        description: "An unexpected error occurred. Please try again.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-lg text-gray-600">{description}</p>
        </div>
        <div className="bg-gray-100 p-8 rounded-lg shadow-md max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              placeholder={nameLabel}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              placeholder={emailLabel}
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              placeholder={phoneLabel}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <Input
              placeholder={addressLabel}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <div className="space-y-2">
              <label
                htmlFor="appointmentType"
                className="block text-sm font-medium"
              >
                {typeLabel}
              </label>
              <Select
                value={appointmentType}
                onValueChange={setAppointmentType}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={typeLabel} />
                </SelectTrigger>
                <SelectContent>
                  {types.map((type, index) => (
                    <SelectItem key={index} value={type.toLowerCase()}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Textarea
              placeholder={messageLabel}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <Button type="submit" className="w-full">
              {submitButton} <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
          <div className="text-center mt-6">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactInfo.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {visitShowroom}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
