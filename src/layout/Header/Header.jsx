import React, { useEffect } from "react";
import logo from "../../assets/images/logoblack.svg";
import { Link, Navigate } from "react-router-dom";
import { PATHS } from "../../configs/RoutesConfig";
import {
  MdMenu as MenuIcon,
  MdOutlineShoppingCart as CartIcon,
  MdPersonOutline as AccountIcon,
} from "react-icons/md";
import Navigation from "../../components/navigation/Navigation";
// TODO Add drawer
function Header() {
  const localData = localStorage.getItem("accessToken");

  return (
    <header className="shadow-md ">
      <nav className="flex bg-white border-gray-200 px-5  py-4 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl w-full self-start">
          <Link to="/" className="flex items-center">
            <img src={logo} className="mr-3 h-6 sm:h-7" alt="vertoStyle Logo" />
          </Link>
          <div className="flex items-center justify-between lg:order-2 gap-4 ">
            <Link
              to={localData ? PATHS.DASHBOARD : PATHS.LOGIN}
              className="hideOnSmall "
            >
              <AccountIcon className="h-6 w-6" />
            </Link>
            <Link to={PATHS.BASKET} className="hideOnSmall ">
              <CartIcon className="h-6 w-6" />
            </Link>

            <button
              type="button"
              className="items-center ml-1 rounded-lg lg:hidden "
              data-drawer-target="drawer-navigation"
              data-drawer-show="drawer-navigation"
              aria-controls="drawer-navigation"
            >
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
          <Navigation />
        </div>
      </nav>
    </header>
  );
}

export default Header;
