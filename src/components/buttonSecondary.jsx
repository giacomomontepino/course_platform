import React from "react";

const ButtonSecondary = ({text}) => {
  return (
    <div>
      <button className="p-[10px] rounded-lg bg-zinc-300 cursor-pointer hover:bg-zinc-400">{text}</button>
    </div>
  );
};

export default ButtonSecondary;
