import React from "react";
import { Link } from "react-router-dom";
import { PATHS } from "../../configs/RoutesConfig";
import { SUB_CATEGOREIS_LINK } from "../../utils/Constants";
function MegaMenu({ setHovered }) {
  return (
    <nav
      className="fixed w-60 h-fit top-16 px-5 py-7 bg-white shadow-lg animate-fade-down z-50"
      onMouseLeave={() => setHovered(false)}
    >
      <ul className="grid grid-cols-2 grid-rows-3 gap-4 place-content-center-center h-full">
        {SUB_CATEGOREIS_LINK.map((item) => {
          return (
            <li>
              <Link
                to={`${PATHS.PRODUCTS}/${item.link}`}
                className="hover:text-orange-500"
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default MegaMenu;
