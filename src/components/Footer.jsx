import { FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center p-4 mt-10 z-50 bottom-0">
      <p className="mb-2 font-mono text-lg">Made with ❤️ &#64;2025</p>
      <div className="flex space-x-4">
        {/* LinkedIn Icon */}
        <a
          href="https://www.linkedin.com/in/swagatam-roy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600 transition-colors duration-300"
        >
          <FaLinkedin size={24} />
        </a>

        {/* Instagram Icon */}
        <a
          href="https://www.instagram.com/theonlysroy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:text-pink-700 transition-colors duration-300"
        >
          <FaInstagram size={24} />
        </a>
      </div>
    </div>
  );
}
