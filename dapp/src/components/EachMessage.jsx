import React from "react";
import { FaWindowClose } from "react-icons/fa";


const EachMessage = ({message}) => {
  return (
    <div className="goal">
      <h2>{message}</h2>

      <button
        className="close"
      >
        <FaWindowClose />
      </button>
    </div>
  );
};

export default EachMessage;