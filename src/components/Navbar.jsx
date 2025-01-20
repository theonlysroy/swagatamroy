import { FiGithub } from "react-icons/fi";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 backdrop-blur w-full py-5">
      <div className="w-full flex justify-between items-end">
        {/* links */}
        <ul className="flex gap-6 items-center text-lg">
          <a href="#home">
            <li className="hover:text-orange-400 duration-100 transition-colors cursor-pointer">
              Home
            </li>
          </a>
          <a href="#blog">
            <li className="hover:text-orange-400 duration-100 transition-colors cursor-pointer">
              Blogs
            </li>
          </a>
          <a href="#project">
            <li className="hover:text-orange-400 duration-100 transition-colors cursor-pointer">
              Projects
            </li>
          </a>
        </ul>
        {/* theme toggle + github link */}
        <div className="flex gap-4 justify-between items-baseline">
          <span className="cursor-pointer hover:text-orange-400">
            {" "}
            <a href="https://github.com/theonlysroy" target="_blank">
              <FiGithub size={20} />
            </a>{" "}
          </span>
          <span className="cursor-pointer hover:text-orange-400">
            <DarkModeToggle />
          </span>
        </div>
      </div>
    </div>
  );
}
