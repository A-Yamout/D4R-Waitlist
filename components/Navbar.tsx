import React from "react";
import Link from 'next/link'
import { Logo } from "./Logo";
import { FaInstagram, FaTwitter, FaGithub, FaCamera } from "react-icons/fa";

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <Logo />

      <div className="flex gap-2 items-center">
      <Link
            className="rounded-md bg-variant-1 h-10 w-10 grid place-items-center cursor-pointer"
            href="https://photos.team7110.com"
            >
              <FaCamera className="h-5 w-5" />
          </Link>
        <SocialButtons />
      </div>
    </div>
  );
};

const SocialButtons = () => {
  const socials = [
    { icon: FaGithub, link: "https://github.com/Carroll-Robotics"},
    { icon: FaInstagram, link: "https://www.instagram.com/slcrobotics7110/"},
    { icon: FaTwitter, link: "https://twitter.com/slcrobotics"},
  ];

  return (
    <>
      {socials.map((social, i) => {
        return (
          <a
            key={i}
            className="rounded-md bg-variant-1 h-10 w-10 grid place-items-center cursor-pointer"
            href={social.link}
            target="_blank"
            rel="noreferrer"
          >
            <social.icon className="h-5 w-5" />
          </a>
        );
      })}
    </>
  );
};
