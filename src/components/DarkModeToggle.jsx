import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // const isDarkMode = localStorage.getItem("darkMode");
    // if (isDarkMode === null) {
    //   setDarkMode(true);
    //   return;
    // }
    // if (isDarkMode === "true") {
    //   setDarkMode(true);
    //   document.documentElement.classList.add("dark");
    // }
  }, []);

  const handleToggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");

    // localStorage.setItem("darkMode", newMode);
  };

  return (
    <button onClick={handleToggleDarkMode}>
      {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
    </button>
  );
}
