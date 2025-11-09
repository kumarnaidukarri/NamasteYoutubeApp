// MainContainer component
// it contains ButtonsList(top), VideosContainer(bottom)

import ButtonList from "./ButtonList.jsx";
import VideoContainer from "./VideoContainer.jsx";

const MainContainer = () => {
  return (
    <div className="">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
