import { WindowControls } from "#components";
import { socials } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import React from "react";

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact Me</h2>
      </div>

      <div className="p-5 space-y-5">
        <img src="/images/me.jpg" className="w-20 rounded-full" />

        <h3>Ajay Raj Pratap Singh</h3>
        <p className="text-sm text-gray-600 -mt-4">
          Full-Stack Developer · DevOps & Cloud Engineer · 3D Web Specialist
        </p>
        <p>Dehradun, India · +91-8433038283</p>
        <p className="-my-2">
          Got an idea? A bug to squash? Or just wanna talk tech? I'm in.
        </p>
        <p>ajayrajnegi1608@gmail.com</p>

        <div className="space-y-1 text-sm">
          <p>
            <span className="font-semibold">Resume:</span>{" "}
            <a
              href="https://resume.ajayhtml.online"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              resume.ajayhtml.online
            </a>
          </p>
          <p>
            <span className="font-semibold">Portfolio:</span>{" "}
            <a
              href="https://portfolio.ajayhtml.online"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              portfolio.ajayhtml.online
            </a>
          </p>
        </div>

        <ul>
          {socials.map(({ id, bg, link, icon, text }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={text}
              >
                <img src={icon} alt={text} className="size-5" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");
export default ContactWindow;
