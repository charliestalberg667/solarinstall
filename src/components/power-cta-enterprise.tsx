"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";

interface PowerCTAContent {
  makeAppointment: string;
  inverterText: string;
  batteryText: string;
  moreCapacityText: string;
  exampleButton: string;
  industryButton: string;
  transformText: {
    part1: string;
    part2: string;
  };
}

const content: Record<string, PowerCTAContent> = {
  nl: {
    makeAppointment: "maak een afspraak",
    inverterText: "omvormers tot 200 kW",
    batteryText: "batterijen tot 250 kWh",
    moreCapacityText:
      "Als u meer vermogen nodig heeft, schakelt u over naar de industriële modus.",
    exampleButton: "voorbeeld installatie",
    industryButton: "Industrie",
    transformText: {
      part1: "Bekijk hoe onze zonne-installaties",
      part2: "woningen transformeren!",
    },
  },
  fr: {
    makeAppointment: "prendre rendez-vous",
    inverterText: "onduleurs jusqu'à 200 kW",
    batteryText: "batteries jusqu'à 250 kWh",
    moreCapacityText:
      "Si vous avez besoin de plus de puissance, passez en mode industriel.",
    exampleButton: "installation exemple",
    industryButton: "Industrie",
    transformText: {
      part1: "Découvrez comment nos installations solaires",
      part2: "transforment les maisons!",
    },
  },
};

export function PowerCTAEnterprise() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <div className="flex max-h-96 items-center justify-center bg-gray-50 mt-8">
      <div className="grid grid-cols-2 grid-rows-2 gap-8 max-w-4xl text-center">
        <div className="flex flex-col items-center gap-4">
          <Button
            size="lg"
            className="bg-[#FF4D00] hover:bg-[#FF4D00]/90 text-white rounded-full px-8 py-6 text-lg font-medium"
          >
            {t.makeAppointment}
          </Button>
          <p className="text-xl font-medium">
            {t.transformText.part1}{" "}
            <span className="text-[#FF4D00]">{t.transformText.part2}</span>
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <p className="text-xl font-medium">{t.inverterText}</p>
          <p className="text-xl font-medium">{t.batteryText}</p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <Link href="/example">
            <Button
              variant="outline"
              className="rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-50 px-8 py-4"
            >
              {t.exampleButton}
            </Button>
          </Link>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-xl font-medium">{t.moreCapacityText}</p>
          <Link href="/industrial">
            <Button
              variant="outline"
              className="rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-50 px-8 py-4"
            >
              {t.industryButton}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
