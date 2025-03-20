import React from "react";

const ButtonPrimary = ({text}) => {
  return (
    <div>
      <button className="p-[10px] rounded-lg bg-sky-500 cursor-pointer hover:bg-sky-600">{text}</button>
    </div>
  );
};

export default ButtonPrimary;
