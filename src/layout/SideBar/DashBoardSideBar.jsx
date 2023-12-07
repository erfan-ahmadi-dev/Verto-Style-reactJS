import React from "react";
import { Link } from "react-router-dom";
import logoPic from "../../assets/images/logowhite.svg";
import {
  MdOutlineShoppingCartCheckout as OrdersIcon,
  MdPriceCheck as PriceIcon,
  MdDashboard as DashboardIcon,
  MdLogout as LogoutIcon,
  MdHome as HomeIcon,
} from "react-icons/md";
import { GiClothes as ProductIcon } from "react-icons/gi";
import faText from "../../utils/Constants";
import { PATHS } from "../../configs/RoutesConfig";
function DashBoardSideBar() {
  return (
    <div className="w-[18%]">
      <aside
        id="default-sidebar"
        className=" w-full h-screen max-h-max transition-transform -translate-x-full sm:translate-x-0 shadow-md text-white animate-fade-left "
        aria-label="Sidenav"
      >
        <div className="overflow-y-auto py-5 px-3 h-full bg-gray-800 border-r border-gray-200 relative ">
          <div className="flex flex-col gap-4 border-b-2 border-gray-500 pb-4">
            <Link to={PATHS.HOME}>
              <img
                src={logoPic}
                className="w-fit h-8 self-center"
                alt="vertostyle logo"
              />
            </Link>

            <span className="text-xs">به پنل ادمین خوش آمدید</span>
          </div>
          <ul className="pt-5 flex flex-col gap-4 space-y-2 border-gray-200 ">
            <li>
              <Link to={PATHS.DASHBOARD} className="flex gap-2 items-center">
                <DashboardIcon className="h-5 w-5" />
                <span className="ml-3">{faText.dashborad}</span>
              </Link>
            </li>
            <li>
              <Link
                to={PATHS.DASHBOARD_ORDERS}
                className="flex gap-2 items-center"
              >
                <OrdersIcon className="h-5 w-5" />
                <span className="ml-3">{faText.orders}</span>
              </Link>
            </li>
            <li>
              <Link
                to={PATHS.DASHBOARD_PRODUCTS}
                className="flex gap-2 items-center "
              >
                <ProductIcon className="h-5 w-5" />
                <span className="ml-3">{faText.products}</span>
              </Link>
            </li>
            <li>
              <Link
                to={PATHS.DASHBOARD_PRICES_STOCK}
                className="flex gap-2 items-center"
              >
                <PriceIcon className="h-5 w-5" />
                <span className="ml-3">{faText.entityAndPrice}</span>
              </Link>
            </li>
          </ul>
          <div className="absolute bottom-5 flex  flex-col gap-4">
            <Link to={PATHS.HOME} className="flex gap-2 items-center">
              <HomeIcon className="h-5 w-5" />
              <span className=" ">{faText.home}</span>
            </Link>
            <Link to={PATHS.HOME} className="flex gap-2 items-center">
              <LogoutIcon className="h-5 w-5" />
              <span className="">{faText.logout}</span>
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default DashBoardSideBar;
