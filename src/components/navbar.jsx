import React from "react";
import { Link } from "react-router-dom";
import ButtonPrimary from "./buttonPrimary";
import ButtonSecondary from "./buttonSecondary";

const Navbar = () => {
  return (
    <>
    <div className="flex justify-around items-center m-[25px]">
      <div>
        <h1 className="text-xl font-extrabold font-sans uppercase leading-4 ">
          Giacomo <br />Montepino
        </h1>
      </div>
      <div className="flex gap-4">
        <Link className="text-sm text-zinc-500 hover:text-sky-500" to="/">Home</Link>
        <Link className="text-sm text-zinc-500 hover:text-sky-500" to="/about">About</Link>
        <Link className="text-sm text-zinc-500 hover:text-sky-500" to="/pricing">Pricing</Link>
        <Link className="text-sm text-zinc-500 hover:text-sky-500" to="/contacts">Contacts</Link>
      </div>
      <div className="flex gap-4">
        <ButtonSecondary text="Login"/>
        <ButtonPrimary text="Try for free" />
      </div>
    </div>
    </>
  );
};

export default Navbar;
