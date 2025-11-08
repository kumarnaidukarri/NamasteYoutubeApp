// body -> sidebar, main container

import MainContainer from "./MainContainer.jsx";
import Sidebar from "./Sidebar.jsx";

const Body = () => {
  return (
    <div>
      <Sidebar />
      <MainContainer />
    </div>
  );
};

export default Body;
