import React from "react";
import Image from "next/image";
import { Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { socialMedia, contactEmail } from "@/data";

const Footer = () => {
  return (
    <footer className="section-wrap pb-10" id="contact">
      <div className="contact-panel">
        <p className="section-kicker">Get in touch</p>
        <h2 className="contact-title">
          Have a project in mind?<br />
          <span>Let&apos;s make it happen.</span>
        </h2>
        <p className="mt-5 max-w-lg text-center text-sm leading-6 text-text-muted sm:text-base sm:leading-7">
          For .NET development, web applications, or a good conversation about software,
          my inbox is open.
        </p>
        <a href={`mailto:${contactEmail}`} className="magic-button mt-7" aria-label="Send email to Ahmed Ziedan">
          <Mail size={17} /> Say hello
        </a>
      </div>

      <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.08] pt-6 sm:flex-row">
        <p className="text-sm text-text-muted">
          Copyright &copy; 2026 Ahmed Ziedan
        </p>

        <div className="flex items-center gap-4">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={info.id === 1 ? "GitHub profile" : "LinkedIn profile"}
              className={cn(
                "w-10 h-10 flex justify-center items-center rounded-lg border border-border",
                "bg-panel/50 hover:bg-panel transition-colors",
                "focus-visible:outline-2 focus-visible:outline-offset-2"
              )}
              style={{ outlineColor: "hsl(var(--ring))" }}
            >
              <Image src={info.img} alt="" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>

      <p className="text-center text-text-muted text-sm mt-6 italic">
        Always learning, always growing.
      </p>
    </footer>
  );
};

export default Footer;
