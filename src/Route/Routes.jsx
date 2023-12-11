import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { PATHS } from "../configs/RoutesConfig";
import Main from "../layout/Main/Main";
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
          <React.Suspense fallback={<>...</>}>
            <Home />
          </React.Suspense>
        ),
      },
      {
        path: PATHS.PRODUCTS,
        element: (
          <React.Suspense fallback={<>...</>}>
            <Products />
          </React.Suspense>
        ),
      },
      {
        path: `${PATHS.PRODUCTS}/:category`,
        element: (
          <React.Suspense fallback={<>...</>}>
            <Products />
          </React.Suspense>
        ),
      },
      {
        path: PATHS.PRODUCT,
        element: (
          <React.Suspense fallback={<>...</>}>
            <SingleProduct />
          </React.Suspense>
        ),
      },
      {
        path: PATHS.BASKET,
        element: (
          <React.Suspense fallback={<>...</>}>
            <Cart />
          </React.Suspense>
        ),
      },
      {
        path: PATHS.CHECKOUT,
        element: (
          <React.Suspense fallback={<>...</>}>
            <Checkout />
          </React.Suspense>
        ),
      },
      {
        path: PATHS.PAYMENT,
        element: (
          <React.Suspense fallback={<>...</>}>
            <Payment />
          </React.Suspense>
        ),
      },
      {
        path: PATHS.CONTACTUS,
        element: (
          <React.Suspense fallback={<>...</>}>
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
          <React.Suspense fallback={<>...</>}>
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          </React.Suspense>
        ),
      },
      {
        path: PATHS.DASHBOARD_PRODUCTS,
        element: (
          <React.Suspense fallback={<>...</>}>
            <ProtectedRoute>
              <AdminProducst />
            </ProtectedRoute>
          </React.Suspense>
        ),
      },
      {
        path: PATHS.DASHBOARD_ORDERS,
        element: (
          <React.Suspense fallback={<>...</>}>
            <ProtectedRoute>
              <AdminOrders />
            </ProtectedRoute>
          </React.Suspense>
        ),
      },
      {
        path: PATHS.DASHBOARD_PRICES_STOCK,
        element: (
          <React.Suspense fallback={<>...</>}>
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
      <React.Suspense fallback={<>...</>}>
        <Login />
      </React.Suspense>
    ),
  },
  {
    path: "*",
    element: (
      <React.Suspense fallback={<>...</>}>
        <NotFound />
      </React.Suspense>
    ),
  },
]);
export default routes;
