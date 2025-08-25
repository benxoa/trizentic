"use client"
import React, { useState } from "react";

const ContactUs = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("Message sent!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send. Try again.");
      }
    } catch {
      setStatus("Failed to send. Try again.");
    }
  };

  return (
    <section className="flex items-center justify-center min-h-[60vh] bg-background  text-foreground px-4 md:px-0">
      <form
        className="max-w-xl w-full py-12 flex flex-col gap-6  rounded-3xl  p-8 mt-10"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl sm:text-4xl font-bold font-funnel mb-2 text-center">Get Quote</h2>
        <p className="text-base sm:text-lg font-mont text-center mb-4">We'd love to hear from you! Fill out the form below and we'll get back to you soon.</p>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="rounded-full px-5 py-3 bg-white border border-gray-300 text-black font-mont focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="rounded-full px-5 py-3 bg-white border border-gray-300 text-black font-mont focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          rows={4}
          className="rounded-3xl px-5 py-3 bg-white border border-gray-300 text-black font-mont focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
        />
        <button
          type="submit"
          className="bg-foreground text-white font-funnel text-lg px-8 py-3 rounded-full hover:bg-gray-200 transition-all"
        >
          Send Message
        </button>
        {status && <p className="text-center mt-2 text-sm">{status}</p>}
      </form>
    </section>
  );
};

export default ContactUs; 