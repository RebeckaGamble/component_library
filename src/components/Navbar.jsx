import React from "react";

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    console.log('Section:', section);

    const navbarHeight = 204;
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
      window.scrollBy(0, -navbarHeight);
    }
  };

  return (
    <nav className="flex flex-row fixed h-16 items-center bg-white w-screen shadow-md z-50">
      <ul className="flex flex-row justify-center tracking-wide gap-2 sm:gap-6 md:gap-10 w-full h-full items-center  sm:font-semibold">
        <li className="relative px-2 py-5">
          <a
            href="#sectionBtn"
            onClick={() => scrollToSection("sectionBtn")}
            className="block relative z-10 hover:text-blue-600"
          >
            Buttons
          </a>
          <span className="block absolute h-2 bg-blue-600 opacity-0 transition-opacity"></span>
        </li>
        <li className="relative px-2 py-5">
          <a
            href="#sectionAlert"
            onClick={() => scrollToSection("sectionAlert")}
            className="block relative  hover:text-blue-600"
          >
            Alert
          </a>
          <span className="block absolute h-2 bg-blue-600 opacity-0 transition-opacity"></span>
        </li>
        <li className="relative px-2 py-5">
          <a
            href="#sectionBadge"
            onClick={() => scrollToSection("sectionBadge")}
            className="block relative z-10 hover:text-blue-600"
          >
            Badge
          </a>
          <span className="block absolute h-2 bg-blue-600 opacity-0 transition-opacity"></span>
        </li>
        <li className="relative px-2 py-5">
          <a
            href="#sectionCard"
            onClick={() => scrollToSection("sectionCard")}
            className="block relative z-10 hover:text-blue-600"
          >
            Card
          </a>
          <span className="block absolute h-2 bg-blue-600 opacity-0 transition-opacity"></span>
        </li>
        <li className="relative px-2 py-5">
          <a
            href="#sectionModal"
            onClick={() => scrollToSection("sectionModal")}
            className="block relative z-10 hover:text-blue-600"
          >
            Modal
          </a>
          <span className="block absolute h-2 bg-blue-600 opacity-0 transition-opacity"></span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
