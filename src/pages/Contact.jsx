
/* src/pages/Contact.jsx */

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

  // ==================== Form States ====================

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  // New form states
  const [purpose, setPurpose] = useState("");
  const [visitorType, setVisitorType] = useState("");
  const [consent, setConsent] = useState(false);

  // ==================== Form Submission ====================

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent duplicate submission
    if (status === "Sending...") return;

    // Form validation
    if (
      !name.trim() ||
      !email.trim() ||
      !purpose ||
      !visitorType ||
      !message.trim() ||
      !consent
    ) {
      setStatus("Please complete all required fields.");
      return;
    }

    // EmailJS configuration
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Check EmailJS configuration
    if (!serviceId || !templateId || !publicKey) {
      setStatus("Email service is not configured.");
      return;
    }

    setStatus("Sending...");

    // EmailJS template parameters
    const templateParams = {
      from_name: name.trim(),
      from_email: email.trim(),
      subject: subject.trim() || "Portfolio Inquiry",
      message: message.trim(),
      purpose: purpose,
      visitor_type: visitorType,
      consent: consent ? "Agreed" : "Not agreed",
    };

    try {
      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      setStatus("Message sent successfully! ✅");

      // Reset all form fields
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setPurpose("");
      setVisitorType("");
      setConsent(false);

    } catch (error) {
      console.error("Error sending email:", error);

      setStatus(
        "Something went wrong, please try again."
      );
    }
  };

  // ==================== Common Input Style ====================

  const inputClass =
    "w-full bg-gray-50 dark:bg-gray-800 " +
    "text-gray-900 dark:text-gray-100 " +
    "border border-gray-300 dark:border-gray-700 " +
    "rounded-lg px-4 py-3 text-sm " +
    "focus:ring-2 focus:ring-[#4B7BE5] " +
    "outline-none transition";

  // ==================== Contact Section ====================

  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12"
    >

      {/* ==================== LEFT SIDE ==================== */}

      <div className="flex flex-col gap-8">

        {/* Contact Heading */}

        <h2
          style={{ color: "var(--text-main)" }}
          className="text-3xl md:text-4xl font-bold"
        >
          Have a project in mind?
        </h2>

        <h2>
          <span className="text-3xl font-bold text-[#4B7BE5] leading-snug">
            Let’s bring it to life together!
          </span>
        </h2>

        {/* Contact Information */}

        <div className="flex flex-col gap-4">

          {/* Phone */}

          <a
            href="tel:+8801950618403"
            className="flex items-center gap-3 text-[#333] dark:text-gray-300 hover:text-[#4B7BE5] transition-colors"
          >
            <FaPhoneAlt className="text-[#4B7BE5]" />

            <span className="text-sm break-all">
              +880 1950618403
            </span>
          </a>

          {/* WhatsApp */}

          <a
            href="https://wa.me/8801950618403"
            className="flex items-center gap-3 text-[#333] dark:text-gray-300 hover:text-[#4B7BE5] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="text-[#4B7BE5]" />

            <span className="text-sm break-all">
              +880 1950618403
            </span>
          </a>

          {/* Telegram */}

          <a
            href="https://t.me/+8801950618403"
            className="flex items-center gap-3 text-[#333] dark:text-gray-300 hover:text-[#4B7BE5] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegramPlane className="text-[#4B7BE5]" />

            <span className="text-sm break-all">
              +880 1950618403
            </span>
          </a>

          {/* Email */}

          <a
            href="mailto:gain23105101309@diu.edu.bd"
            className="flex items-center gap-3 text-[#333] dark:text-gray-300 hover:text-[#4B7BE5] transition-colors"
          >
            <FaEnvelope className="text-[#4B7BE5]" />

            <span className="text-sm break-all">
              gain23105101309@diu.edu.bd
            </span>
          </a>

        </div>

        {/* ==================== Social Media ==================== */}

        <div className="flex gap-4 pt-2">

          {/* Facebook */}

          <a
            href="https://www.facebook.com/nabanita.roy.5817/"
            className="p-2 bg-[#A3E4DB] rounded-full text-[#1A1A40] hover:bg-[#5AC8FA] transition"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>

          {/* LinkedIn */}

          <a
            href="https://www.linkedin.com/in/nabanita-gain-b418a1357/"
            className="p-2 bg-[#A3E4DB] rounded-full text-[#1A1A40] hover:bg-[#5AC8FA] transition"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>

          {/* GitHub */}

          <a
            href="https://github.com/NabanitaGain"
            className="p-2 bg-[#A3E4DB] rounded-full text-[#1A1A40] hover:bg-[#5AC8FA] transition"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

        </div>

      </div>

      {/* ==================== RIGHT SIDE ==================== */}

      <div className="bg-white dark:bg-[#1A1A40] text-[#1A1A40] dark:text-gray-100 shadow-md rounded-xl p-6 md:p-8">

        <h3 className="text-2xl font-semibold text-[#4B7BE5] mb-6">
          Send me a message
        </h3>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >

          {/* 1. Name Input */}

          <div>
            <label
              htmlFor="user_name"
              className="block text-sm font-semibold mb-2"
            >
              Full Name *
            </label>

            <input
              id="user_name"
              type="text"
              name="user_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              autoComplete="name"
              required
              className={inputClass}
            />
          </div>

          {/* 2. Email Input */}

          <div>
            <label
              htmlFor="user_email"
              className="block text-sm font-semibold mb-2"
            >
              Email Address *
            </label>

            <input
              id="user_email"
              type="email"
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              autoComplete="email"
              required
              className={inputClass}
            />
          </div>

          {/* 3. Subject Input */}

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-semibold mb-2"
            >
              Subject
            </label>

            <input
              id="subject"
              type="text"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject"
              className={inputClass}
            />
          </div>

          {/* 4. Purpose Dropdown - NEW */}

          <div>
            <label
              htmlFor="purpose"
              className="block text-sm font-semibold mb-2"
            >
              Purpose of Contact *
            </label>

            <select
              id="purpose"
              name="purpose"
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
              required
              className={inputClass}
            >
              <option value="">
                Select a purpose
              </option>

              <option value="Internship">
                Internship Opportunity
              </option>

              <option value="Job">
                Job Opportunity
              </option>

              <option value="Collaboration">
                Project Collaboration
              </option>

              <option value="Academic">
                Academic Inquiry
              </option>

              <option value="Other">
                Other
              </option>
            </select>
          </div>

          {/* 5. Radio Buttons - NEW */}

          <fieldset>
            <legend className="text-sm font-semibold mb-3">
              I am a *
            </legend>

            <div className="flex flex-wrap gap-4">

              {["Recruiter", "Student", "Other"].map((type) => (

                <label
                  key={type}
                  className="flex items-center gap-2 text-sm cursor-pointer"
                >
                  <input
                    type="radio"
                    name="visitorType"
                    value={type}
                    checked={visitorType === type}
                    onChange={(e) =>
                      setVisitorType(e.target.value)
                    }
                    required
                    className="accent-[#4B7BE5] w-4 h-4"
                  />

                  {type}

                </label>

              ))}

            </div>
          </fieldset>

          {/* 6. Message Textarea */}

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold mb-2"
            >
              Message *
            </label>

            <textarea
              id="message"
              name="message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message here..."
              required
              className={`${inputClass} resize-none`}
            />
          </div>

          {/* 7. Consent Checkbox - NEW */}

          <label className="flex items-start gap-2 text-sm cursor-pointer">

            <input
              type="checkbox"
              name="consent"
              checked={consent}
              onChange={(e) =>
                setConsent(e.target.checked)
              }
              required
              className="mt-1 accent-[#4B7BE5] w-4 h-4"
            />

            <span>
              I agree to be contacted regarding my inquiry. *
            </span>

          </label>

          {/* Required Fields Note */}

          <p className="text-xs text-gray-500 dark:text-gray-400">
            Fields marked with * are required.
          </p>

          {/* 8. Submit Button */}

          <button
            type="submit"
            disabled={status === "Sending..."}
            className="
              bg-[#A3E4DB] text-[#1A1A40]
              font-semibold py-3 rounded-lg
              hover:bg-[#5AC8FA] hover:text-black
              transition-colors
              dark:bg-[#325AE7] dark:text-black
              dark:hover:bg-[#5AC8FA]
              dark:hover:text-black
              disabled:opacity-50
              disabled:cursor-not-allowed
            "
          >
            {status === "Sending..."
              ? "Sending..."
              : "Send Message"}
          </button>

          {/* Submission Status */}

          {status && (
            <p
              role="status"
              aria-live="polite"
              className={`text-sm text-center mt-3 font-medium ${
                status.includes("successfully")
                  ? "text-green-600 dark:text-green-400"
                  : status === "Sending..."
                  ? "text-[#4B7BE5]"
                  : "text-red-500"
              }`}
            >
              {status}
            </p>
          )}

        </form>

      </div>

    </section>
  );
};

export default Contacts;
