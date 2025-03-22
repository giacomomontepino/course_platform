import { useState, useEffect } from "react";
import image1 from "../assets/images/image_container1.svg";
import image2 from "../assets/images/image_container2.svg";
import image3 from "../assets/images/image_container3.svg";

export default function RotatingContainers() {
  const [ActiveIndex, setActiveIndex] = useState(0);

  const containers = [
    <div className="text-center w-180 h-100 bg-blue-500 rounded-[20px] mb-5">
      <h1 className="text-center text-3xl pt-7 text-white font-bold">
        Studia comodamente da casa
      </h1>
      <p className="text-center pt-3 text-white">
        Accedi ai tuoi corsi ovunque e in qualsiasi momento. <br /> Studia al
        tuo ritmo, senza stress, direttamente da casa tua!
      </p>
      <img className="absolute top-8 left-50" src={image1} />
    </div>,
    <div className="text-center w-180 h-100 bg-red-500 rounded-[20px] mb-5 flex-col items-center">
      <div className="flex">
        <div className="flex-col items-center">
          <h1 className="text-4xl pt-25 pl-15 pb-5 text-white font-bold">
            Rimani aggiornato
          </h1>
          <p className="text-white text-center pl-15">
            Non perderti nessuna novità! <br /> Seguici sui social e iscriviti
            alla nostra newsletter per rimanere sempre aggiornato sui nuovi
            corsi e offerte esclusive.
          </p>
        </div>
        <img src={image2} className="relative top-7 w-1/2 z-0 -left-9" />
      </div>
    </div>,
    <div className="text-center w-180 h-100 bg-yellow-500 rounded-[20px] mb-5">
      <div className="flex">
        <img src={image3} className="relative top-5 left-10 w-1/3 -rotate-20" />
        <div className="flex-col items-center">
          <h1 className="text-4xl pt-30 pr-15 pb-5 text-white font-bold">
            Una community sempre in crescita
          </h1>
          <p className="text-white text-center pr-13">
            Accedi ai migliori corsi e unisciti a una community di sviluppatori
            in crescita. Il futuro è tuo!
          </p>
        </div>
      </div>
    </div>,
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3); //incrementa l'index e me lo resetta con %3
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative -top-110">
        {containers.map((container, index) => (
          <div
            key={index}
            className={`absolute top-180 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-translate duration-700 ${
              index === ActiveIndex
                ? "scale-x-80 z-10 opacity-100" // card attiva
                : index === (ActiveIndex + 1) % 3
                ? "scale-x-100 scale-y-80 z-5" // card appena dietro
                : "scale-x-80 scale-y-80 z-0" // card dietro
            }`}
          >
            {container}
          </div>
        ))}
      </div>
    </>
  );
}
