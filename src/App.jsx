// App component gets all components.
// it is entry point.

import "./app.css";

import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";

// redux store imports
import { Provider } from "react-redux";
import appStore from "./utils/store/appStore.js";

const App = () => {
  return (
    <Provider store={appStore}>
      <div>
        <Header />
        <Body />
      </div>
    </Provider>
  );
};

export default App;

//
/*
* Header
    - MenuIcon, Searchbar, Usericon
* Body
   -> Sidebar       - MenuItems
   -> MainContainer - ButtonsList, VideoContainer(VideoCard)
*/

// rafc - shortcut generates react component in file
