"use client";

export default function Section7({ data }: any) {
  if (!data) return null;

  return (
    <footer className="w-full bg-[#fff7ef] pt-16 px-6">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 pb-10">

        {/* ================= BRAND ================= */}
        <div className="md:col-span-2">

          {/* LOGO */}
          {data.logo?.asset?.url && (
            <img
              src={data.logo.asset.url}
              alt="logo"
              className="w-32 mb-4"
            />
          )}

          {/* DESCRIPTION */}
          <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
            {data.description}
          </p>
        </div>

        {/* ================= COMPANY ================= */}
        <div>
          <h3 className="font-semibold text-black mb-4">Company</h3>

          <ul className="space-y-2 text-sm text-gray-600">
            {data.company?.map((item: any, i: number) => (
              <li key={i}>
                <a href={item.url} className="hover:text-black transition">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ================= COURSES ================= */}
        <div>
          <h3 className="font-semibold text-black mb-4">Courses</h3>

          <ul className="space-y-2 text-sm text-gray-600">
            {data.courses?.map((item: any, i: number) => (
              <li key={i}>
                <a href={item.url} className="hover:text-black transition">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ================= SUPPORT ================= */}
        <div>
          <h3 className="font-semibold text-black mb-4">Support</h3>

          <ul className="space-y-2 text-sm text-gray-600">
            {data.support?.map((item: any, i: number) => (
              <li key={i}>
                <a href={item.url} className="hover:text-black transition">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ================= CONTACT ================= */}
        <div>
          <h3 className="font-semibold text-black mb-4">Contact Info</h3>

          <div className="text-sm text-gray-600 space-y-2">

            {data.contact?.phone && (
              <p>{data.contact.phone}</p>
            )}

            {data.contact?.email && (
              <p>{data.contact.email}</p>
            )}

            {data.contact?.address && (
              <p>{data.contact.address}</p>
            )}

          </div>
        </div>

      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className="border-t border-gray-200 py-4 text-center text-sm text-gray-500">
        {data.copyright}
      </div>

    </footer>
  );
}