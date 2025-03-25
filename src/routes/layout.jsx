import { useState } from "react";
import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  //stato per gestire l'apertura del login o del signup
  const [activeModal, setActiveModal] = useState(null);

  return (
    <>
      <Navbar activeModal={activeModal} setActiveModal={setActiveModal} />
      <div className={`min-h-screen ${activeModal ? "blur-sm" : ""}`}>
        <Outlet context={{ setActiveModal }} />
      </div>
    </>
  );
}
