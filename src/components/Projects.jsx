import { motion } from "framer-motion";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import project4 from "../assets/images/project4.png";
import project5 from "../assets/images/project5.png";
import project6 from "../assets/images/project6.png";
import project7 from "../assets/images/project7.png";
import project8 from "../assets/images/project8.png";
import project9 from "../assets/images/project9.png";
import project10 from "../assets/images/project10.png";
import project11 from "../assets/images/project11.png";
import project12 from "../assets/images/project12.png";

const Projects = () => {
  // Project data with your specific information
  const projects = [
    {
      id: 1,
      title: "Narada Bot",
      description:
        "Discord bot integrated with Google Calendar, featuring Moto Synk for auto-syncing, Skudule for smart scheduling, and Simplefy for streamlined.",
      technologies: ["Next JS", "Tailwind CSS", "Composeio"],
      image: project1,
      link: "https://naradabot.vercel.app/",
      github: "https://github.com/arnabpal2022/narada-bot",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "A full-stack e-commerce platform with user authentication, product catalog, and payment integration.",
      technologies: ["React", "Partical JS", "Email JS"],
      image: project6,
      link: "https://debashis-lemon.vercel.app/",
      github: "https://github.com/Debashis7307",
    },
    {
      id: 3,
      title: "HACKAUT Website",
      description:
        "A productivity application for managing tasks with drag-and-drop functionality and team collaboration.",
      technologies: ["React", "Email JS", "Framer Motion"],
      image: project10,
      link: "https://debashis-lemon.vercel.app/",
      github: "https://github.com/Debashis7307",
    },
    {
      id: 4,
      title: "Flappy Bird Game",
      description:
        "A weather application that displays current and forecasted weather data for any location worldwide.",
      technologies: ["JavaScript", "OpenWeather API", "Chart.js"],
      image: project3,
      link: "https://debashis-lemon.vercel.app/",
      github: "https://github.com/Debashis7307",
    },
    {
      id: 5,
      title: "Hand Traker",
      description:
        "A weather application that displays current and forecasted weather data for any location worldwide.",
      technologies: ["JavaScript", "OpenWeather API", "Chart.js"],
      image: project4,
      link: "https://debashis-lemon.vercel.app/",
      github: "https://github.com/Debashis7307",
    },
    {
      id: 6,
      title: "AudioWarp",
      description:
        "A personal portfolio website built with React and Tailwind CSS to showcase my skills and projects.",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      image: project2,
      link: "https://debashis-lemon.vercel.app/",
      github: "https://github.com/Debashis7307",
    },
    {
      id: 7,
      title: "Weather Dashboard",
      description:
        "A weather application that displays current and forecasted weather data for any location worldwide.",
      technologies: ["JavaScript", "OpenWeather API", "Chart.js"],
      image: project7,
      link: "https://debashis-lemon.vercel.app/",
      github: "https://github.com/Debashis7307",
    },
    {
      id: 8,
      title: "Clock",
      description:
        "A weather application that displays current and forecasted weather data for any location worldwide.",
      technologies: ["JavaScript", "OpenWeather API", "Chart.js"],
      image: project8,
      link: "https://debashis-lemon.vercel.app/",
      github: "https://github.com/Debashis7307",
    },
    {
      id: 9,
      title: "Calculator",
      description:
        "A weather application that displays current and forecasted weather data for any location worldwide.",
      technologies: ["JavaScript", "OpenWeather API", "Chart.js"],
      image: project5,
      link: "https://debashis-lemon.vercel.app/",
      github: "https://github.com/Debashis7307",
    },
    {
      id: 10,
      title: "Proposal Accepter",
      description:
        "A weather application that displays current and forecasted weather data for any location worldwide.",
      technologies: ["JavaScript", "OpenWeather API", "Chart.js"],
      image: project9,
      link: "https://debashis-lemon.vercel.app/",
      github: "https://github.com/Debashis7307",
    },
    {
      id: 11,
      title: "Vertual Whiteboard",
      description:
        "A weather application that displays current and forecasted weather data for any location worldwide.",
      technologies: ["JavaScript", "OpenWeather API", "Chart.js"],
      image: project11,
      link: "https://debashis-lemon.vercel.app/",
      github: "https://github.com/Debashis7307",
    },
    {
      id: 12,
      title: "Comtability Checker",
      description:
        "A weather application that displays current and forecasted weather data for any location worldwide.",
      technologies: ["JavaScript", "OpenWeather API", "Chart.js"],
      image: project12,
      link: "https://debashis-lemon.vercel.app/",
      github: "https://github.com/Debashis7307",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl mt-4 text-gray-300">
            Here are some of my recent works
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 0.9 }}
              whileInView={{ opacity: 1, y: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden border-3 border-gray-700"
              style={{
                background:
                  "linear-gradient(35deg, rgba(44, 84, 175, 0.7) 0%, rgba(1, 1, 13, 0.7) 50%)",
                padding: "0",
                textAlign: "center",
                transform: "perspective(1000px) rotateX(3deg) scale(1)",
                transition: "transform 0.5s, box-shadow 0.5s",
                boxShadow:
                  "-8px -8px 15px rgba(255,255,255,0.1), 10px 10px 15px rgba(0,0,0,0.8)",
                zIndex: 1,
              }}
              whileHover={{
                transform: "perspective(1000px) rotateY(-15deg) scale(1.04)",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)",
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-blue-400 to-blue-800 opacity-20 blur-lg -z-10 -m-1"
                style={{
                  transition: "all 0.5s",
                }}
              />

              <div
                className="h-48 overflow-hidden group"
                style={{ padding: 0, margin: 0, width: "100%" }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-110"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "fill",
                    display: "block",
                    margin: 0,
                    padding: 0,
                    minWidth: "100%",
                    minHeight: "100%",
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4 ">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm shadow-[-8px_-8px_15px_rgba(255,255,255,0.1),10px_10px_15px_rgba(0,0,0,0.7)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 justify-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full font-medium transition-colors"
                    style={{
                      background: "#1C1C37",
                      color: "white",
                      boxShadow:
                        "-8px -8px 15px rgba(255,255,255,0.1), 10px 10px 15px rgba(0,0,0,0.8)",
                    }}
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded font-medium transition-colors"
                    style={{
                      background: "#1C1C37",
                      color: "white",
                      boxShadow:
                        "-8px -8px 15px rgba(255,255,255,0.1), 10px 10px 15px rgba(0,0,0,0.8)",
                    }}
                  >
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
