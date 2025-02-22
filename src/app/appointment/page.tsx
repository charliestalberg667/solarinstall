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
  const [prenom, setPrenom] = useState(""); // Added state for prenom
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
      prenomLabel: "Prénom",
      emailLabel: "Email",
      phoneLabel: "Téléphone",
      addressLabel: "Adresse",
      messageLabel: "Message",
      typeLabel: "Type de rendez-vous",
      types: ["Résidentiel", "Bâtiment", "Entreprise", "Industriel"],
      submitButton: "Envoyer",
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
      prenomLabel: "Voornaam",
      emailLabel: "E-mail",
      phoneLabel: "Telefoon",
      addressLabel: "Adres",
      messageLabel: "Bericht",
      typeLabel: "Afspraaktype",
      types: ["Residentieel", "Gebouw", "Bedrijf", "Industrieel"],
      submitButton: "Verzenden",
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
    prenomLabel,
    emailLabel,
    phoneLabel,
    addressLabel,
    messageLabel,
    typeLabel,
    types,
    submitButton,
    successMessage,
    errorMessage,
  } = content[language];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          prenom,
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
        setPrenom("");
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
      <div className=" min-h-screen flex justify-center items-center p-10">
        <div className="bg-white p-8 border-4 border-[#91b4ee] rounded-xxl shadow-2xl max-w-lg w-full">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-semibold text-blue-600 mb-4">{title}</h1>
            <p className="text-lg text-gray-500">{description}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Champs Input avec touche de rose */}
            <Input
                placeholder={nameLabel}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-gray-100 border-2 border-transparent rounded-lg px-4 py-3 focus:ring-2 transition-all duration-300 ease-in-out"
            />

            <Input
                placeholder={prenomLabel}
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
                required
                className="bg-gray-100 border-2 border-transparent rounded-lg px-4 py-3 focus:ring-2  transition-all duration-300 ease-in-out"
            />

            <Input
                placeholder={emailLabel}
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-gray-100 border-2 border-transparent rounded-lg px-4 py-3 focus:ring-2 transition-all duration-300 ease-in-out"
            />

            <Input
                placeholder={phoneLabel}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="bg-gray-100 border-2 border-transparent rounded-lg px-4 py-3 focus:ring-2 transition-all duration-300 ease-in-out"
            />

            <Input
                placeholder={addressLabel}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                className="bg-gray-100 border-2 border-transparent rounded-lg px-4 py-3 focus:ring-2 transition-all duration-300 ease-in-out"
            />

            {/* Sélecteur dynamique avec rose et ombre */}
            <div className="space-y-2">
              <label htmlFor="appointmentType" className="block text-sm font-medium text-gray-600">
                {typeLabel}
              </label>
              <Select value={appointmentType} onValueChange={setAppointmentType}>
                <SelectTrigger className="w-full bg-gray-100 border-2 border-transparent rounded-lg px-4 py-3 focus:ring-2 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg">
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

            {/* Textarea stylisée avec rose au focus */}
            <Textarea
                placeholder={messageLabel}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="bg-gray-100 border-2 border-transparent rounded-lg px-4 py-3 focus:ring-2  transition-all duration-300 ease-in-out"
            />

            {/* Bouton de soumission avec rose au survol */}
            <Button type="submit" className=" text-white w-full py-3 rounded-lg  transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 ">
              {submitButton} <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>

  );
}