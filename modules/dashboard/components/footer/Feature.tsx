import Link from "next/link";
import React from "react";
import { PiGithubLogoLight } from "react-icons/pi";

const Feature = () => {
  return (
    <>
      <h1 className="font-bold dark:text-neutral-200 text-neutral-950">
        Featured in
      </h1>

      <Link
        href={"/dashboard/about"}
        className="flex items-center gap-x-3 mt-6 hover:bg-neutral-800 p-2 rounded-md hover:cursor-pointer group transition-all duration-300 ease-in"
      >
        <div className="bg-neutral-700/50 w-8 h-8 rounded-full flex items-center justify-center">
          <PiGithubLogoLight className="group-hover:text-neutral-200" />
        </div>
        <h2 className="text-xs dark:text-neutral-300 font-medium group-hover:text-neutral-200">
          About Me
          <br />
          <span className="text-neutral-400 text-xs">
            Muhammad Angga Adytya
          </span>
        </h2>
      </Link>

      <Link
        href={"/dashboard/sharing"}
        className="flex items-center gap-x-3 mt-6 hover:bg-neutral-800 p-2 rounded-md hover:cursor-pointer group transition-all duration-300 ease-in"
      >
        <div className="bg-neutral-700/50 w-8 h-8 rounded-full flex items-center justify-center">
          <PiGithubLogoLight className="group-hover:text-neutral-200" />
        </div>
        <h2 className="text-xs dark:text-neutral-300 font-medium group-hover:text-neutral-200">
          Sharing Session
          <br />
          <span className="text-neutral-400 text-xs">
            Muhammad Angga Adytya
          </span>
        </h2>
      </Link>
    </>
  );
};

export default Feature;
