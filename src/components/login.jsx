import React, { useState } from "react";
import TextAndCaption from "../components/textAndCaption";

const Login = ({onSwitchToSignup}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email.includes("@")) {
      setError("Inserisci un indirizzo mail valido");
      return;
    }
    setError("");
  };

  return (
    <div className="flex flex-col items-center">
      <TextAndCaption text1="Login" text2="Hey, siamo felici di rivederti 👋🏻" />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col border border-zinc-300 rounded-[20px] w-full mb-5"
      >
        <input
          type="email"
          placeholder="Indirizzo Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="border-zinc-300 p-4 focus:outline-none"
        />
        {error && <p className="text-red-500 text-sm mt-2 pl-4">{error}</p>}
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="border-t-1 border-zinc-300 p-4 focus:outline-none"
        />
      </form>
      <button
        type="submit"
        onClick={handleSubmit}
        className="w-1/2 p-[10px] rounded-[20px] bg-sky-500 cursor-pointer hover:bg-sky-600"
      >
        Login
      </button>
      <p className="text-zinc-400 mt-5 ">
        <a href="#" className="hover:text-sky-500">
          Password dimenticata?
        </a>
      </p>
      <p className="text-zinc-400 mt-5 ">
        Non sei ancora registrato?{" "}
        <a to="/signup" onClick={onSwitchToSignup} className="hover:text-sky-500 underline cursor-pointer">
          Registrati
        </a>
      </p>
    </div>
  );
};

export default Login;
