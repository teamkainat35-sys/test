
// "use client";

// import Image from "next/image";

// type Course = {
//   _key: string;
//   title: string;
//   category: string;
//   price: number;
//   rating: number;
//   duration: string;
//   coursesCount: number;
//   sales: number;
//   buttonText: string;
//   buttonLink?: string;
//   thumbnail?: {
//     url?: string;
//     metadata?: {
//       lqip?: string;
//       dimensions?: {
//         width: number;
//         height: number;
//       };
//     };
//   };
// };

// type TracksSectionProps = {
//   heading: string;
//   subheading: string;
//   courses: Course[];
// };

// export default function Section2({
//   data,
// }: {
//   data: TracksSectionProps | null;
// }) {
//   // safety check (VERY IMPORTANT)
//   if (!data) return null;

//   return (
//     <section className="py-16 px-6 md:px-12 lg:px-20">
//       {/* Heading */}
//       <div className="text-center mb-12">
//         <h2 className="text-3xl md:text-4xl font-bold">
//           {data.heading}
//         </h2>
//         <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
//           {data.subheading}
//         </p>
//       </div>

//       {/* Cards Grid */}
//       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {data.courses?.map((course) => (
//           <div
//             key={course._key}
//             className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
//           >
//             {/* Image */}
//             <div className="relative w-full h-48">
//               {course.thumbnail?.url && (
//                 <Image
//                   src={course.thumbnail.url}
//                   alt={course.title}
//                   fill
//                   className="object-cover"
//                   placeholder={
//                     course.thumbnail?.metadata?.lqip
//                       ? "blur"
//                       : "empty"
//                   }
//                   blurDataURL={course.thumbnail?.metadata?.lqip}
//                 />
//               )}
//             </div>

//             {/* Content */}
//             <div className="p-5">
//               {/* Category + Price */}
//               <div className="flex justify-between items-center mb-2">
//                 <span className="text-sm text-blue-600 font-medium">
//                   {course.category}
//                 </span>
//                 <span className="text-sm font-semibold">
//                   ${course.price}
//                 </span>
//               </div>

//               {/* Title */}
//               <h3 className="font-semibold text-lg mb-2">
//                 {course.title}
//               </h3>

//               {/* Rating */}
//               <div className="flex items-center text-yellow-400 text-sm mb-3">
//                 {"★".repeat(Math.round(course.rating || 0))}
//                 {"☆".repeat(5 - Math.round(course.rating || 0))}
//               </div>

//               {/* Meta Info */}
//               <div className="flex justify-between text-gray-500 text-sm mb-4">
//                 <span>⏱ {course.duration}</span>
//                 <span>📚 {course.coursesCount}</span>
//                 <span>📥 {course.sales}</span>
//               </div>

//               {/* Button */}
//               {course.buttonLink && (
//                 <a
//                   href={course.buttonLink}
//                   className="block text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//                 >
//                   {course.buttonText}
//                 </a>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// "use client";

// import Image from "next/image";

// type Course = {
//   _id: string;
//   title: string;
//   category: string;
//   price: number;
//   rating: number;
//   duration: string;
//   lessons: number;
//   students: number;
//   ctaText?: string;
//   image?: string;
// };

// type Feature = {
//   title: string;
//   description: string;
//   icon?: string;
// };

// type TracksSectionProps = {
//   heading: string;
//   subheading: string;
//   features: Feature[];
//   courses: Course[];
// };

// export default function Section2({
//   data,
// }: {
//   data: TracksSectionProps | null;
// }) {
//   if (!data) return null;

//   return (
//     <section className="py-16 px-6 md:px-12 lg:px-20">

//       {/* Heading */}
//       <div className="text-center mb-12">
//         <h2 className="text-3xl md:text-4xl font-bold">
//           {data.heading}
//         </h2>
//         <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
//           {data.subheading}
//         </p>
//       </div>

//       {/* FEATURES (purple box section) */}
//       <div className="grid md:grid-cols-3 gap-6 mb-12">
//         {data.features?.map((feature, index) => (
//           <div
//             key={index}
//             className="bg-purple-600 text-white p-6 rounded-xl"
//           >
//             {feature.icon && (
//               <Image
//                 src={feature.icon}
//                 alt={feature.title}
//                 width={40}
//                 height={40}
//                 className="mb-3"
//               />
//             )}

//             <h3 className="font-semibold text-lg">
//               {feature.title}
//             </h3>

//             <p className="text-sm text-white/80 mt-2">
//               {feature.description}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* COURSES */}
//       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {data.courses?.map((course) => (
//           <div
//             key={course._id}
//             className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
//           >
//             {/* Image */}
//             <div className="relative w-full h-48">
//               {course.image && (
//                 <Image
//                   src={course.image}
//                   alt={course.title}
//                   fill
//                   className="object-cover"
//                 />
//               )}
//             </div>

//             {/* Content */}
//             <div className="p-5">

//               {/* Category + Price */}
//               <div className="flex justify-between items-center mb-2">
//                 <span className="text-sm text-blue-600 font-medium">
//                   {course.category}
//                 </span>
//                 <span className="text-sm font-semibold">
//                   ${course.price}
//                 </span>
//               </div>

//               {/* Title */}
//               <h3 className="font-semibold text-lg mb-2">
//                 {course.title}
//               </h3>

//               {/* Rating */}
//               <div className="text-yellow-400 text-sm mb-3">
//                 {"★".repeat(Math.round(course.rating || 0))}
//                 {"☆".repeat(5 - Math.round(course.rating || 0))}
//               </div>

//               {/* Meta */}
//               <div className="flex justify-between text-gray-500 text-sm mb-4">
//                 <span>⏱ {course.duration}</span>
//                 <span>📚 {course.lessons}</span>
//                 <span>👨‍🎓 {course.students}</span>
//               </div>

//               {/* Button */}
//               <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
//                 {course.ctaText || "Join Course"}
//               </button>

//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }



"use client";

import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

type Course = {
  _id: string;
  title: string;
  category: string;
  price: number;
  rating: number;
  duration: string;
  lessons: number;
  students: number;
  ctaText?: string;
  image?: string;
};

type Feature = {
  title: string;
  description: string;
  icon?: string;
};

type TracksSectionProps = {
  heading: string;
  subheading: string;
  features: Feature[];
  courses: Course[];
};

export default function Section2({
  data,
}: {
  data: TracksSectionProps | null;
}) {
  if (!data) return null;
  console.log();

  

  return (
    <section className="py-16 px-6 md:px-12 lg:px-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          {data.heading}
        </h2>
        <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
          {data.subheading}
        </p>
      </div>

      {/* FEATURES */}
      <div className="grid md:grid-cols-3 h-[300px] gap-6 mb-12">
        {data.features?.map((feature, index) => (
          <div
            key={index}
            className="bg-purple-600 text-white p-20 rounded-xl"
          >
            {/* ICON */}
            {feature.icon ? (
              <Image
                src={urlFor(feature.icon).url()}
                alt={feature.title}
                width={40}
                height={40}
                className="mb-3 "
              />
            ) : (
              <div className="w-[40%] h-10 mb-3 bg-white/30 rounded flex items-center justify-center text-sm">
                📘
              </div>
            )}

            <h3 className="font-semibold text-lg">
              {feature.title}
            </h3>

            <p className="text-sm text-white/80 mt-2">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* COURSES */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {data.courses?.map((course) => (
          <div
            key={course._id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            {/* IMAGE */}
            <div className="relative w-full h-48 bg-gray-100">
              {course.image?.asset?._ref ? (
                <Image
                  src={urlFor(course.image.asset._ref).url()}
                  alt={course.title}
                  fill
                  className="object-cover h-[40%] w-full"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                  No Image Available
                </div>
              )}
            </div>

            {/* CONTENT */}
            <div className="p-5">
              {/* Category + Price */}
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-blue-600 font-medium">
                  {course.category}
                </span>
                <span className="text-sm font-semibold">
                  ${course.price}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg mb-2">
                {course.title}
                sdfghjk
              </h3>

              {/* Rating */}
              <div className="text-yellow-400 text-sm mb-3">
                {"★".repeat(Math.round(course.rating || 0))}
                {"☆".repeat(5 - Math.round(course.rating || 0))}
              </div>

              {/* Meta */}
              <div className="flex justify-between text-gray-500 text-sm mb-4">
                <span>⏱ {course.duration}</span>
                <span>📚 {course.lessons}</span>
                <span>👨‍🎓 {course.students}</span>
              </div>

              {/* Button */}
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                {course.ctaText || "Join Course"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}