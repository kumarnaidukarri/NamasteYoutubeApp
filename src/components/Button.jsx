//  Button component

const Button = (props) => {
  const { name } = props;

  return (
    <div>
      <button className="m-2 px-4 py-2 bg-gray-200 rounded-lg"> {name} </button>
    </div>
  );
};

export default Button;
