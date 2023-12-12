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
      name : "Spotify Api",
      imageUrl : "/images/spotify.png",
      description : "View my currently playing song or my last listened song depending on my status.",
      tools : ["Next.js", "TailwindCSS", "Spotify API"],
      github_link : "https://github.com/abimbola7/spotify-api",
      live_site : "https://spotify-api-nu-two.vercel.app"
    },
    {
      name : "REST Countries API with color theme switcher",
      imageUrl : "/images/rest_country.png",
      description : "This is a solution to the REST Countries API with color theme switcher challenge on Frontend Mentor.",
      tools : ["Next.js", "TailwindCSS"],
      github_link : "https://github.com/abimbola7/rest-country-api",
      live_site : "https://rest-country-api-abimbola7.vercel.app/"
    },
    {
      name : "IMDB Clone",
      imageUrl : "/images/imdb.png",
      description : "Provides the latest news, reviews and trailers.",
      tools : ["Next.js", "TailwindCSS", "TMDB API"],
      github_link : "https://github.com/abimbola7/IMDb-Clone",
      live_site : "https://imdb-clone-abimbola7.vercel.app/"
    },
    {
      name : "bb8 driod",
      imageUrl : "/images/BB8.png",
      description : "Caught my eye when watching Star Wars: The Force Awakens so I decided to design it.",
      tools : ["HTML", "CSS"],
      github_link : "https://github.com/abimbola7/Star-Wars-BB8",
      live_site : "https://abimbola7.github.io/Star-Wars-BB8/"
    },
    {
      name : "Insta Clone",
      imageUrl : "/images/insta-clone.png",
      description : "Create a new post, like, comment and also delete a post or a comment.",
      tools : ["Next.js", "Firebase", "TailwindCSS", "Atom"],
      github_link : "https://github.com/abimbola7/insta-clone",
      live_site : "https://insta-clone-ipbz.vercel.app/"
    },
    {
      name : "Interactive Comment Section",
      imageUrl : "/images/comment.png",
      description : "This is a solution to the Interactive comments section challenge on Frontend Mentor.",
      tools : ["React.js", "TailwindCSS", "Redux Toolkit"],
      github_link : "https://github.com/abimbola7/interactive-comment-section",
      live_site : "https://abimbola7.github.io/interactive-comment-section/"
    },
  ]
} 

const projectSlice = createSlice({
  name : "projects",
  initialState : initialProductState,
  reducers : {}
})

export default projectSlice.reducer;