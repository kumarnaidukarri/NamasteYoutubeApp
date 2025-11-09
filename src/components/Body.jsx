// Body component
// it contains Sidebar, Main container

import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar.jsx";
// import MainContainer from "./MainContainer.jsx";

const Body = () => {
  return (
    <div className="flex">
      <Sidebar />

      {/* Outlet fills with
          <MainContainer/> (or) <WatchPage/>
      */}

      <Outlet />
    </div>
  );
};

export default Body;
