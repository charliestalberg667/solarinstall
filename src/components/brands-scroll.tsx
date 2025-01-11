"use client";

import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const brands = [
  "Livoltek",
  "Huawei",
  "MaxHub",
  "Sungrow",
  "BYD",
  "Hypontech",
  "PGB",
  "Esdec",
  "I-Fix",
  "Art-Sign",
  "Hager",
];

export function BrandsScroll() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="mb-10">
      <Marquee gradient={false} speed={40}>
        {brands.map((brand, index) => (
          <div
            key={index}
            className="mx-8 transition-transform duration-300 ease-in-out hover:scale-110"
          >
            <span
              className={` font-semibold ${
                index % 2 === 0
                  ? "text-[rgb(68,77,84)]"
                  : "text-[rgb(137,147,156)]"
              }`}
            >
              {brand}
            </span>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
