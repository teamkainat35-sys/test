



import { type SchemaTypeDefinition } from "sanity";


import header from "./heading";
import section1 from "./section1";
import { tracksSection } from "./tracksSection";
import { course } from "./course";
import section3 from "./section3";
import section4 from "./section4";
import section5 from "./section5";
import section6 from "./section6";
import section7 from "./section7";
import section8 from "./section8";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [header,section1,tracksSection,course,section3,section4,section5,section6,section7,section8],
};    


