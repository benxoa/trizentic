import Link from "next/link";
import React from "react";

const About = () => {
        const smtpPass = process.env.SMTP_PASS;

  useEffect(() => {
    console.log("hey")

  }, [])
  
  return (
    <section className="flex items-center justify-center min-h-[70vh] bg-[#0e2a6c] text-white px-4 md:px-0">
      <div className="max-w-5xl w-full py-12 flex flex-col">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold font-funnel mb-6 text-center md:text-left">
          About Us
        </h1>

        {/* Paragraph */}
        <p className="text-base sm:text-lg md:text-xl text-start font-mont leading-relaxed mb-8 text-justify">
          Welcome to <span className="font-semibold text-background">Trizentic</span> – your all-in-one digital
          solutions partner. We help businesses make their mark online through a
          full spectrum of services including{" "}
          <span className="font-medium">branding</span>,{" "}
          <span className="font-medium">website development</span>,{" "}
          <span className="font-medium">mobile app development</span>,{" "}
          <span className="font-medium">UI/UX design</span>, and more. Whether
          you're a startup looking to build your presence or an established
          company aiming to grow digitally, our team is here to turn your ideas
          into impactful digital experiences. With creativity, innovation, and a
          passion for technology at our core, we help you bring your vision to
          life.
        </p>

        {/* Button */}
        <div className="text-center md:text-left">
          <Link
            href="/socials"
            className="inline-block bg-white text-black font-funnel text-sm px-5 py-2 rounded-full hover:bg-gray-200 transition-all"
          >
            Contact with us →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
