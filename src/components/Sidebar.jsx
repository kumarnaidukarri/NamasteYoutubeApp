// Sidebar component contains nav items.

import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((appStore) => appStore.sidebarMenu.isMenuOpen); // hook to Subscribe the store
  console.log(isMenuOpen);

  // 'Early Return Pattern' (or) 'Gaurd Clause'
  if (!isMenuOpen) return null;

  return (
    <div className="w-48 p-5 shadow-lg">
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold mt-5">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold mt-5">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;

// click on hamberger menu icon -> an action is dispached -> calls a reducer function which modifies the Slice of store.
// sidebar component is Subscribed to redux store. it automatically updates.
