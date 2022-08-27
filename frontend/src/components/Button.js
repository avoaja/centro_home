import React from "react";

const Button = ({ label, type, onClick, cypressTag }) => {
  const getButtonColor = (buttonType) => {
    let colorBase = "";
    switch (buttonType) {
      case "primary":
        colorBase = "bg-blue-700 hover:bg-blue-400";
        break;
      case "secondary":
        colorBase = "bg-red-700 hover:bg-red-400";
        break;
      default:
        colorBase = "bg-gray-700 hover:bg-gray-400";
    }

    return colorBase;
  };
  const buttonColor = getButtonColor(type);

  return (
    <button
      onClick={onClick}
      href="."
      className={`${buttonColor} text-white rounded-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none`}
      data-cy={cypressTag}
    >
      {label ? label : "Default"}
    </button>
  );
};

export default Button;
