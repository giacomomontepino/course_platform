import React, { useState } from "react";
import TextAndCaption from "./textAndCaption";
import { Link } from "react-router-dom";

const Signup = ({ onSwitchToLogin }) => {
  //stato per gestire l'errore
  const [error, setError] = useState("");
  //stato per tenere traccia e gestire il form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  //funziona che aggiorna dinamicamente il form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    //per prevenire il comportamento di default del form
    e.preventDefault();
    // Aggiungo qui la logica per la registrazione
    if (!formData.email.includes("@")) {
      setError("Inserisci un indirizzo mail valido");
      return;
    }
    setError("");
    // Resetto il form
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="flex flex-col items-center">
      <TextAndCaption
        text1="Registrati in meno di 30 secondi"
        text2="Unisciti a centinaia di developer che già hanno fatto la loro scelta e provaci gratuitamente per 14 giorni!"
      />
      <form
        className="flex flex-col border border-zinc-300 rounded-[20px] w-full mb-5"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
          placeholder="👤 Nome e Cognome"
          className="border-zinc-300 p-4 focus:outline-none"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="📧 Email"
          onChange={handleChange}
          className="border-t-1 border-zinc-300 p-4 focus:outline-none"
        />
        {error && <p className="text-red-500 text-sm mt-2 pl-4">{error}</p>}
        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="🔑 Password"
          onChange={handleChange}
          className="border-t-1 border-zinc-300 p-4 focus:outline-none"
        />
      </form>
      <button
        type="submit"
        className="w-full p-[10px] rounded-[20px] bg-sky-500 cursor-pointer hover:bg-sky-600"
        onClick={handleSubmit}
      >
        Registrati
      </button>
      <label name="checkbox" className="text-zinc-400 mt-5 text-center px-5">
        <input type="checkbox" className="m-2" />
        Creando un account, accetti i nostri Termini e Condizioni generali e la
        nostra Informativa sulla Privacy.
      </label>
      <p className="text-zinc-400 mt-5 text-center px-5">
        Hai già un account?{" "}
        <a to="/login" onClick={onSwitchToLogin} className="text-zinc-400 hover:text-sky-500 cursor-pointer">
          Accedi
        </a>
      </p>
    </div>
  );
};

export default Signup;
