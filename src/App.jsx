import "./app.css";

import Header from "./Header.jsx";
import Body from "./Body.jsx";

const App = () => {
  return (
    <div>
      <h1 className="text-center bg-amber-300"> Namaste React </h1>

      <Header />
      <Body />
    </div>
  );
};

export default App;

//
/*
Header
Body
 -> Sidebar - MenuItems
 -> MainContainer - ButtonsList, VideoContainer(VideoCard)
*/

// rafc - shortcut generates react component in file
