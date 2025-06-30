import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/**
 * FreshTrackr – Project Detail Page
 * Replace the screenshot URLs with real project images.
 */
export default function FreshTrackrDetails() {
  const screenshots = [
    {
      id: 1,
      src: "https://i.ibb.co/fV8GW3sz/Screenshot-2025-06-30-184926.png", // placeholder
      alt: "FreshTrackr dashboard screenshot",
    },
    {
      id: 2,
      src: "https://i.ibb.co/TxT73GHt/Screenshot-2025-06-30-185025.png", // placeholder
      alt: "Add food item form screenshot",
    },
    {
      id: 3,
      src: "https://i.ibb.co/ZPqJt3c/Screenshot-2025-06-30-185054.png", // placeholder
      alt: "Expiry timeline visualization screenshot",
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 py-16 space-y-12">
      {/* ---------- navigation buttons ---------- */}
      <div className="flex justify-between flex-wrap gap-4">
        <Link
          to="/projects"
          className="inline-flex items-center gap-1 text-[#4B7BE5] hover:text-[#325AE7] font-medium"
        >
          <span className="text-lg">←</span>
          Back to Projects
        </Link>

        <Link
          to="/"
          className="inline-flex items-center gap-1 text-[#4B7BE5] hover:text-[#325AE7] font-medium"
        >
          <span className="text-lg">🏠</span>
          Back to Home
        </Link>
      </div>

      {/* ---------- title ---------- */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-extrabold text-center text-[#4B7BE5]"
      >
        FreshTrackr – Food Expiry Management App
      </motion.h1>

      {/* ---------- screenshot slider ---------- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="w-full"
      >
        <div className="carousel rounded-box shadow-lg">
          {screenshots.map((shot, idx) => (
            <div
              key={shot.id}
              id={`slide${idx + 1}`}
              className="carousel-item relative w-full"
            >
              <img src={shot.src} alt={shot.alt} className="w-full object-cover" />
              {/* nav buttons */}
              <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2">
                <a
                  href={`#slide${idx === 0 ? screenshots.length : idx}`}
                  className="btn btn-circle btn-sm bg-[#1A1A40] text-white bg-opacity-60 border-none hover:bg-[#4B7BE5]"
                >
                  ❮
                </a>
                <a
                  href={`#slide${idx + 2 > screenshots.length ? 1 : idx + 2}`}
                  className="btn btn-circle btn-sm bg-[#1A1A40] text-white bg-opacity-60 border-none hover:bg-[#4B7BE5]"
                >
                  ❯
                </a>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ---------- project description ---------- */}
      <section className="prose max-w-none dark:prose-invert">
        <h2 className="text-2xl font-bold mb-3">Project Overview</h2>
        <p>
          <strong>FreshTrackr</strong> is a full‑stack web application that helps users track food expiry dates, reduce waste, and receive smart recycling suggestions. It offers a clean neon‑modern UI built with React, Tailwind&nbsp;CSS, and DaisyUI, backed by a secure Node&nbsp;+&nbsp;Express&nbsp;+&nbsp;MongoDB API with JWT protection.
        </p>

        <h3 className="text-xl font-semibold mt-6">Core Features</h3>
        <ul>
          <li>📦 Add and manage food items with expiry dates, images, quantity, and category.</li>
          <li>⏳ Smart countdown with colored status indicators for near/over‑due items.</li>
          <li>📝 Private notes for each item; only the owner can manage them.</li>
          <li>🔍 Search / filter by category or keyword; automatic expired‑item detection.</li>
          <li>♻️ Educational recycle guide &amp; embedded videos.</li>
          <li>🔐 Email/Password &amp; Google authentication (Firebase) + JWT‑secured routes.</li>
          <li>📱 Fully responsive design with Framer Motion micro‑animations.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6">Tech Stack</h3>
        <table>
          <thead>
            <tr>
              <th>Frontend</th>
              <th>Backend</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>React&nbsp;+&nbsp;Vite, Tailwind&nbsp;CSS, DaisyUI</td>
              <td>Node.js, Express.js, MongoDB (Mongoose)</td>
            </tr>
            <tr>
              <td>Framer Motion, React Router DOM, Axios</td>
              <td>Firebase Admin SDK (JWT)</td>
            </tr>
            <tr>
              <td>Context API / local state</td>
              <td>Cookie‑based JWT middleware, CORS, dotenv, Helmet</td>
            </tr>
          </tbody>
        </table>

        <h3 className="text-xl font-semibold mt-6">Backend Highlights</h3>
        <ul>
          <li>🍱 Food CRUD APIs linked to user email.</li>
          <li>📝 Note system with creator‑only permissions.</li>
          <li>🧹 Automatic expiry filtering for waste‑awareness.</li>
          <li>🛡️ Secure JWT auth stored in HTTP‑only cookies.</li>
          <li>🌐 CORS + Helmet for hardened security; deployed on Render/Railway.</li>
        </ul>

        <p className="mt-8">
          🔗 <a href="https://freshtrackr.web.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
          &nbsp;|&nbsp;
          💻 <a href="https://github.com/Programming-Hero-Web-Course4/b11a11-client-side-NabanitaGain" target="_blank" rel="noopener noreferrer">Client Repo</a>
          &nbsp;|&nbsp;
          🗄️ <a href="https://github.com/Programming-Hero-Web-Course4/b11a11-server-side-NabanitaGain" target="_blank" rel="noopener noreferrer">Server Repo</a>
        </p>
      </section>
    </main>
  );
}
