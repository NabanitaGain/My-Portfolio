import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/**
 * MunchMood – Snack Subscription Platform – Detail Page
 * Swap the placeholder screenshot URLs with real images when available.
 */
export default function MunchMoodDetails() {
  const screenshots = [
    {
      id: 1,
      src: "https://i.ibb.co/TMPQk8yn/Screenshot-2025-06-30-184306.png", // placeholder 1
      alt: "MunchMood home screenshot",
    },
    {
      id: 2,
      src: "https://i.ibb.co/KcYb2tN7/Screenshot-2025-06-30-184212.png", // placeholder 2
      alt: "Subscription plans screenshot",
    },
    {
      id: 3,
      src: "https://i.ibb.co/Mx0MLZtH/Screenshot-2025-06-30-184230.png", // placeholder 3
      alt: "Favorites sidebar screenshot",
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
        🍱 MunchMood – Snack Subscription Platform
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
          <strong>MunchMood</strong> is a responsive web platform for subscribing to curated snack boxes. Users can browse subscription plans, manage a favourites sidebar, and enjoy a neon‑modern UI with smooth animations. React Router DOM powers page transitions while Firebase Authentication secures login with email/password and Google OAuth.
        </p>

        <h3 className="text-xl font-semibold mt-6">Key Features</h3>
        <ul>
          <li>🔐 Authentication with Firebase (Email/Password &amp; Google) + SweetAlert/Toast feedback.</li>
          <li>📦 Subscription plans (1 day, 1 week, 1 month, 6 months, special event) with simulated payments.</li>
          <li>❤️ Favourites sidebar (Add/Remove) with live total price calculation.</li>
          <li>🖼️ Framer Motion banner slider and horizontal card scroller.</li>
          <li>🌗 Theme‑aware Navbar showing user avatar + dynamic links.</li>
          <li>📱 Fully responsive layout built with Tailwind&nbsp;CSS + DaisyUI.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6">Subscription Plans &amp; Pricing</h3>
        <table>
          <thead>
            <tr>
              <th>Plan</th>
              <th>Price</th>
              <th>Discount</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1 Day</td><td>$1.00</td><td>—</td></tr>
            <tr><td>1 Week</td><td>$6.86</td><td>2 %</td></tr>
            <tr><td>1 Month 🔥</td><td>$28.50</td><td>5 %</td></tr>
            <tr><td>6 Months</td><td>$162.00</td><td>10 %</td></tr>
            <tr><td>Special Event</td><td>$0.50</td><td>50 %</td></tr>
          </tbody>
        </table>

        <h3 className="text-xl font-semibold mt-6">Tech Stack</h3>
        <table>
          <thead>
            <tr><th colSpan="2">Full Stack Overview</th></tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-semibold">Frontend</td>
              <td>React + Vite, Tailwind CSS, DaisyUI, React Router DOM, Framer Motion, SweetAlert2</td>
            </tr>
            <tr>
              <td className="font-semibold">State /Auth</td>
              <td>Context API, Firebase Auth, useContext, useReducer</td>
            </tr>
          </tbody>
        </table>

        <p className="mt-8">
          🔗 <a href="https://munch-mood-react.web.app" target="_blank" rel="noopener noreferrer">Live Demo</a>
          &nbsp;|&nbsp;
          💻 <a href="https://github.com/programming-hero-web-course1/b11a9-react-authentication-NabanitaGain" target="_blank" rel="noopener noreferrer">Repository</a>
        </p>
      </section>
    </main>
  );
}
