
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getsection1 } from "@/sanity/lib/queries";

interface Section1Data {
  headline?: string;
  highlightWords?: string[];
  description?: string;

  backgroundImageUrl?: string;
  backgroundImageAlt?: string;

  sideImageUrl?: string;
  sideImageAlt?: string;

  search?: {
    placeholder?: string;
  };

  cta?: {
    text?: string;
    link?: string;
  };
}

export default function Section1() {
  const [data, setData] = useState<Section1Data | null>(null);

  useEffect(() => {
    async function fetchData() {
      const res = await getsection1();
      setData(res);
    }
    fetchData();
  }, []);

  if (!data) return null;
  console.log("section1:", data);
  

  // 🔥 Highlight words
  const renderHeadline = () => {
    if (!data.headline) return null;

    const words = data.headline.split(" ");

    return words.map((word, i) => {
      const isHighlighted = data.highlightWords?.includes(word);

      return (
        <span
          key={i}
          className={isHighlighted ? "text-orange-500" : "text-[#0f172a]"}
        >
          {word}{" "}
        </span>
      );
    });
  };

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">

      {/* 🔹 FULL BACKGROUND IMAGE */}
      {data.backgroundImageUrl && (
        <Image
          src={data.backgroundImageUrl}
          alt={data.backgroundImageAlt || "background"}
          fill
          priority
          className="object-cover"
        />
      )}

      {/* 🔹 OVERLAY (like your UI soft beige look) */}
      <div className="absolute inset-0 bg-[#f5efe6]/90" />

      {/* 🔹 CONTENT */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 grid md:grid-cols-2 items-center gap-10">

        {/* LEFT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            {renderHeadline()}
          </h1>

          <p className="text-gray-600 mt-5 max-w-lg">
            {data.description}
          </p>

          {/* SEARCH */}
          <div className="mt-8 flex items-center bg-white rounded-full shadow-md overflow-hidden max-w-md">
            <input
              type="text"
              placeholder={data.search?.placeholder}
              className="flex-1 px-4 py-3 outline-none text-sm"
            />

            <button className="bg-purple-800 text-white px-6 py-3 hover:bg-purple-900 transition">
              {data.cta?.text}
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full h-[450px]">
          {data.sideImageUrl && (
            <Image
              src={data.sideImageUrl}
              alt={data.sideImageAlt || "hero image"}
              fill
              className="object-contain"
              priority
            />
          )}
        </div>

      </div>
    </section>
  );
}