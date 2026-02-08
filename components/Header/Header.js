"use client";

import { useEffect, useState } from "react";
import { useAppContext } from "@/context/Context";
import Nav from "./Nav";
//import DarkSwitch from "./dark-switch";

const Header = ({ headerTransparent, headerSticky, btnClass }) => {
  const { activeMobileMenu, setActiveMobileMenu, isLightTheme, toggleTheme } =
    useAppContext();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (scrolled > 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {/* <DarkSwitch isLight={isLightTheme} switchTheme={toggleTheme} /> */}
      <header
        className={`rainbow-header header-default ${headerTransparent} ${headerSticky} ${
          isSticky ? "sticky" : ""
        }`}
      >
        <div className="container position-relative">
          <div className="row align-items-center row--0">
            {/* <div className="col-lg-3 col-md-6 col-6">
              <div className="logo">
                <Link href="/">
                  <Image
                    className={isLightTheme ? "logo-light" : "logo-dark"}
                    src={isLightTheme ? logo : logoDark}
                    width={201}
                    height={35}
                    alt="ChatBot Logo"
                  />
                </Link>
              </div>
            </div> */}
            <div className="col-lg-12 col-md-12 col-12 position-static">
              <div className="header-right" style={{justifyContent: 'center'}}>
                <nav className="mainmenu-nav d-none d-lg-block">
                  <Nav />
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
