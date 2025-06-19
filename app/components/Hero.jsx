import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row justify-between items-center min-h-[70vh] p-6 md:px-16 md:py-10 bg-foreground">
      {/* Left: Large Vertical Text */}
      <div className="text-background font-funnel text-[8vw] md:text-[4.5vw] leading-none mt-8 md:mt-0 text-center md:text-left">
        <h1>Make Your</h1>
        <h1>Business Online</h1>
        <h1>With Us.</h1>
      </div>

      {/* Right: Description + CTA */}
      <div className="text-background font-funnel text-[4vw] md:text-[1.1vw] max-w-md flex flex-col gap-6 items-center md:items-start text-center md:text-left">
        <p>
          From Website Development <br />
          - To Branding <br />
          Anywhere Anytime.
        </p>

        <Link
          href="/work"
          className="bg-background text-foreground text-sm px-5 py-2 rounded-full hover:bg-[#095832] transition-all"
        >
          Learn More →
        </Link>
      </div>
    </section>
  );
};

export default Hero;
