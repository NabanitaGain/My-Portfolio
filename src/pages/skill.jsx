import React from "react";
import { motion } from "framer-motion";
import {
  SiC, SiPython, SiJavascript, SiOracle, SiReact, SiVite,
  SiMongodb, SiNodedotjs, SiHtml5, SiCss3, SiTailwindcss,
  SiDaisyui, SiMysql, SiCplusplus,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

/* ব্র্যান্ড‑কালার আইকন তালিকা */
const skills = [
  { name: "HTML",         icon: <SiHtml5 size={32}   color="#E34F26" /> },
  { name: "CSS",          icon: <SiCss3 size={32}    color="#2965F1" /> },
  { name: "JavaScript",   icon: <SiJavascript size={32} color="#F0DB4F" /> },
  { name: "React",        icon: <SiReact size={32}   color="#61DAFB" /> },
  { name: "Vite",         icon: <SiVite size={32}    color="#646CFF" /> },
  { name: "MongoDB",      icon: <SiMongodb size={32} color="#47A248" /> },
  { name: "Node.js",      icon: <SiNodedotjs size={32} color="#83CD29" /> },
  { name: "Tailwind",     icon: <SiTailwindcss size={32} color="#38B2AC" /> },
  { name: "DaisyUI",      icon: <SiDaisyui size={32} color="#47C6AC" /> },
  { name: "MySQL",        icon: <SiMysql size={32}   color="#4479A1" /> },
  { name: "Oracle",       icon: <SiOracle size={32}  color="#F80000" /> },
  { name: "C",            icon: <SiC size={32} color="#A8B9CC" /> },
  { name: "Python",       icon: <SiPython size={32} color="#306998" /> },
  { name: "Java",         icon: <FaJava size={32}    color="#007396" /> },
  { name: "Data Structure", icon: <SiCplusplus size={32} color="#00599C" /> },
];

const SkillsCards = () => (
  <section
    id="skills"
    /* সেকশন‑ব্যাকগ্রাউন্ড গ্রেডিয়েন্ট — সাইট‑ওয়াইড ভ্যারিয়েবল */
    style={{
      background: "linear-gradient(135deg,var(--bg-start),var(--bg-end))",
    }}
    className="w-full py-16 transition-colors duration-700"
  >
    <div className="max-w-[1200px] mx-auto px-6">
      <h2
        className="text-4xl font-bold mb-12 ml-[-45px]"
        style={{ color: "var(--accent-primary)" }}
      >
        My Skills
      </h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
        {skills.map(({ name, icon }) => (
          <motion.div
            key={name}
            className="
              rounded-lg p-4 flex flex-col items-center justify-center
              shadow-sm hover:shadow-lg cursor-default select-none
              transition-shadow duration-300
            "
            style={{
              background: "var(--icon-bg)",
              color: "var(--icon-text)",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "var(--icon-bg-hover)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "var(--icon-bg)")
            }
          >
            <div className="mb-2">{icon}</div>
            <span className="text-sm font-medium">{name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsCards;
