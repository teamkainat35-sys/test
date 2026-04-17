// "use client";

// type Section8Props = {
//   data: {
//     title: string;
//     subtitle?: string;
//     placeholder?: string;
//     buttonText: string;
//     backgroundColor?: string;
//     textColor?: string;
//     buttonColor?: string;
//     buttonTextColor?: string;
//     decorations?: {
//       showCircles?: boolean;
//       showArrow?: boolean;
//       showBulb?: boolean;
//     };
//   };
// };

// export default function Section8({ data }: Section8Props) {
//   const {
//     title,
//     subtitle,
//     placeholder = "Email Address",
//     buttonText,
//     backgroundColor = "#4B2C5E",
//     textColor = "#FFFFFF",
//     buttonColor = "#FF7A1A",
//     buttonTextColor = "#FFFFFF",
//     decorations,
//   } = data;

//   return (
//     <section className="w-full py-16 px-4">
//       <div
//         className="max-w-5xl mx-auto rounded-2xl relative overflow-hidden px-6 py-12 text-center"
//         style={{ backgroundColor, color: textColor }}
//       >
//         {/* Decorative Circles */}
//         {decorations?.showCircles && (
//           <>
//             <div className="absolute -top-10 -left-10 w-40 h-40 border border-white/40 rounded-full" />
//             <div className="absolute top-0 left-10 w-52 h-52 border border-white/30 rounded-full" />
//             <div className="absolute -top-10 -right-10 w-40 h-40 border border-white/40 rounded-full" />
//           </>
//         )}

//         {/* Content */}
//         <h2 className="text-2xl md:text-3xl font-semibold mb-2">
//           {title}
//         </h2>

//         {subtitle && (
//           <p className="text-sm md:text-base opacity-80 mb-6">
//             {subtitle}
//           </p>
//         )}

//         {/* Input + Button */}
//         <div className="flex items-center justify-center max-w-xl mx-auto bg-white rounded-full overflow-hidden">
//           <input
//             type="email"
//             placeholder={placeholder}
//             className="flex-1 px-4 py-3 text-gray-700 outline-none"
//           />
//           <button
//             className="px-6 py-3 font-medium rounded-full"
//             style={{
//               backgroundColor: buttonColor,
//               color: buttonTextColor,
//             }}
//           >
//             {buttonText}
//           </button>
//         </div>

//         {/* Arrow Decoration */}
//         {decorations?.showArrow && (
//           <div className="absolute bottom-6 left-6 text-orange-400 text-3xl">
//             ↺
//           </div>
//         )}

//         {/* Bulb Decoration */}
//         {decorations?.showBulb && (
//           <div className="absolute bottom-6 right-10 text-yellow-300 text-3xl">
//             💡
//           </div>
//         )}
//       </div>
//     </section>
//   );


export default function Footer() {
  return (
    <footer className="bg-[#f7f1ea] pt-12 px-6">

      {/* TOP GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* COLUMN 1 */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="text-purple-900 text-2xl font-bold">📘</div>
            <h2 className="text-xl font-bold">Book Store</h2>
          </div>

          <p className="text-sm text-gray-700 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy a type specimen book.
          </p>

          {/* CONTACT INFO */}
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Contact Info</h3>

            <p className="text-sm text-gray-700">+0913-705-3875</p>
            <p className="text-sm text-gray-700">Elizabeth@jourrapide.com</p>

            <p className="text-sm text-gray-700 mt-2">
              4808 Skinner Hollow Road <br />
              Days Creek, OR 97429
            </p>
          </div>
        </div>

        {/* COLUMN 2 */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>About Us</li>
            <li>How to work?</li>
            <li>Popular Course</li>
            <li>Service</li>
          </ul>
        </div>

        {/* COLUMN 3 */}
        <div>
          <h3 className="font-semibold mb-4">Courses</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Categories</li>
            <li>Offline Course</li>
            <li>Video Course</li>
          </ul>
        </div>

        {/* COLUMN 4 */}
        <div>
          <h3 className="font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>FAQ</li>
            <li>Help Center</li>
            <li>Career</li>
            <li>Privacy</li>
          </ul>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t mt-10 py-4 text-center text-sm text-gray-600">
        BookStore All Right Reserved, 2022
      </div>

    </footer>
  );
}