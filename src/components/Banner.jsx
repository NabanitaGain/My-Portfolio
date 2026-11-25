
import React, { useState, useEffect } from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const designation = "MERN Stack Developer";

const cycle = [
  "#4B7BE5",
  "#FF6F61",
  "#9C27B0",
  "#00BFA5",
];

const Banner = () => {

  // Animated designation colours

  const [idx, setIdx] = useState(
    Array(designation.length).fill(0)
  );

  useEffect(() => {
    const id = setInterval(
      () =>
        setIdx((p) =>
          p.map((i) => (i + 1) % cycle.length)
        ),
      1500
    );

    return () => clearInterval(id);
  }, []);

  const letterVar = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="banner"
      style={{
        background:
          "linear-gradient(135deg,var(--bg-start),var(--bg-end))",
      }}
      className="
        relative isolate overflow-hidden
        w-full h-auto
        py-8 sm:py-10 lg:py-12
      "
    >

      {/* ================= Background Blobs ================= */}

      <div
        className="
          absolute -top-32 -left-24
          w-72 h-72 sm:w-96 sm:h-96
          rounded-full blur-3xl opacity-30
          animate-pulse pointer-events-none
        "
        style={{
          background:
            "radial-gradient(circle at 30% 30%, var(--accent-blob), transparent 70%)",
        }}
      />

      <div
        className="
          absolute -bottom-28 -right-24
          w-64 h-64 sm:w-80 sm:h-80
          rounded-full blur-2xl opacity-25
          animate-pulse pointer-events-none
        "
        style={{
          background:
            "radial-gradient(circle at 70% 70%, var(--accent-blob2), transparent 80%)",
        }}
      />

      {/* ================= Diagonal Stripes ================= */}

      <svg
        className="
          absolute inset-0 w-full h-full
          pointer-events-none opacity-10
        "
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="diag"
            width="40"
            height="40"
            patternTransform="rotate(45)"
            patternUnits="userSpaceOnUse"
          >
            <rect
              width="20"
              height="40"
              fill="var(--accent-blob)"
            />

            <rect
              x="20"
              width="20"
              height="40"
              fill="transparent"
            />
          </pattern>
        </defs>

        <rect
          width="100%"
          height="100%"
          fill="url(#diag)"
        />
      </svg>

      {/* ================= Main Banner Container ================= */}

      <div
        className="
          relative z-10
          max-w-7xl mx-auto
          px-4 sm:px-6 lg:px-10
          flex flex-col lg:flex-row
          items-center justify-between
          gap-8 lg:gap-12
        "
      >

        {/* ================= Text Section ================= */}

        <div
          className="
            w-full min-w-0 lg:flex-1
            space-y-4
            text-center lg:text-left
            order-2 lg:order-1
          "
        >

          {/* Name */}

          <h1
            style={{ color: "var(--text-main)" }}
            className="
              text-2xl sm:text-3xl
              lg:text-4xl xl:text-5xl
              font-bold leading-tight
            "
          >
            Hi, I’m Nabanita Gain
          </h1>

          {/* Animated Designation */}

          <h2
            className="
              text-lg sm:text-xl lg:text-2xl
              font-semibold
              flex flex-wrap
              justify-center lg:justify-start
              gap-x-1.5
            "
            aria-label={designation}
          >
            {designation.split(" ").map((word, wordIndex) => {
              const offset = designation
                .split(" ")
                .slice(0, wordIndex)
                .reduce(
                  (total, item) => total + item.length + 1,
                  0
                );

              return (
                <span
                  key={wordIndex}
                  className="inline-flex whitespace-nowrap"
                  aria-hidden="true"
                >
                  {word.split("").map((ch, i) => (
                    <motion.span
                      key={i}
                      variants={letterVar}
                      initial="initial"
                      animate="animate"
                      transition={{
                        delay: (offset + i) * 0.05,
                        duration: 0.3,
                      }}
                      style={{
                        color: cycle[idx[offset + i]],
                        fontWeight: 600,
                      }}
                    >
                      {ch}
                    </motion.span>
                  ))}
                </span>
              );
            })}
          </h2>

          {/* Description */}

          <p
            style={{ color: "var(--text-sub)" }}
            className="
              max-w-xl mx-auto lg:mx-0
              text-sm sm:text-base lg:text-lg
              leading-relaxed
            "
          >
            Crafting seamless, scalable web solutions
            with the MERN stack while focusing on
            client success and intuitive UX.
          </p>

          {/* ================= Social Media Links ================= */}

          <div
            className="
              flex flex-wrap
              justify-center lg:justify-start
              gap-3 sm:gap-4 pt-2
            "
          >
            {[
              {
                href: "https://www.facebook.com/nabanita.roy.5817/",
                Icon: FaFacebook,
                label: "Facebook",
              },
              {
                href: "https://www.linkedin.com/in/nabanita-gain-b418a1357/",
                Icon: FaLinkedin,
                label: "LinkedIn",
              },
              {
                href: "https://github.com/NabanitaGain",
                Icon: FaGithub,
                label: "GitHub",
              },
            ].map(({ href, Icon, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  background: "var(--icon-bg)",
                  color: "var(--icon-text)",
                }}
                className="
                  w-11 h-11 sm:w-12 sm:h-12
                  flex items-center justify-center
                  rounded-full hover:shadow-md
                  transition-all duration-300
                "
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background =
                    "var(--icon-bg-hover)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background =
                    "var(--icon-bg)")
                }
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          {/* ================= Updated Resume Button ================= */}

          <a
            href="https://drive.google.com/file/d/16FiKDgJoCzvLMYASBkGaDb4tb3IRDKXv/view"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "var(--btn-bg)",
              color: "var(--btn-text)",
            }}
            className="
              inline-flex items-center justify-center
              mt-2 px-5 sm:px-6 py-3
              rounded-lg font-semibold
              text-sm sm:text-base
              shadow-md transition-all duration-300
            "
            onMouseEnter={(e) =>
              (e.currentTarget.style.background =
                "var(--btn-hover)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background =
                "var(--btn-bg)")
            }
          >
            Download Résumé
          </a>

        </div>

        {/* ================= Profile Picture ================= */}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="
            relative
            w-full lg:w-auto
            flex items-center justify-center
            shrink-0
            order-1 lg:order-2
          "
        >

          <div
            className="
              relative isolate
              w-48 sm:w-64 lg:w-72 xl:w-80
              max-w-full aspect-square
            "
          >

            {/* Photo Background Glow */}

            <div
              className="
                absolute inset-0
                rounded-full -z-10 opacity-20
                blur-xl
              "
              style={{
                background:
                  "radial-gradient(circle,var(--accent-blob),var(--accent-blob2))",
              }}
            />

            {/* Profile Image */}

            <img
              src="https://i.ibb.co/zhK6FNPB/1683216448656.jpg"
              alt="Nabanita Gain"
              className="
                block w-full h-full
                rounded-full object-cover
                shadow-lg border-4
              "
              style={{
                borderColor: "var(--accent-blob)",
              }}
            />

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Banner;
