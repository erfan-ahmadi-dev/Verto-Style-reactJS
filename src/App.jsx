import { RouterProvider } from "react-router-dom";
import routes from "./Route/Routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 60 * 1000 },
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className=" font-[IranRegular] scroll-smooth w-full overflow-hidden ">
        <RouterProvider router={routes} />
        <ReactQueryDevtools initialIsOpen={false} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
