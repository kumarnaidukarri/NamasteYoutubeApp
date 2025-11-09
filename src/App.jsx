// App component gets all components.
// it is entry point.

// Library imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./app.css";

// My Components imports
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import MainContainer from "./components/MainContainer.jsx";
import WatchPage from "./components/WatchPage.jsx";

// redux store imports
import { Provider } from "react-redux";
import appStore from "./utils/store/appStore.js";

// router config object
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      { path: "/", element: <MainContainer /> },
      { path: "/watch", element: <WatchPage /> },
    ],
  },
]);

const App = () => {
  return (
    <Provider store={appStore}>
      <div>
        <Header />

        <RouterProvider router={appRouter} />
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
