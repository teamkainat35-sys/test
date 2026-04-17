"use client"


export default function Section5({ data }: any) {
  if (!data) return null;

  return (
    <section className="w-full bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-semibold text-black">
          {data.heading}
        </h2>

        {/* SUBHEADING */}
        {data.subheading && (
          <p className="mt-3 text-gray-600">
            {data.subheading}
          </p>
        )}

        {/* TESTIMONIAL CARDS */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {data.testimonials?.map((item: any, index: number) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-left flex flex-col justify-between"
            >

              {/* QUOTE */}
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                “{item.quote}”
              </p>

              {/* USER INFO */}
              <div className="flex items-center gap-3">

                {/* AVATAR */}
                {item.avatar && (
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                )}

                {/* NAME + ROLE */}
                <div>
                  <h4 className="text-sm font-semibold text-black">
                    {item.name}
                  </h4>
                  <p className="text-xs text-gray-400">
                    {item.role}
                  </p>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}