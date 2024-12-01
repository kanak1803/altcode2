"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_p3mhb81", // Replace with your Service ID
        "template_j390veg", // Replace with your Template ID
        form.current,
        "2_Ytm1Bas3Jk1PnCs" // Replace with your Public Key
      )
      .then(
        () => {
          setSuccessMessage("Message sent successfully!");
          form.current.reset();
        },
        () => {
          setErrorMessage("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-lg max-w-5xl w-full grid grid-cols-1 md:grid-cols-2">
        {/* Left Column: Form */}
        <div className="p-8">
          <h2 className="text-3xl font-bold text-teal-600 mb-6">Contact Us</h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                rows="4"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-600 transition"
            >
              Send Message
            </button>
          </form>
          {successMessage && (
            <p className="mt-4 text-green-600 font-semibold">
              {successMessage}
            </p>
          )}
          {errorMessage && (
            <p className="mt-4 text-red-600 font-semibold">{errorMessage}</p>
          )}
        </div>

        {/* Right Column: Info */}
        <div className="p-8 bg-teal-600 text-white rounded-r-lg flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-4">Having Trouble?</h3>
          <p className="text-lg mb-6">
            If the form doesn’t work, feel free to reach out directly.
          </p>
          <a
            href="mailto:your-email@example.com"
            className="bg-white text-teal-600 py-3 px-6 rounded-lg shadow-lg font-semibold hover:bg-gray-100 transition"
          >
            your-email@example.com
          </a>
          <p className="mt-6 text-sm">
            We aim to respond within 24 hours. Thank you for reaching out!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
