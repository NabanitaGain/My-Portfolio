/* Projects.jsx */
import React from "react";
import { FiExternalLink, FiInfo } from "react-icons/fi";
import { FaGithub, FaServer } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "BidBasket – Place your bid, grab your task",
    subtitle: "Task marketplace web application",
    description:
      "BidBasket is a modern task marketplace web application where clients can post tasks and freelancers can place bids. It supports full task management, user authentication, real-time bidding, and a rich interactive UI.",
    tags: ["React", "Firebase", "Node.js", "MongoDB"],
    image: "https://i.ibb.co/3QV8Gpv/Screenshot-2025-06-30-151721.png",
    links: {
      preview: "https://bidbaskettask.web.app/",
      client:
        "https://github.com/NabanitaGain/BidBasket---Modern-task-marketplace-web-application",
      server: "https://github.com/NabanitaGain/BidBasket-Server-Side",
      details: "project/bidbasket",
    },
  },
  {
    id: 2,
    title: "FreshTrackr – Food Expiry Management App",
    subtitle: "Modern full‑stack web application",
    description:
      "FreshTrackr helps users track food expiry, reduce waste, and get smart recycling suggestions with an engaging UI and personalized insights.",
    tags: ["React", "Node.js", "Vite", "MongoDB", "JWT"],
    image: "https://i.ibb.co/nsQWVTk9/Screenshot-2025-06-30-152219.png",
    links: {
      preview: "https://freshtrackr.web.app/",
      client: "https://github.com/NabanitaGain/FreshTrackr-Food-Expiry-Management-App",
      server: "#",
      details: "project/freshtrackr",
    },
  },
  {
    id: 3,
    title: "MunchMood – Snack Subscription Platform",
    subtitle: "Crave. Unbox. Repeat.",
    description:
      "MunchMood lets users subscribe to curated snack boxes, explore plans, and manage favourites with a lively React + Tailwind UI.",
    tags: ["React", "Firebase", "TailwindCSS", "DaisyUI"],
    image: "https://i.ibb.co/Y7Qj8kyQ/Screenshot-2025-06-30-151102.png",
    links: {
      preview: "https://munch-mood-react.web.app/",
      client: "https://github.com/NabanitaGain/MunchMood---Snack-Subscription-Platform",
      details: "project/munchmood",
    },
  },
];

/* ---------- helper to pick icon & render button ---------- */
const renderLinkButton = (key, url) => {
  const icons = {
    preview: <FiExternalLink size={16} />,
    client:  <FaGithub size={16} />,
    server:  <FaServer size={16} />,
    details: <FiInfo size={16} />,
  };

  return (
    <a
      key={key}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-flex items-center gap-2 px-5 py-2 rounded-lg font-semibold text-sm
        transition-colors duration-300
        bg-[#A3E4DB] text-[#1A1A40] hover:bg-[#5AC8FA] hover:text-[#1A1A40]
        dark:bg-[#325AE7] dark:text-black dark:hover:bg-[#5AC8FA] dark:hover:text-black
      "
      style={{ textTransform: 'capitalize' }}
    >
      {icons[key]} {key}
    </a>
  );
};

const Projects = () => (
  <section
    id="projects"
    className="max-w-7xl mx-auto px-6 py-12 flex flex-col gap-12"
  >
    {/* Headline */}
    <h2
        className="text-4xl font-bold mb-12"
        style={{ color: "var(--accent-primary)" }}
      >
        Projects
      </h2>

    {projects.map((project) => (
      <div
        key={project.id}
        className="
          bg-white dark:bg-[#1A1A40] rounded-xl shadow-md border border-gray-200
          hover:shadow-xl transition-shadow duration-300
          overflow-hidden flex flex-col md:flex-row
        "
      >
        {/* Image */}
        <div className="md:flex-1 p-4">
          <img
            src={project.image}
            alt={project.title}
            className="rounded-lg object-cover w-full h-48 md:h-full"
          />
        </div>

        {/* Content */}
        <div className="md:flex-1 p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-[#4B7BE5] mb-1">
              {project.title}
            </h3>
            <p className="italic text-[#333333] dark:text-gray-300 mb-3">
              {project.subtitle}
            </p>
            <p className="text-[#4A4A4A] dark:text-gray-400 mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="
                    bg-[#A3E4DB] text-[#1A1A40] 
                    dark:bg-[#4B7BE5] dark:text-black
                    text-sm font-medium px-3 py-1 rounded-full select-none
                  "
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mt-6">
            {Object.entries(project.links).map(([key, url]) =>
              renderLinkButton(key, url)
            )}
          </div>
        </div>
      </div>
    ))}
  </section>
);

export default Projects;
