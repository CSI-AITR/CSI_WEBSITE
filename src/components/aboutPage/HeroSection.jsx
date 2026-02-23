import React from "react";
import { BackgroundBeams } from "../ui/background-beams";
import { ExploreEventButton } from "../eventPage/ExploreEventButton";
import {Link} from "react-router-dom";

export function HeroSection() {
  return (
    <div className="h-[20rem] md:h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            We Are Computer Society Of India, Acropolis Chapter
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
            We are a group of technology enthusiasts who believe in the power of community and collaboration. Our mission is to provide a platform for students to learn, share, and innovate. Our vision is to inspire the next generation of tech leaders and entrepreneurs.
        </p>
        <div className="flex justify-center">
            <Link to={"/event"}>
                <ExploreEventButton/>
            </Link>
        </div>
        
      </div>
      <BackgroundBeams />
    </div>
  );
}
// comment
