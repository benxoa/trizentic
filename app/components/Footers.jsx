import React from "react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background font-funnel px-6 md:px-16 py-6">
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Left: Company Text */}
        <p className="text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Trizentic. All rights reserved.
        </p>

        {/* Right: Contact Email */}
        <a
          href="mailto:info@trizentic.com"
          className="text-sm hover:underline"
        >
          info@trizentic.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
