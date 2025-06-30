import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function BidBasketDetails() {
  const screenshots = [
    {
      id: 1,
      src: "https://i.ibb.co/11nRCQC/Screenshot-2025-06-30-181307.png",
      alt: "BidBasket home page screenshot",
    },
    {
      id: 2,
      src: "https://i.ibb.co/Q1Bn8WL/Screenshot-2025-06-30-181431.png",
      alt: "Bid form screenshot",
    },
    {
      id: 3,
      src: "https://i.ibb.co/HLJjRtbr/Screenshot-2025-06-30-181332.png",
      alt: "Dashboard screenshot",
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
        BidBasket – Place your bid, grab your task
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
          <strong>BidBasket</strong> is a modern freelancing marketplace where clients can post tasks and
          freelancers bid in real time. Built with React, Tailwind&nbsp;CSS, and DaisyUI on the frontend and a
          Node&nbsp;+&nbsp;Express&nbsp;+&nbsp;MongoDB stack on the backend, it features JWT‑protected APIs, role‑based access, and a smooth
          responsive UI enriched by Framer Motion animations.
        </p>

        <h3 className="text-xl font-semibold mt-6">Key Features</h3>
        <ul>
          <li>User authentication (Email/Password &amp; Google) via Firebase.</li>
          <li>Full task CRUD &amp; real‑time bidding with role‑specific dashboards.</li>
          <li>JWT‑secured protected routes, favorite tasks, bid management.</li>
          <li>Theme toggle (Light / Dark) stored in <code>localStorage</code>.</li>
          <li>Toast alerts (React Toastify) and subtle motion (Framer Motion).</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6">Tech Stack</h3>
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Tools &amp; Libraries</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>UI Framework</td>
              <td>React, Tailwind&nbsp;CSS, DaisyUI</td>
            </tr>
            <tr>
              <td>Routing</td>
              <td>React Router&nbsp;DOM v6</td>
            </tr>
            <tr>
              <td>Auth</td>
              <td>Firebase Auth, JWT</td>
            </tr>
            <tr>
              <td>Backend</td>
              <td>Node.js, Express.js, MongoDB Atlas</td>
            </tr>
            <tr>
              <td>Animation &amp; UX</td>
              <td>Framer Motion, React Toastify</td>
            </tr>
          </tbody>
        </table>

        <h3 className="text-xl font-semibold mt-6">Major Routes</h3>
        <ul>
          <li><code>/</code> – Home (banner, tasks, features)</li>
          <li><code>/login</code> / <code>/register</code> – Authentication</li>
          <li><code>/addTask</code> – Client task creation (protected)</li>
          <li><code>/allTasks</code> – Browse &amp; bid on tasks</li>
          <li><code>/task/:id</code> – Task details + bid modal</li>
          <li><code>/myTasks</code> – Client dashboard</li>
          <li><code>/bids</code> – Freelancer bids view</li>
          <li><code>/updateTask/:id</code> – Update posted task</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6">Backend Highlights</h3>
        <ul>
          <li>RESTful API built with Express and Mongoose.</li>
          <li>JWT auth middleware, CORS, and secure headers.</li>
          <li>Deployed on Render / Railway with environment variables via <code>dotenv</code>.</li>
        </ul>

        <p className="mt-8">
          🔗{" "}
          <a
            href="https://freelance-task-marketplace.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
          &nbsp;|&nbsp;
          💻{" "}
          <a
            href="https://github.com/NabanitaGain/BidBasket---Modern-task-marketplace-web-application"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code
          </a>
        </p>
      </section>
    </main>
  );
}
