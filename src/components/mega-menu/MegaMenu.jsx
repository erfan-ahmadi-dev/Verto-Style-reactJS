import React from "react";
import { Link } from "react-router-dom";
import { Texts } from "../../utils/Constants";

function MegaMenu({ setHovered }) {
  return (
    <nav
      className="fixed w-60 h-fit top-16 px-5 py-7 bg-white shadow-lg animate-fade-down"
      onMouseLeave={() => setHovered(false)}
    >
      <ul className="grid grid-cols-2 grid-rows-3 gap-4 place-content-center-center h-full">
        <li>
          <Link
            to="products/men-clothe"
            className={({ isActive }) => (isActive ? "activeMenu" : "")}
          >
            {Texts.menClothe}
          </Link>
        </li>
        <li>
          <Link
            to="products/women-clothe"
            className={({ isActive }) => (isActive ? "activeMenu" : "")}
          >
            {Texts.womenClothe}
          </Link>
        </li>
        <li>
          <Link
            to="products/men-shoes"
            className={({ isActive }) => (isActive ? "activeMenu" : "")}
          >
            {Texts.menShoes}
          </Link>
        </li>
        <li>
          <Link
            to="products/women-shoes"
            className={({ isActive }) => (isActive ? "activeMenu" : "")}
          >
            {Texts.womenShoes}
          </Link>
        </li>
        <li>
          <Link
            to="products/men-sport"
            className={({ isActive }) => (isActive ? "activeMenu" : "")}
          >
            {Texts.menSport}
          </Link>
        </li>
        <li>
          <Link
            to="products/women-shoes"
            className={({ isActive }) => (isActive ? "activeMenu" : "")}
          >
            {Texts.womenShoes}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MegaMenu;