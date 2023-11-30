import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { PATHS } from "../configs/RoutesConfig";
import Main from "../layout/Main/Main";
import Admin from "../layout/Admin/Admin";
const Home = React.lazy(() => import("../pages/Home/Home"));
const Products = React.lazy(() => import("../pages/products/Products"));
const SingleProduct = React.lazy(() =>
  import("../pages/product/SingleProduct")
);
const Cart = React.lazy(() => import("../pages/cart/Cart"));
const Checkout = React.lazy(() => import("../pages/checkout/Checkout"));
const Payment = React.lazy(() => import("../pages/payment/Payment"));
const Login = React.lazy(() => import("../pages/Login/Login"));
const NotFound = React.lazy(() => import("../pages/notfound/NotFound"));
const AdminCateroies = React.lazy(() =>
  import("../pages/dashboard/Categories/AdminCategories")
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
        path: PATHS.LOGIN,
        element: (
          <React.Suspense fallback={<>...</>}>
            <Login />
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
        path: PATHS.DASHBOARD_PRODUCTS,
        element: (
          <React.Suspense fallback={<>...</>}>
            <AdminProducst />
          </React.Suspense>
        ),
      },
      {
        path: PATHS.DASHBOARD_ORDERS,
        element: (
          <React.Suspense fallback={<>...</>}>
            <AdminOrders />
          </React.Suspense>
        ),
      },
      {
        path: PATHS.DASHBOARD_CATEGORIES,
        element: (
          <React.Suspense fallback={<>...</>}>
            <AdminCateroies />
          </React.Suspense>
        ),
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);
export default routes;
