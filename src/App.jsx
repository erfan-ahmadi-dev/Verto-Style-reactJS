import { RouterProvider } from "react-router-dom";
import routes from "./Route/Routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 60 * 1000 },
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className=" font-[IranRegular] scroll-smooth w-full overflow-hidden ">
        <ToastContainer />
        <RouterProvider router={routes} />
        <ReactQueryDevtools initialIsOpen={false} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
