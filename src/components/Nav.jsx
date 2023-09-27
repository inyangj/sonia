import React, { useState, useEffect } from "react";
import { Link, Element } from "react-scroll";

function Nav() {
  useEffect(() => {
    window.addEventListener("load", () => {
      scrollSpy.update();
    });

    return () => {
      window.removeEventListener("load", () => {
        scrollSpy.update();
      });
    };
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Element name="home">
        <nav className="flex items-center justify-between " id="home">
          <h1 className="font-bold text-2xl">Sonia</h1>

          <ul className="hidden sm:flex justify-between w-1/3  sm:font-semibold text-xl">
            <li>
              <Link to="home" smooth={true}>
                Home
              </Link>
            </li>

            <li>
              <Link to="about" smooth={true}>
                About
              </Link>
            </li>

            <li>
              <Link to="work" smooth={true}>
                Projects
              </Link>
            </li>

            <li>
              <Link to="contact" smooth={true}>
                Contact
              </Link>
            </li>
          </ul>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.5em"
            viewBox="0 0 448 512"
            className="sm:hidden"
            onClick={toggleMenu}
          >
            <style>svg</style>
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>

          {isMenuOpen && (
            <div className="nav fixed right-0 top-0 bg-[#FDC435] p-14 h-screen z-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 384 512"
                className="absolute right-4 top-6"
                onClick={toggleMenu}
              >
                <style>svg</style>
                <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
              </svg>
              <ul className="  grid gap-8  pt-12">
              <li>
              <Link to="home" smooth={true}>
                Home
              </Link>
            </li>

            <li>
              <Link to="about" smooth={true}>
                About
              </Link>
            </li>

            <li>
              <Link to="work" smooth={true}>
                Projects
              </Link>
            </li>

            <li>
              <Link to="contact" smooth={true}>
                Contact
              </Link>
            </li>
              </ul>
            </div>
          )}
        </nav>
      </Element>
    </>
  );
}

export default Nav;
