import React, { useState } from "react";
import { FiSun } from "react-icons/fi";
import { BsFillMoonStarsFill } from "react-icons/bs";

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <button onClick={toggleDarkMode} className="dark-toggle">
        {!isDarkMode ? (
          <FiSun className="sun-icon" />
        ) : (
          <BsFillMoonStarsFill className="moon-icon" />
        )}
      </button>
    </div>
  );
};

export default DarkMode;
