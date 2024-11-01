import { Outlet } from "react-router-dom";
import CardScreen from "../CardScreen";

const Layout = () => {
  return (
    <div className="mx-20 mt-0 flex flex-col min-h-screen">
      <div className="flex-1 flex items-center justify-center ">
        <Outlet />
      </div>

      <CardScreen />
    </div>
  );
};

export default Layout;
