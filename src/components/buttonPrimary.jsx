import React from "react";

const ButtonPrimary = ({text, onClick}) => {
  return (
    <div>
      <button onClick={onClick} className="p-[10px] rounded-lg bg-sky-500 cursor-pointer hover:bg-sky-600">{text}</button>
    </div>
  );
};

export default ButtonPrimary;
