import { Link } from "react-router-dom";
import ButtonPrimary from "./buttonPrimary";
import ButtonSecondary from "./buttonSecondary";
import Login from "./login";
import Signup from "./signup";

const Navbar = ({ activeModal, setActiveModal }) => {
  //funzione per aggiungure un wrapper uguale sia per login che per signup
  const ModalWrapper = ({ children }) => (
    <div className="fixed inset-0 flex justify-center items-center z-100">
      <div className="relative bg-white p-8 rounded-[20px] shadow-lg w-11/12 md:w-2/3 lg:w-1/3">
        {children}
        <button
          onClick={() => setActiveModal(null)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/*render dei wrapper e di login e signup*/}
      {activeModal === "login" && (
        <ModalWrapper>
          {/*Passa una funzione che quando chiamata cambia il modale*/}
          <Login onSwitchToSignup={() => setActiveModal("signup")}/>
        </ModalWrapper>
      )}
      {activeModal === "signup" && (
        <ModalWrapper>
          <Signup onSwitchToLogin={() => setActiveModal("login")}/>
        </ModalWrapper>
      )}

      <div className={`${activeModal ? "blur-sm" : ""}`}>
        <div className="flex justify-around items-center m-[25px]">
          <div>
            <h1 className="text-xl font-extrabold font-sans uppercase leading-4 ">
              Giacomo <br />
              Montepino
            </h1>
          </div>
          <div className="flex gap-4">
            <Link className="text-sm text-zinc-500 hover:text-sky-500" to="/">
              Home
            </Link>
            <Link
              className="text-sm text-zinc-500 hover:text-sky-500"
              to="/about"
            >
              About
            </Link>
          </div>
          <div className="flex gap-4">
            <ButtonSecondary
              text="Login"
              onClick={() => setActiveModal("login")}
            />
            <ButtonPrimary
              text="Try for free"
              onClick={() => setActiveModal("signup")}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
