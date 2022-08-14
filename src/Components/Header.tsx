import React from "react";
import { HiMenu } from "react-icons/hi";
import Logo from "../assets/img/logo.svg";
import Nav from "./Nav";

interface Props {
  setNavMobile: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = (props: Props) => {
  const { setNavMobile } = props;

  return (
    <header className="py-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* logo */}
          <a href="#">
            <img src={Logo} className="h-[30px]" alt="" />
          </a>

          {/* Nav */}
          <Nav />

          {/* Nav Mobile */}
          <HiMenu
            className="lg:hidden text-3xl text-white cursor-pointer"
            onClick={() => setNavMobile(true)}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
