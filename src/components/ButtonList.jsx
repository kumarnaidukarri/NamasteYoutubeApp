// ButtonList component
// it contains buttons(all,music,movies,gaming,comedy,trending, ...)

import Button from "./Button.jsx";

const buttonNames = [
  "All",
  "Music",
  "Movies",
  "Gaming",
  "Live",
  "Cooking",
  "Cricket",
  "Football",
  "Singing",
  "Dancing",
  "Trending",
];
const ButtonList = () => {
  return (
    <div className="flex">
      {
        // Renders buttonsList based on button names
        buttonNames.map((buttonName, index) => (
          <Button key={index} name={buttonName} />
        ))
      }
    </div>
  );
};

export default ButtonList;
