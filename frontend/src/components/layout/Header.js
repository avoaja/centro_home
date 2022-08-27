import React from "react";
import { Link } from "react-router-dom";
import useCentroStore from "../../store/useCentroStore";
import Button from "../Button";

const Header = () => {
  const { isLoggedIn, logOut } = useCentroStore((state) => state);

  return (
    <header>
      <nav>
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Centro Take Home
            </span>
          </Link>
          <div className="flex items-center lg:order-2">
            {isLoggedIn && (
              <Button onClick={logOut} type="secondary" label="Log Out" cypressTag="logout" />
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
