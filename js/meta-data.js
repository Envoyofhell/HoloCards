// Variables for shared properties
const charset = "UTF-8";
const viewport = "width=device-width, initial-scale=1.0";
const author = "EnvoyOfHell";
const canonical = "https://envoyofhell.github.io/HoloCards/";
const description = "A portfolio of Holo cards designed";
const sharedImage = "https://cdn.discordapp.com/attachments/1218278500516237352/1220075858107039816/og.png?ex=660d9f30&is=65fb2a30&hm=413dbab8bfc45b48ccfda834e6aa1bde2eb0cde46e524d0a66b577372561d7a7&";
const ogTitle = "The Realm's Holo Cards";

// Object containing header information
const headerInfo = {
  meta: {
    //------- Base Meta Tags -------
    charset,
    viewport,
    author,
    description,
    canonical,
    thumbnail: "thumb.png",
    //------- Essential META Tags -------
    og: {
      url: canonical,
      title: ogTitle, // OG title
      type: "website",
      image: sharedImage, // OG image
      imageWidth: "1200",
      imageHeight: "630",
      description: description, // OG description
      siteName: ogTitle // OG site name
    },
    //------- Twitter Data Tags -------
    twitter: {
      title: ogTitle, // Twitter title
      description: description, // Twitter description
      imageAlt: description, // Twitter image alt
      image: sharedImage, // Twitter image
      site: "@EntropixTv",
      card: "summary_large_image"
    }
  },
     //------- Links and Misc -------
  link: [
    { rel: "canonical", href: canonical },
    { rel: "icon", href: "favicon.png" },
  ]
  
};document.addEventListener('DOMContentLoaded', function() {
    // Set the page title dynamically
    document.getElementById('pageTitle').innerText = headerInfo.meta.og.title;
  });