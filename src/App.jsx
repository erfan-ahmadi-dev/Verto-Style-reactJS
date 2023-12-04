import { RouterProvider } from "react-router-dom";
import routes from "./Route/Routes";
function App() {
  return (
    <div className=" font-[IranRegular] scroll-smooth w-full overflow-hidden ">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
