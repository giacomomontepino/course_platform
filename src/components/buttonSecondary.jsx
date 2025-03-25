import React from "react";

const ButtonSecondary = ({text, onClick}) => {
  return (
    <div>
      <button onClick={onClick} className="p-[10px] rounded-lg bg-zinc-300 cursor-pointer hover:bg-zinc-400">{text}</button>
    </div>
  );
};

export default ButtonSecondary;
