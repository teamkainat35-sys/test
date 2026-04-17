


"use client";

export default function Section4({ data }: any) {
  if (!data) return null;

  return (
    <>
      {/* ================= TOP SECTION ================= */}
      <section className="w-full bg-[#f5f1ea] py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">

          {/* LEFT SIDE IMAGE */}
          <div className="flex-1 flex justify-center md:justify-start">
            {data.image?.asset?.url && (
              <img
                src={data.image.asset.url}
                alt="learning"
                className="w-[450px] max-w-full object-contain"
              />
            )}
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="flex-1 pt-6 md:pt-10">

            {/* HEADING */}
            <h2 className="text-4xl md:text-5xl font-bold text-black leading-snug">
              {data.heading}{" "}
              <span className="text-orange-500">
                {data.highlightWord}
              </span>{" "}
              Experience
            </h2>

            {/* SUBHEADING */}
            {data.subheading && (
              <p className="mt-4 text-gray-600 max-w-md">
                {data.subheading}
              </p>
            )}

            {/* FEATURES */}
            <div className="mt-10 space-y-6">
              {data.features?.map((item: any, index: number) => (
                <div key={index} className="flex items-start gap-4">

                  {/* ICON */}
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-purple-100 shrink-0">
                    {item.icon?.asset?.url && (
                      <img
                        src={item.icon.asset.url}
                        alt={item.title}
                        className="w-6 h-6"
                      />
                    )}
                  </div>

                  {/* TEXT */}
                  <div>
                    <h4 className="font-semibold text-lg text-black">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm mt-1 max-w-sm">
                      {item.description}
                    </p>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ================= TESTIMONIAL SECTION ================= */}
      <section className="w-full bg-gray-100  py-16   px-6 text-center">
        <div className="max-w-3xl mx-auto">

          <h3 className="text-2xl md:text-3xl my-4 font-semibold text-black">
            {data.testimonialSectionTitle}
          </h3>

          <p className="mt-3 text-gray-600">
            {data.testimonialText}
          </p>

        </div>
      </section>
    </>
  );
}
