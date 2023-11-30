import React from "react";
import { NavLink } from "react-router-dom";
import { Texts } from "../../utils/Constants";
import { PATHS } from "../../configs/RoutesConfig";
function Navigation() {
  return (
    <nav
      className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
      id="mobile-menu-2 "
    >
      <ul className="flex flex-row w-full gap-6 md:gap-4 text-colorPrimary cursor-pointer hideOnSmall font-[IranRegular] text-sm ">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "activeMenu" : "")}
          >
            {Texts.home}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={PATHS.PRODUCTS}
            className={({ isActive }) => (isActive ? "activeMenu" : "")}
          >
            {Texts.products}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={PATHS.PAGE404}
            className={({ isActive }) => (isActive ? "activeMenu" : "")}
          >
            {Texts.blog}
          </NavLink>
          {/* <Link to="/blog">{persianText.blog}</Link> */}
        </li>
        <li>
          <NavLink
            // TODO change Link to
            to={PATHS.REGISTER}
            className={({ isActive }) => (isActive ? "activeMenu" : "")}
          >
            {Texts.contactus}
          </NavLink>
          {/* <Link to="/contact-us">{persianText.contactus}</Link> */}
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
