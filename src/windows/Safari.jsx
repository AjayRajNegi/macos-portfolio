import React from "react";
import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import {
  ChevronLeft,
  ChevronRight,
  MoveRight,
  PanelLeft,
  Search,
  ShieldHalf,
} from "lucide-react";
import { blogPosts } from "#constants";

const Safari = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="safari" />

        <PanelLeft className="ml-10 icon" />

        <div className="flex items-center gap-1 ml-5">
          <ChevronLeft className="icon" />
          <ChevronRight className="icon" />
        </div>

        <div className="flex-1 flex-center gap-3 ml-5">
          <ShieldHalf className="icon" />

          <div className="search flex items-center gap-2">
            <Search className="icon" />
            <input
              type="text"
              className="flex-1"
              placeholder="Search or enter website name"
            />
          </div>
        </div>
      </div>

      <div className="blog p-6">
        <h2 className="text-2xl font-semibold mb-6">My Developer Blog</h2>

        <div className="space-y-8">
          {blogPosts.map(({ id, title, image, date, link }) => (
            <div key={id} className="grid grid-cols-3 gap-4 items-start">
              <div className="col-span-1">
                <img
                  src={image}
                  alt={title}
                  className="rounded w-full h-auto object-cover"
                />
              </div>

              <div className="content col-span-2 space-y-2">
                <p className="text-gray-500">{date}</p>
                <h3 className="text-xl font-semibold">{title}</h3>

                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 icon-hover"
                >
                  Check out the full post
                  <MoveRight className="icon-hover" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const SafariWindow = WindowWrapper(Safari, "safari");

export default SafariWindow;
