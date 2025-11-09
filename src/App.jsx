// App component gets all components.
// it is entry point.

import "./app.css";

import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

export default App;

//
/*

* Header
    - MenuIcon, Searchbar, Usericon
* Body
   -> Sidebar - MenuItems
   -> MainContainer - ButtonsList, VideoContainer(VideoCard)
*/

// rafc - shortcut generates react component in file
