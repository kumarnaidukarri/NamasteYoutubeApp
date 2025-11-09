// Body component
// it contains Sidebar, Main container

import Sidebar from "./Sidebar.jsx";
import MainContainer from "./MainContainer.jsx";

const Body = () => {
  return (
    <div className="flex">
      <Sidebar />
      <MainContainer />
    </div>
  );
};

export default Body;
