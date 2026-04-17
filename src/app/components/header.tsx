"use cleint"
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getHeader } from "@/sanity/lib/queries";

interface HeaderData {
  logoUrl?: string;
  logoAlt?: string;
  brandName?: string;
  navLinks?: {
    label: string;
    url: string;
    isActive?: boolean;
  }[];
  cta?: {
    text?: string;
    link?: string;
  };
}

export default function Header() {
  const [data, setData] = useState<HeaderData | null>(null);

  useEffect(() => {
    async function fetchData() {
      const res = await getHeader();
      console.log(res);
      
      setData(res);
    }
    fetchData();
  }, []);

  if (!data) return null;

  return (
    <header className="w-full bg-[#f5efe6] px-6 md:px-12 lg:px-20 py-4 flex items-center justify-between">

      {/* 🔹 Logo + Text */}
      <div className="flex items-center gap-2">
        {data.logoUrl && (
          <Image
            src={data.logoUrl}
            alt={data.logoAlt || "logo"}
            width={40}
            height={40}
          />
        )}
        <span className="text-lg font-semibold">
          {data.brandName}
        </span>
      </div>

      {/* 🔹 Nav Links */}
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
        {data.navLinks?.map((item, index) => (
          <Link
            key={index}
            href={item.url || "#"}
            className={`${
              item.isActive
                ? "text-purple-700 font-semibold"
                : "hover:text-purple-700"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* 🔹 Button */}
      {data.cta?.text && data.cta?.link && (
        <Link
          href={data.cta.link}
          className="bg-purple-800 text-white px-6 py-2 rounded-full hover:bg-purple-900 transition"
        >
          {data.cta.text}
        </Link>
      )}
    </header>
  );
}