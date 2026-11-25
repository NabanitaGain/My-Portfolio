import React from "react";
import { MapPin, GraduationCap, Music, Plane } from "lucide-react";
import { motion } from "framer-motion";

const About = () => (
  <section
    id="about"
    style={{
      background: "linear-gradient(180deg,var(--bg-start),var(--bg-end))",
    }}
    className="min-h-[70vh] py-20 px-6 transition-colors duration-700"
  >
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-14 md:gap-20">
      <motion.div
        className="w-full space-y-6"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2
          className="text-4xl font-bold"
          style={{ color: "var(--accent-primary)" }}
        >
          About Me
        </h2>

        <p className="leading-relaxed text-lg" style={{ color: "var(--text-sub)" }}>
          Born in the river‑city of <strong>Khulna</strong> and now based in vibrant <strong>Dhaka</strong>, I
          craft meaningful digital experiences that combine creativity and logic. My journey into
          tech began during my diploma years, igniting a deep curiosity for building impactful
          software solutions.
        </p>

        <p className="leading-relaxed text-lg" style={{ color: "var(--text-sub)" }}>
          I’m currently pursuing my <strong>B.Sc. in Computer Science &amp; Engineering</strong> at Daffodil
          International University. I love working on projects that solve real problems—whether
          it’s a streamlined tool or a full-stack platform—especially when it involves teamwork and
          smart time management.
        </p>

        <p className="leading-relaxed text-lg" style={{ color: "var(--text-sub)" }}>
           Off-screen, you’ll find me exploring new places or curating mood‑boosting playlists. I
          believe in balancing hard skills with soulful living—travel keeps me curious, and music
          keeps me grounded.
        </p>

        {/* Career Objectives */}
        <div className="mt-8">
          <h3
            className="text-2xl font-bold mb-4"
            style={{ color: "var(--accent-primary)" }}
          >
            Career Objectives
          </h3>

          <ol
            className="list-decimal pl-6 space-y-2 text-lg"
            style={{ color: "var(--text-sub)" }}
          >
            <li>Complete my B.Sc. in CSE.</li>

            <li>Develop professional technical skills.</li>

            <li>Gain practical industry experience.</li>

            <li>Build a career in Cloud and Cybersecurity.</li>
          </ol>
        </div>
        {/* Quick facts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-base">
          {[
            { Icon: MapPin, txt: "Dhaka, Bangladesh" },
            { Icon: GraduationCap, txt: "B.Sc. CSE, DIU (Final Semester)" },
            { Icon: Music, txt: "Music lover & playlist curator" },
            { Icon: Plane, txt: "Travel enthusiast" },
          ].map(({ Icon, txt }) => (
            <div key={txt} className="flex items-center gap-3">
              <Icon size={20} style={{ color: "var(--accent-primary)" }} />
              <span>{txt}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
