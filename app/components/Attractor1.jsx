"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Attractor1 = () => {
  return (
    <section className="flex flex-col  justify-center   h-[70vh]  bg-background">
      <div className="text-foreground flex flex-row justify-center   font-funnel text-[4.4vw] ">
        <div>
          <h1>Build |</h1>
        </div>
        <div>
          <h1>Test |</h1>
        </div>
        <div>
          <h1>Deploy</h1>
        </div>
      </div>
      <div className="text-foreground mt-2 flex  justify-center items-center   font-funnel text-[4.4vw] ">
        {/* <div className="bg-blue-600 w-[90%] rounded-4xl h-64 "></div> */}
        <Image alt="Hero" className=" w-[90%] rounded-4xl h-64 " src={require("@/public/att1.jpg")} />
      </div>
    </section>
  );
};

export default Attractor1;
