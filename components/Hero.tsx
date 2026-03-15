import { FaLocationArrow } from "react-icons/fa6";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import MagicButton from "./MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { BackgroundBeams } from "./ui/background-beams";

const Hero = () => {
  return (
    <div className="pb-20 pt-24 md:pt-28 lg:pt-36">
    
      <div>
        <BackgroundBeams className="h-screen w-full dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]
             absolute pointer-events-none top-0 left-0 flex items-center justify-center" />
      </div>

      {/* Two-column hero layout */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-8 md:gap-12 lg:gap-16 px-6 md:px-12 lg:px-20 my-10">

        {/* LEFT: greeting + large title + social icons */}
        <div className="flex flex-col gap-4 text-center lg:text-left items-center lg:items-start">

          <p className="text-sm md:text-base lg:text-lg text-white/60 tracking-wide">
            Hi, I&apos;m<span className="text-white/90"> Ahmed Ziedan</span>
          </p>

          <h1 className="text-5xl md:text-5xl lg:text-7xl xl:text-8xl text-white font-black leading-none">
            Software
            <br />
            Engineer
          </h1>

          <div className="flex gap-3 md:gap-4 mt-2">
            <a
              href="https://github.com/ahmed-ziedan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex items-center justify-center w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300"
            >
              <FaGithub className="text-white text-base md:text-lg lg:text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmedziedan/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center justify-center w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300"
            >
              <FaLinkedinIn className="text-white text-base md:text-lg lg:text-xl" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ahmedziedan.w@gmail.com&su=Ahmed,%20let's%20work%20"
              aria-label="Email"
              target="_blank"
              className="flex items-center justify-center w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300"
            >
              <MdEmail className="text-white text-base md:text-lg lg:text-xl" />
            </a>
          </div>
        </div>

        {/* RIGHT: description + CTA */}
        <div className="flex flex-col gap-5 text-center lg:text-left items-center lg:items-start">

          <TextGenerateEffect
  words=".NET Back-End Developer | Microsoft Dynamics 365 CRM / CE Developer | B.Sc. Computer Science and Mathematics"
  className="text-sm md:text-base lg:text-lg text-white leading-relaxed"
/>

          <a href="#projects">
            <MagicButton
              title="View My Work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>

      </div>
    </div>
  );
};

export default Hero;