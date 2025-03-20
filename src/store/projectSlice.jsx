import { createSlice } from "@reduxjs/toolkit";

const initialProductState = {
  projects : [
    {
      name : "Spartax - Sports Wear Ecommerce Website",
      imageUrl : "/images/sports_wear.png",
      description : "Elevate your game with our sports wear website's stylish and functional athletic apparel.",
      tools : ["Next.js", "Firebase", "TailwindCSS", "Redux Toolkit", "framer motion"],
      github_link : "https://github.com/abimbola7/sports-wear",
      live_site : "https://sports-wear-gamma.vercel.app/"
    },
    {
      name : "ConceptZilla Landing Page – GSAP Animated Clone",
      imageUrl : "/images/conceptzilla.png",
      description : "A clone of the ConceptZilla landing page, featuring smooth GSAP animations for engaging motion effects. Built with Next.js and Tailwind CSS, this project showcases interactive scroll-based transitions and optimized performance for a seamless user experience.",
      tools : ["Next.js", "GSAP", "TailwindCSS"],
      // github_link : "https://github.com/abimbola7/sports-wear",
      live_site : "https://conceptzilla.vercel.app/"
    },
    {
      name : "useGalaxyFi Waitlist Site – Interactive Fintech UI",
      imageUrl : "/images/usegalaxyfi.png",
      description : "A modern and responsive fintech waitlist website built with Next.js and Tailwind CSS. Designed for a seamless user experience, it features an intuitive subscription flow, allowing users to easily join the waitlist. Optimized for performance and accessibility.",
      tools : ["Next.js", "TailwindCSS", "Typescript", "Tsparticles"],
      // github_link : "https://github.com/abimbola7/sports-wear",
      live_site : "https://usegalaxyfi.com/"
    },
    {
      name : "AI Support Chatbot UI – Real-time Interactive Frontend",
      imageUrl : "/images/chatbot.png",
      description : "A dynamic and responsive AI chatbot interface built for a client using React, Socket.io, and GSAP. Features real-time messaging, smooth animations, and an intuitive user experience. While I don’t have access to the backend or repository, I developed the entire frontend, ensuring seamless interaction and performance.",
      tools : ["Next.js", "Socket.io", "TailwindCSS", "GSAP"],
      // github_link : "https://github.com/abimbola7/sports-wear",
      // live_site : "https://sports-wear-gamma.vercel.app/"
    },
    {
      name : "Support & Prospecting Chatbot Dashboard – Subscription & Billing Management",
      imageUrl : "/images/dashboard.png",
      description : "A robust admin dashboard for managing chatbot subscriptions and billing, built with React.js, Tailwind CSS, and Stripe API. Features include user subscription tracking, plan management, and secure payment processing. Designed for efficiency and ease of use.",
      tools : ["React.js", "Stripe API", "TailwindCSS", "GSAP"],
      // github_link : "https://github.com/abimbola7/sports-wear",
      // live_site : "https://sports-wear-gamma.vercel.app/"
    },
    {
      name : "Art Website",
      imageUrl : "/images/psharing.png",
      description : "Post artworks for other artists to view, like and comment.",
      tools : ["Next.js", "React", "TailwindCSS", "MonogoDB", "Firebase", "Shadcn"],
      github_link : "https://github.com/abimbola7/photo-sharing-app",
      live_site : "https://art-nook.vercel.app/"
    },
    {
      name : "Spotify Api",
      imageUrl : "/images/spotify.png",
      description : "View my currently playing song or my last listened song depending on my status.",
      tools : ["Next.js", "TailwindCSS", "Spotify API"],
      github_link : "https://github.com/abimbola7/spotify-api",
      live_site : "https://spotify-api-nu-two.vercel.app"
    },
    // {
    //   name : "REST Countries API with color theme switcher",
    //   imageUrl : "/images/rest_country.png",
    //   description : "This is a solution to the REST Countries API with color theme switcher challenge on Frontend Mentor.",
    //   tools : ["Next.js", "TailwindCSS"],
    //   github_link : "https://github.com/abimbola7/rest-country-api",
    //   live_site : "https://rest-country-api-abimbola7.vercel.app/"
    // },
    // {
    //   name : "IMDB Clone",
    //   imageUrl : "/images/imdb.png",
    //   description : "Provides the latest news, reviews and trailers.",
    //   tools : ["Next.js", "TailwindCSS", "TMDB API"],
    //   github_link : "https://github.com/abimbola7/IMDb-Clone",
    //   live_site : "https://imdb-clone-abimbola7.vercel.app/"
    // },
    {
      name : "bb8 driod",
      imageUrl : "/images/BB8.png",
      description : "Caught my eye when watching Star Wars: The Force Awakens so I decided to design it.",
      tools : ["HTML", "CSS"],
      github_link : "https://github.com/abimbola7/Star-Wars-BB8",
      live_site : "https://abimbola7.github.io/Star-Wars-BB8/"
    },
    // {
    //   name : "Insta Clone",
    //   imageUrl : "/images/insta-clone.png",
    //   description : "Create a new post, like, comment and also delete a post or a comment.",
    //   tools : ["Next.js", "Firebase", "TailwindCSS", "Atom"],
    //   github_link : "https://github.com/abimbola7/insta-clone",
    //   live_site : "https://insta-clone-ipbz.vercel.app/"
    // },
    // {
    //   name : "Interactive Comment Section",
    //   imageUrl : "/images/comment.png",
    //   description : "This is a solution to the Interactive comments section challenge on Frontend Mentor.",
    //   tools : ["React.js", "TailwindCSS", "Redux Toolkit"],
    //   github_link : "https://github.com/abimbola7/interactive-comment-section",
    //   live_site : "https://abimbola7.github.io/interactive-comment-section/"
    // },
  ]
} 

const projectSlice = createSlice({
  name : "projects",
  initialState : initialProductState,
  reducers : {}
})

export default projectSlice.reducer;