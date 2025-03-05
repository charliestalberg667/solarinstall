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
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [appointmentType, setAppointmentType] = useState("residential");
  const { toast } = useToast();

  const content = {
    fr: {
      title: "Prenez rendez-vous",
      description: "Planifiez une consultation pour vos besoins en énergie solaire.",
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
        address: "Chaussée de Mons 458, 1600 Sint-Pieters-Leeuw, Belgique"
      }
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
        address: "Chaussée de Mons 458, 1600 Sint-Pieters-Leeuw, Belgique"
      }
    }
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
    <div className="min-h-screen flex justify-center items-center ">
      <div className="bg-white p-6 border-[3px] border-[#355834] rounded-[2rem] shadow-[0_0px_50px_rgba(58,_120,_58,_0.6)] backdrop-blur-xl bg-white/30 max-w-lg w-full h-auto outline-offset-10 m-7">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-semibold text-[#355834] mb-4">{title}</h1>
          <p className="text-lg text-[#97C2AC]">{description}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            placeholder={nameLabel}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="bg-white border-[1.5px] border-[#97C2AC] rounded-sm px-4 py-3 focus:ring-2 focus:border-[#97C2AC]/80 transition-all duration-300 ease-in-out"
          />

          <Input
            placeholder={prenomLabel}
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            required
            className="bg-white border-[1.5px] border-[#97C2AC] rounded-full px-4 py-3 focus:ring-2 focus:border-[#97C2AC]/80 transition-all duration-300 ease-in-out"
          />

          <Input
            placeholder={emailLabel}
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-white border-[1.5px] border-[#97C2AC] rounded-full px-4 py-3 focus:ring-2 focus:border-[#97C2AC]/80 transition-all duration-300 ease-in-out"
          />

          <Input
            placeholder={phoneLabel}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="bg-white border-[1.5px] border-[#97C2AC] rounded-full px-4 py-3 focus:ring-2 focus:border-[#97C2AC]/80 transition-all duration-300 ease-in-out"
          />

          <Input
            placeholder={addressLabel}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="bg-white border-[1.5px] border-[#97C2AC] rounded-full px-4 py-3 focus:ring-2 focus:border-[#97C2AC]/80 transition-all duration-300 ease-in-out"
          />

          <div className="space-y-2">
            <label htmlFor="appointmentType" className="block text-sm font-medium text-[#97C2AC]">
              {typeLabel}
            </label>
            <Select value={appointmentType} onValueChange={setAppointmentType}>
              <SelectTrigger className="w-full bg-white border-[1.5px] border-[#97C2AC] rounded-full px-4 py-3 focus:ring-2 focus:border-[#97C2AC]/80 transition-all duration-300 ease-in-out">
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
            className="bg-white border-[1.5px] border-[#97C2AC] rounded-3xl px-4 py-3 focus:ring-2 focus:border-[#97C2AC]/80 transition-all duration-300 ease-in-out"
          />

          <Button type="submit" className="bg-[#355834] hover:bg-[#97C2AC]/90 text-white w-full py-3 rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-[#97C2AC]/50">
            {submitButton} <Send className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}
