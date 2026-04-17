

// "use client";

// import { useEffect, useState } from "react";
// import Header from "./components/header";
// import Section1 from "./components/section1";
// import Section2 from "./components/section2";
// import Section3 from "./components/section3";
// import Section4 from "./components/section4";
// import Section5 from "./components/section5";

// import { 
//   getsection2, 
//   getSection3, 
//   getSection4,
//   getSection5   // 👈 add this
// } from "@/sanity/lib/queries";

// export default function Page() {
//   const [data, setData] = useState(null);
//   const [data1, setData1] = useState(null);
//   const [data2, setData2] = useState(null);
//   const [data3, setData3] = useState(null);

//   useEffect(() => {
//     getsection2().then(setData);
//     getSection3().then(setData1);
//     getSection4().then(setData2);
//     getSection5().then(setData3);
//   }, []);

//   return (
//     <main>
//       <Header />
//       <Section1 />

//       {data && <Section2 data={data} />}
//       {data1 && <Section3 data={data1} />}
//       {data2 && <Section4 data={data2} />}
//       {data3 && <Section5 data={data3} />}
//     </main>
//   );
// }


// "use client";

// import { useEffect, useState } from "react";
// import Header from "./components/header";
// import Section1 from "./components/section1";
// import Section2 from "./components/section2";
// import Section3 from "./components/section3";
// import Section4 from "./components/section4";
// import Section5 from "./components/section5";
// import Section6 from "./components/section6"; 


// import { 
//   getsection2, 
//   getSection3, 
//   getSection4,
//   getSection5,
//   getSection6  
  
// } from "@/sanity/lib/queries";

// export default function Page() {
//   const [data, setData] = useState(null);
//   const [data1, setData1] = useState(null);
//   const [data2, setData2] = useState(null);
//   const [data3, setData3] = useState(null);
//   const [data4, setData4] = useState(null); // 👈 new state

//   useEffect(() => {
//     getsection2().then(setData);
//     getSection3().then(setData1);
//     getSection4().then(setData2);
//     getSection5().then(setData3);
//     getSection6().then(setData4); // 👈 fetch section6
//   }, []);

//   return (
//     <main>
//       <Header />
//       <Section1 />

//       {data && <Section2 data={data} />}
//       {data1 && <Section3 data={data1} />}
//       {data2 && <Section4 data={data2} />}
//       {data3 && <Section5 data={data3} />}
//       {data4 && <Section6 data={data4} />} {/* 👈 render */}
//     </main>
//   );
// }


// "use client";

// import { useEffect, useState } from "react";
// import Header from "./components/header";
// import Section1 from "./components/section1";
// import Section2 from "./components/section2";
// import Section3 from "./components/section3";
// import Section4 from "./components/section4";
// import Section5 from "./components/section5";
// import Section6 from "./components/section6";
// import Section7 from "./components/section7"; // 👈 added

// import { 
//   getsection2, 
//   getSection3, 
//   getSection4,
//   getSection5,
//   getSection6,
//   getSection7   // 👈 added
// } from "@/sanity/lib/queries";

// export default function Page() {
//   const [data, setData] = useState(null);
//   const [data1, setData1] = useState(null);
//   const [data2, setData2] = useState(null);
//   const [data3, setData3] = useState(null);
//   const [data4, setData4] = useState(null);
//   const [data5, setData5] = useState(null); // 👈 new state

//   useEffect(() => {
//     getsection2().then(setData);
//     getSection3().then(setData1);
//     getSection4().then(setData2);
//     getSection5().then(setData3);
//     getSection6().then(setData4);
//     getSection7().then(setData5); // 👈 fetch section7
//   }, []);

//   return (
//     <main>
//       <Header />
//       <Section1 />

//       {data && <Section2 data={data} />}
//       {data1 && <Section3 data={data1} />}
//       {data2 && <Section4 data={data2} />}
//       {data3 && <Section5 data={data3} />}
//       {data4 && <Section6 data={data4} />}
//       {data5 && <Section7 data={data5} />} {/* 👈 render */}

//     </main>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import Header from "./components/header";
import Section1 from "./components/section1";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
import Section4 from "./components/section4";
import Section5 from "./components/section5";
import Section6 from "./components/section6";
import Section7 from "./components/section7";
import Section8 from "./components/section8"; // ✅ added

import { 
  getsection2, 
  getSection3, 
  getSection4,
  getSection5,
  getSection6,
  getSection7,
  getSection8 // ✅ added
} from "@/sanity/lib/queries";

export default function Page() {
  const [data, setData] = useState(null);
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [data3, setData3] = useState(null);
  const [data4, setData4] = useState(null);
  const [data5, setData5] = useState(null);
  const [data6, setData6] = useState(null); // ✅ section8

  useEffect(() => {
    getsection2().then(setData);
    getSection3().then(setData1);
    getSection4().then(setData2);
    getSection5().then(setData3);
    getSection6().then(setData4);
    getSection7().then(setData5);
    getSection8().then(setData6); // ✅ fetch section8
  }, []);

  return (
    <main>
      <Header />
      <Section1 />

      {data && <Section2 data={data} />}
      {data1 && <Section3 data={data1} />}
      {data2 && <Section4 data={data2} />}
      {data3 && <Section5 data={data3} />}
      {data4 && <Section6 data={data4} />}

      {data6 && <Section8 data={data6} />} {/* 👈 before section7 */}
      {data5 && <Section7 data={data5} />}

    </main>
  );
}



