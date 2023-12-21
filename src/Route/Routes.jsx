import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { PATHS } from "../configs/RoutesConfig";
import Main from "../layout/Main/Main";
import LodingModal from "../components/ui/modal/LoadingModal";
import Admin from "../layout/Admin/Admin";
import ProtectedRoute from "./ProtectedRoute";
const Home = React.lazy(() => import("../pages/home/Home"));
const Products = React.lazy(() => import("../pages/products/Products"));
const SingleProduct = React.lazy(() =>
  import("../pages/product/SingleProduct")
);
const Cart = React.lazy(() => import("../pages/cart/Cart"));
const Checkout = React.lazy(() => import("../pages/checkout/Checkout"));
const Payment = React.lazy(() => import("../pages/payment/Payment"));
const Login = React.lazy(() => import("../pages/login/Login"));
const NotFound = React.lazy(() => import("../pages/notfound/NotFound"));
const ContactUs = React.lazy(() => import("../pages/contactUs/ContactUs"));
const AdminDashboard = React.lazy(() =>
  import("../pages/dashboard/Dashboard/Dashborad")
);
const AdminPriceStock = React.lazy(() =>
  import("../pages/dashboard/PriceAndStocks/PriceAndStocks")
);
const AdminOrders = React.lazy(() =>
  import("../pages/dashboard/Orders/AdminOrders")
);
const AdminProducst = React.lazy(() =>
  import("../pages/dashboard/Products/AdminProducts")
);
const routes = createBrowserRouter([
  {
    path: PATHS.HOME,
    element: <Main />,
    children: [
      {
        index: true,
        element: (
          <React.Suspense
            fallback={
              <>
                <LodingModal />
              </>
            }
          >
            <Home />
          </React.Suspense>
        ),
      },
      {
        path: PATHS.PRODUCTS,
        element: (
          <React.Suspense
            fallback={
              <>
                <LodingModal />
              </>
            }
          >
            <Products />
          </React.Suspense>
        ),
      },
      {
        path: `${PATHS.PRODUCTS}/:category`,
        element: (
          <React.Suspense
            fallback={
              <>
                <LodingModal />
              </>
            }
          >
            <Products />
          </React.Suspense>
        ),
      },
      {
        path: PATHS.PRODUCT,
        element: (
          <React.Suspense
            fallback={
              <>
                <LodingModal />
              </>
            }
          >
            <SingleProduct />
          </React.Suspense>
        ),
      },
      {
        path: PATHS.BASKET,
        element: (
          <React.Suspense
            fallback={
              <>
                <LodingModal />
              </>
            }
          >
            <Cart />
          </React.Suspense>
        ),
      },
      {
        path: PATHS.CHECKOUT,
        element: (
          <React.Suspense
            fallback={
              <>
                <LodingModal />
              </>
            }
          >
            <Checkout />
          </React.Suspense>
        ),
      },
      {
        path: PATHS.PAYMENT,
        element: (
          <React.Suspense
            fallback={
              <>
                <LodingModal />
              </>
            }
          >
            <Payment />
          </React.Suspense>
        ),
      },
      {
        path: PATHS.CONTACTUS,
        element: (
          <React.Suspense
            fallback={
              <>
                <LodingModal />
              </>
            }
          >
            <ContactUs />
          </React.Suspense>
        ),
      },
    ],
  },
  {
    path: PATHS.DASHBOARD,
    element: <Admin />,
    children: [
      {
        index: true,
        element: (
          <React.Suspense
            fallback={
              <>
                <LodingModal />
              </>
            }
          >
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          </React.Suspense>
        ),
      },
      {
        path: PATHS.DASHBOARD_PRODUCTS,
        element: (
          <React.Suspense
            fallback={
              <>
                <LodingModal />
              </>
            }
          >
            <ProtectedRoute>
              <AdminProducst />
            </ProtectedRoute>
          </React.Suspense>
        ),
      },
      {
        path: PATHS.DASHBOARD_ORDERS,
        element: (
          <React.Suspense
            fallback={
              <>
                <LodingModal />
              </>
            }
          >
            <ProtectedRoute>
              <AdminOrders />
            </ProtectedRoute>
          </React.Suspense>
        ),
      },
      {
        path: PATHS.DASHBOARD_PRICES_STOCK,
        element: (
          <React.Suspense
            fallback={
              <>
                <LodingModal />
              </>
            }
          >
            <ProtectedRoute>
              <AdminPriceStock />
            </ProtectedRoute>
          </React.Suspense>
        ),
      },
    ],
  },
  {
    path: PATHS.LOGIN,
    element: (
      <React.Suspense
        fallback={
          <>
            <LodingModal />
          </>
        }
      >
        <Login />
      </React.Suspense>
    ),
  },
  {
    path: "*",
    element: (
      <React.Suspense
        fallback={
          <>
            <LodingModal />
          </>
        }
      >
        <NotFound />
      </React.Suspense>
    ),
  },
]);
export default routes;
