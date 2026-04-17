


"use client";

import Image from "next/image";

type Feature = {
  title: string;
  description: string;
  icon?: string;
};

type Section3Props = {
  data: {
    heading: string;
    highlightWord?: string;
    subheading?: string;
    image?: string;
    features: Feature[];
  } | null;
};

export default function Section3({ data }: Section3Props) {
  if (!data) return null;

  const renderHeading = () => {
    if (!data.highlightWord) return data.heading;

    const parts = data.heading.split(data.highlightWord);

    return (
      <>
        {parts[0]}
        <span className="text-orange-500">
          {data.highlightWord}
        </span>
        {parts[1]}
      </>
    );
  };

  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#f5f1ea]">
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT IMAGE */}
        <div className="relative w-full h-[350px] md:h-[450px]">
          {data.image ? (
            <Image
              src={data.image}
              alt="Learning"
              fill
              className="object-contain"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400">
              No Image
            </div>
          )}
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {renderHeading()}
          </h2>

          {data.subheading && (
            <p className="text-gray-500 mb-6">
              {data.subheading}
            </p>
          )}

          <div className="space-y-6">
            {data.features?.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-12 h-12 bg-purple-700 rounded-xl flex items-center justify-center">
                  {feature.icon ? (
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={24}
                      height={24}
                    />
                  ) : (
                    <span className="text-white">✨</span>
                  )}
                </div>

                <div>
                  <h4 className="font-semibold">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}