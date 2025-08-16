import imgs from "/img";
import Portfolio from "/img/Portfolio.png";
import WeatherApp from "/img/WeatherApp.png";
import ChatApp from "/img/ChatApp.png";
import Natours from "/img/Natours.png";
import NatoursArko from "/img/NatoursArko.png";

export const Projects = [
  {
    img: `${Portfolio}`,
    name: "Portfolio",
    description: "My portfolio website built with Reactjs and TailwindCSS.",
    link: "https://github.com/apilbasnet/Portfolio",
  },
  {
    img: `${NatoursArko}`,
    name: "Natours",
    description:
      "A RESTful API for a tour-booking service using Node.js, Express, and MongoDB",
    link: "https://github.com/apilbasnet/Natours",
  },
  {
    img: `${ChatApp}`,
    name: "Chat App",
    description: "Chat App built with Socket.io",
    link: "https://github.com/apilbasnet/chat-socket.io",
  },
  {
    img: `${WeatherApp}`,
    name: "Weather-App",
    description:
      "Built with Next.js and TailwindCSS that utilizes multiple APIs.",
    link: "https://github.com/apilbasnet/weather-app",
  },
];
