import React, { useState, useEffect } from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const designation = "MERN Stack Developer";
const cycle = ["#4B7BE5", "#FF6F61", "#9C27B0", "#00BFA5"]; // letter colours

const Banner = () => {
  /* rotate letter colours */
  const [idx, setIdx] = useState(Array(designation.length).fill(0));
  useEffect(() => {
    const id = setInterval(
      () => setIdx(p => p.map(i => (i + 1) % cycle.length)),
      1500
    );
    return () => clearInterval(id);
  }, []);

  const letterVar = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };

  return (
    <section
      /* gradient driven by CSS vars */
      style={{ background: "linear-gradient(135deg,var(--bg-start),var(--bg-end))" }}
      className="relative overflow-hidden h-[60vh] flex flex-col md:flex-row items-center justify-between
                 px-6 md:px-20 py-6 gap-10"
    >
      {/* blobs use CSS‑var colours */}
      <div
        className="absolute -top-32 -left-24 w-96 h-96 rounded-full blur-3xl opacity-30 animate-pulse"
        style={{ background: "radial-gradient(circle at 30% 30%, var(--accent-blob), transparent 70%)" }}
      />
      <div
        className="absolute -bottom-28 -right-24 w-80 h-80 rounded-full blur-2xl opacity-25 animate-pulse"
        style={{ background: "radial-gradient(circle at 70% 70%, var(--accent-blob2), transparent 80%)" }}
      />

      {/* diagonal stripes */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="diag" width="40" height="40" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
            <rect width="20" height="40" fill="var(--accent-blob)" />
            <rect x="20" width="20" height="40" fill="transparent" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diag)" />
      </svg>

      {/* -------- text side -------- */}
      <div className="relative z-10 flex-1 space-y-4">
        <h1 style={{ color: "var(--text-main)" }} className="text-3xl md:text-4xl font-bold">
          Hi, I’m Nabanita Gain
        </h1>

        <h2 className="text-xl md:text-2xl font-semibold flex flex-wrap">
          {designation.split("").map((ch, i) =>
            ch === " " ? (
              <span key={i} className="mx-[0.15em]" />
            ) : (
              <motion.span
                key={i}
                variants={letterVar}
                initial="initial"
                animate="animate"
                transition={{ delay: i * 0.05, duration: 0.3 }}
                style={{ color: cycle[idx[i]], fontWeight: 600 }}
              >
                {ch}
              </motion.span>
            )
          )}
        </h2>

        <p style={{ color: "var(--text-sub)" }} className="max-w-xl leading-relaxed">
          Crafting seamless, scalable web solutions with the MERN stack while
          focusing on client success and intuitive UX.
        </p>

        {/* socials */}
        <div className="flex gap-4 pt-4">
          {[
            { href: "https://www.facebook.com/nabanita.roy.5817/", Icon: FaFacebook },
            { href: "https://www.linkedin.com/in/nabanita-gain-b418a1357/", Icon: FaLinkedin },
            { href: "https://github.com/NabanitaGain", Icon: FaGithub },
          ].map(({ href, Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "var(--icon-bg)",
                color: "var(--icon-text)",
              }}
              className="p-3 rounded-full hover:shadow-md transition-colors duration-300"
              onMouseEnter={e => (e.currentTarget.style.background = "var(--icon-bg-hover)")}
              onMouseLeave={e => (e.currentTarget.style.background = "var(--icon-bg)")}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        {/* resume button */}
        <a
          href="https://drive.google.com/file/d/10x3E6sR3vHIaBhhWt3tIs8OAxn9oOgWu/view?usp=sharing"
          download
          style={{ background: "var(--btn-bg)", color: "var(--btn-text)" }}
          className="inline-block mt-4 px-6 py-3 rounded-md font-semibold shadow-md transition-colors"
          onMouseEnter={e => (e.currentTarget.style.background = "var(--btn-hover)")}
          onMouseLeave={e => (e.currentTarget.style.background = "var(--btn-bg)")}
        >
          Download Résumé
        </a>
      </div>

      {/* -------- photo -------- */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex-1 flex justify-center"
      >
        <div
          className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full -z-10 opacity-20"
          style={{ background: "radial-gradient(circle,var(--accent-blob),var(--accent-blob2))" }}
        />
        <img
          src="https://i.ibb.co/zhK6FNPB/1683216448656.jpg"
          alt="Nabanita Gain"
          className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover shadow-lg border-4"
          style={{ borderColor: "var(--accent-blob)" }}
        />
      </motion.div>
    </section>
  );
};

export default Banner;
