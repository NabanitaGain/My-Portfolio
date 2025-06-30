/* src/pages/Contacts.jsx */
import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaTelegramPlane,
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Debug env variables - remove after confirming they work
    console.log("Service ID:", serviceId);
    console.log("Template ID:", templateId);
    console.log("Public Key:", publicKey);

    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        setStatus("Message sent successfully! ✅");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setStatus("Something went wrong, please try again.");
      });
  };

  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12"
    >
      {/* LEFT: Contact info and social icons */}
      <div className="flex flex-col gap-8">
        <h2 style={{ color: "var(--text-main)" }} className="text-3xl md:text-4xl font-bold">
           Have a project in mind? 
          </h2>
          <h2><span className="text-3xl font-bold text-[#4B7BE5] leading-snug">Let’s bring it to life together!</span>
        </h2>

        <div className="flex flex-col gap-4">
          <a
            href="tel:+8801XXXXXXXXX"
            className="flex items-center gap-3 text-[#333] dark:text-gray-300 hover:text-[#4B7BE5] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPhoneAlt className="text-[#4B7BE5]" />
            <span className="text-sm break-all">+880 1950618403</span>
          </a>
          <a
            href="https://wa.me/8801XXXXXXXXX"
            className="flex items-center gap-3 text-[#333] dark:text-gray-300 hover:text-[#4B7BE5] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="text-[#4B7BE5]" />
            <span className="text-sm break-all">+880 1950618403</span>
          </a>
          <a
            href="https://t.me/YourTelegram"
            className="flex items-center gap-3 text-[#333] dark:text-gray-300 hover:text-[#4B7BE5] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegramPlane className="text-[#4B7BE5]" />
            <span className="text-sm break-all">+880 1950618403</span>
          </a>
          <a
            href="mailto:you@example.com"
            className="flex items-center gap-3 text-[#333] dark:text-gray-300 hover:text-[#4B7BE5] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="text-[#4B7BE5]" />
            <span className="text-sm break-all">nabanitagain143@gmail.com</span>
          </a>
        </div>

        <div className="flex gap-4 pt-2">
          <a
            href="https://www.facebook.com/nabanita.roy.5817/"
            className="p-2 bg-[#A3E4DB] rounded-full text-[#1A1A40] hover:bg-[#5AC8FA] transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.linkedin.com/in/nabanita-gain-b418a1357/"
            className="p-2 bg-[#A3E4DB] rounded-full text-[#1A1A40] hover:bg-[#5AC8FA] transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/NabanitaGain"
            className="p-2 bg-[#A3E4DB] rounded-full text-[#1A1A40] hover:bg-[#5AC8FA] transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      {/* RIGHT: Contact form */}
      <div className="bg-white dark:bg-[#1A1A40] shadow-md rounded-xl p-8">
        <h3 className="text-2xl font-semibold text-[#4B7BE5] mb-6">
          Send me a message
        </h3>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            name="user_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            required
            className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#4B7BE5] outline-none transition"
          />
          <input
            type="email"
            name="user_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            required
            className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#4B7BE5] outline-none transition"
          />
          <input
            type="text"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject"
            className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#4B7BE5] outline-none transition"
          />
          <textarea
            name="message"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            required
            className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#4B7BE5] outline-none transition resize-none"
          />

          <button
            type="submit"
            className="
              bg-[#A3E4DB] text-[#1A1A40] font-semibold py-3 rounded-lg
              hover:bg-[#5AC8FA] hover:text-black transition-colors
              dark:bg-[#325AE7] dark:text-black dark:hover:bg-[#5AC8FA] dark:hover:text-black
            "
          >
            Send Message
          </button>

          {status && (
            <p className="text-sm text-center text-[#4B7BE5] dark:text-[#A3E4DB] mt-3">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contacts;
