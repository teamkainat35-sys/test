import { client } from "./client";



export async function getHeader() {

  return await client.fetch(`
     *[_type == "header"][0]{
    "logoUrl": logo.asset->url,
    "logoAlt": logo.alt,
    brandName,
    navLinks[]{
      label,
      url,
      isActive
    },
    cta{
      text,
      link
    }
  }
  `);
}


export async function getsection1() {
  return await client.fetch(` *[_type == "section1"][0]{

    // 🔹 Headline + Highlights
    headline,
    highlightWords,

    // 🔹 Description
    description,

    // 🔹 Background Image
    "backgroundImageUrl": backgroundImage.asset->url,
    "backgroundImageAlt": backgroundImage.alt,

    // 🔹 Right Image
    "sideImageUrl": sideImage.asset->url,
    "sideImageAlt": sideImage.alt,

    // 🔹 Search
    search{
      placeholder
    },

    // 🔹 CTA Button
    cta{
      text,
      link
    }
  }`);
}



const tracksQuery = `
*[_type == "tracksSection"][0]{
  heading,
  subheading,
  features[]{
    title,
    description,
    icon
  },
  courses[]->{
    title,
    category,
    price,
    rating,
    duration,
    lessons,
    students,
    image
  }
}
`;



export async function getsection2() {
  return await client.fetch(tracksQuery);
}





export async function getSection3() {
  return await client.fetch(`*[_type == "premiumLearningSection"][0]{
    heading,
    highlightWord,
    subheading,

    "image": image.asset->url,

    features[]{
      title,
      description,
      "icon": icon.asset->url
    },

    courses[]{
      _id,
      title,
      category,
      price,
      rating,
      duration,
      lessons,
      students,
      ctaText,
      "image": image.asset->url
    }
  }`);
}



// export async function getSection4() {
//   return await client.fetch(`*[_type == "premiumLearningSection4"][0]{
//   heading,
//   highlightWord,
//   subheading,
//   features[]{
//     title,
//     description,
//     icon{
//       asset->{
//         _id,
//         url
//       }
//     }
//   },
//   testimonialSectionTitle,
//   testimonialText
// }`);
// }


export async function getSection4() {
  return await client.fetch(`*[_type == "premiumLearningSection4"][0]{
    heading,
    highlightWord,
    subheading,
    image{
      asset->{
        url
      }
    },
    features[]{
      title,
      description,
      icon{
        asset->{
          url
        }
      }
    },
    testimonialSectionTitle,
    testimonialText
  }`);
}


export async function getSection5() {
  return await client.fetch(`*[_type == "premiumLearningSection5"][0]{
  heading,
  subheading,

  testimonials[]{
    quote,
    name,
    role,
    "avatar": avatar.asset->url
  },

  settings{
    autoplay,
    autoplaySpeed,
    showDots,
    itemsDesktop,
    itemsTablet,
    itemsMobile
  }
}`);
}

export async function getSection6() {
  return await client.fetch(`*[_type == "premiumLearningSection6"][0]{
  heading,
  subheading,

  tracks[]{
    name,
    role,
    description,
    category,
    instagram,
    linkedin,

    "image": image.asset->url
  }
}`);
}

// export async function getSection7() {
//   return await client.fetch(`*[_type == "premiumLearningSection7"][0]{
//   logo{
//     asset->{
//       url
//     }
//   },
//   description,

//   links{
//     company[]{label, url},
//     courses[]{label, url},
//     support[]{label, url}
//   },

//   contact{
//     phone,
//     email,
//     address
//   },

//   copyright
// }`);
// }
 

export async function getSection7() {
  return await client.fetch(`*[_type == "premiumLearningSection7"][0]{
      logo{
        asset->{
          url
        }
      },
      description,

      company[]{
        label,
        url
      },

      courses[]{
        label,
        url
      },

      support[]{
        label,
        url
      },

      contact{
        phone,
        email,
        address
      },

      copyright
    }
  `);
}

export async function getSection8() {
  return await client.fetch(`*[_type == "page" && slug.current == $slug][0]{
  title,
  sections[]{
    ...,
    _type == "section8Newsletter" => {
      _type,
      title,
      subtitle,
      placeholder,
      buttonText,
      backgroundColor,
      textColor,
      buttonColor,
      buttonTextColor,
      decorations
    }
  }
}`)}
