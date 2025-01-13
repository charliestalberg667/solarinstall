"use client";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

export function ScrollArrow() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToContent = () => {
    const contentSection = document.getElementById("content-section");
    if (contentSection) {
      const startPosition = window.pageYOffset;
      const targetPosition = contentSection.offsetTop;
      const distance = targetPosition - startPosition;
      const duration = 1000; // 1 second in milliseconds
      let start: number | null = null;

      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percentage = Math.min(progress / duration, 1);

        window.scrollTo(
          0,
          startPosition + distance * easeInOutCubic(percentage),
        );

        if (progress < duration) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    }
  };

  const easeInOutCubic = (t: number): number => {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  };

  return (
    <button
      onClick={scrollToContent}
      className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-50 rounded-full p-2 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-label="Scroll to content"
    >
      <ChevronDownIcon className="h-6 w-6 text-black animate-bounce" />
    </button>
  );
}
