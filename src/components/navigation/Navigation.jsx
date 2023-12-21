import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import faTexts, { SUB_CATEGOREIS_LINK } from "../../utils/Constants";
import { PATHS } from "../../configs/RoutesConfig";
import MegaMenu from "../mega-menu/MegaMenu";
import { Dropdown } from "flowbite-react";
function Navigation() {
  const [isHovered, setHovered] = useState(false);

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
            {faTexts.home}
          </NavLink>
        </li>

        <Dropdown label={faTexts.products} inline>
          <div className="grid grid-cols-2 grid-rows-3 gap-2 place-content-center-center h-full">
            {SUB_CATEGOREIS_LINK.map((item, index) => {
              return (
                <Dropdown.Item key={index}>
                  <Link to={`${PATHS.PRODUCTS}/${item.link}`}>
                    {item.title}
                  </Link>
                </Dropdown.Item>
              );
            })}
          </div>
        </Dropdown>
        {/* <li
          onMouseEnter={() => {
            setHovered(true);
          }}
        >
          <NavLink
            to={`${PATHS.PRODUCTS}`}
            className={({ isActive }) => (isActive ? "activeMenu" : "")}
          >
            {faTexts.products}
          </NavLink>
        </li>
        {isHovered && <MegaMenu setHovered={setHovered} />} */}

        <li>
          <NavLink
            // TODO change Link to
            to={PATHS.CONTACTUS}
            className={({ isActive }) => (isActive ? "activeMenu" : "")}
          >
            {faTexts.contactus}
          </NavLink>
          {/* <Link to="/contact-us">{persianText.contactus}</Link> */}
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
