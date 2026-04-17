"use client";

export default function Section6({ data }: any) {
  if (!data) return null;

  return (
    <section className="w-full bg-[#f5f5f5] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-semibold text-black">
          {data.heading}
        </h2>

        {/* SUBHEADING */}
        {data.subheading && (
          <p className="mt-3 text-gray-500">
            {data.subheading}
          </p>
        )}

        {/* CARDS */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {data.tracks?.map((item: any, index: number) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden text-left"
            >

              {/* IMAGE */}
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[200px] object-cover"
                />
              )}

              {/* CONTENT */}
              <div className="p-5">

                {/* NAME */}
                <h3 className="text-lg font-semibold text-black">
                  {item.name}
                </h3>

                {/* ROLE */}
                <p className="text-sm text-gray-400 mt-1">
                  {item.role}
                </p>

                {/* DESCRIPTION */}
                <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                  {item.description}
                </p>

                {/* CATEGORY + SOCIAL */}
                <div className="flex items-center justify-between mt-4">

                  {/* CATEGORY */}
                  <span className="text-orange-500 text-sm font-medium">
                    {item.category}
                  </span>

                  {/* SOCIAL ICONS */}
                  <div className="flex items-center gap-3">

                    {item.instagram && (
                      <a
                        href={item.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-500 text-sm font-bold"
                      >
                        IG
                      </a>
                    )}

                    {item.linkedin && (
                      <a
                        href={item.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 text-sm font-bold"
                      >
                        IN
                      </a>
                    )}

                  </div>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}