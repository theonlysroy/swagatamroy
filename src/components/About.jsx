import { IoLogoJavascript } from "react-icons/io5";
import photo from "../assets/profileImg.jpeg";
import { FaGitAlt, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb, SiPostgresql } from "react-icons/si";

export default function About() {
  return (
    <div id="home" className="mt-20 w-full">
      <div className="grid grid-cols-2 gap-4 px-5">
        {/* about me */}
        <div className="flex flex-col gap-3 col-span-1 justify-center">
          <h2 className="text-4xl font-semibold">Swagatam Roy</h2>
          <p className="italic text-lg text-orange-400">Full-Stack Developer</p>
          {/* skills */}
          <p>Tech Stack: </p>
          <div className="flex gap-2">
            <IoLogoJavascript size={30} />
            <FaNodeJs size={30} />
            <FaReact size={30} />
            <SiExpress size={30} />
            <SiMongodb size={30} />
            <SiPostgresql size={30} />
            <FaGitAlt size={30} />
          </div>
        </div>
        {/* profile photo */}
        <div className="col-span-1 flex justify-evenly items-center">
          <img src={photo} alt="Swagatam Roy" className="h-44 rounded-full" />
        </div>
      </div>
    </div>
  );
}
