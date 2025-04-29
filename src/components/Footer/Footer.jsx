import React from "react";
import { FaFacebook, FaGithub, FaYoutube } from "react-icons/fa";
import footLogo from "../../assets/footlogo.svg";
import Links from "../Links/Links";

const Footer = () => {
  const icons = [
    {
      href: "https://www.facebook.com/abdullahibaki1999/",
      icon: <FaFacebook className="text-blue-500" />,
    },
    {
      href: "https://github.com/abdullahilbaki",
      icon: <FaGithub />,
    },
    {
      href: "https://www.youtube.com/@abdullahilbaki1999",
      icon: <FaYoutube className="text-red-500" />,
    },
  ];

  return (
    <footer className="footer footer-horizontal footer-center bg-black text-gray-50 p-10 sm:py-20">
      <nav className="text-2xl font-bold flex items-center justify-center">
        <img src={footLogo} alt="Law BD" />
      </nav>
      <nav className="grid grid-flow-row sm:grid-flow-col gap-4">
        <ul className="menu menu-horizontal px-1 gap-2 flex flex-col sm:flex-row">
          <Links />
        </ul>
      </nav>

      <hr className="dashed w-full" />
      <nav>
        <div className="grid grid-flow-col gap-4">
          {icons.map(({ href, icon }, index) => (
            <a
              key={index}
              className="link text-2xl"
              target="_blank"
              rel="noopener noreferrer"
              href={href}
            >
              {icon}
            </a>
          ))}
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
