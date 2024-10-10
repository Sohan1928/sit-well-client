import React, { useEffect, useState } from "react";
import { HiSun } from "react-icons/hi";
import { IoMoonOutline } from "react-icons/io5";

const ToggleTheme = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.setAttribute("data-theme", storedTheme);
  }, []);

  return (
    <div>
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-md md:ml-0 ${
            theme === "light" ? "bg-gray-400" : "bg-gray-700"
          }`}
        >
          {theme === "light" ? (
            <IoMoonOutline className="text-xl" />
          ) : (
            <HiSun className="text-xl" />
          )}
        </button>
      </div>
    </div>
  );
};

export default ToggleTheme;
