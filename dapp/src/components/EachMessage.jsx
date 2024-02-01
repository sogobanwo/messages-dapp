import React from "react";

const EachMessage = ({message}) => {
  return (
    <div className="goal">
      <h3 className="message">{message}</h3>
    </div>
  );
};

export default EachMessage;