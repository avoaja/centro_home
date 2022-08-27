import React from "react";

const Alert = ({ type }) => {
  const getAlertMessage = (messageType) => {
    let message = "";
    switch (messageType) {
      case "NoData":
        message = "No Data! Please contact the administrator";
        break;
      case "BadLogin":
        message = "Login failed please try again";
        break;
      default:
        message = "Sorry an error occured";
    }

    return message;
  };

  const alertMessage = getAlertMessage(type);

  return (
    <div
      className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
      role="alert"
    >
      <span className="font-medium" data-cy="alert">{alertMessage}</span>
    </div>
  );
};

export default Alert;
