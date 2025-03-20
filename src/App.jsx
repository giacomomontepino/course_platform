import ButtonPrimary from "./components/buttonPrimary";
import ButtonSecondary from "./components/buttonSecondary";
import RotatingContainers from "./components/rotatingContainers";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-2 m-[25px] mt-20">
        <h1 className="text-3xl font-extrabold text-center">
          Diventa il developer che il futuro vuole 🚀 <br />I migliori corsi di
          sviluppo, ad un clic da te!
        </h1>
        <p className="text-center text-zinc-500">
          Impara, sviluppa e accelera la tua carriera nel mondo del development.{" "}
          <br />
          Accedi ai corsi più aggiornati e costruisci le competenze che ti
          permetteranno di eccellere nel settore tecnologico
        </p>
        <div className="flex gap-5 mt-5">
          <ButtonPrimary text="Provaci gratis per 14 giorni" />
          <ButtonSecondary text="Scopri chi siamo" />
        </div>
        <div className="flex text-xs gap-3">
          <p>✔️ Cancella quando vuoi</p>
          <p>✔️ Ampia scelta di corsi</p>
          <p>✔️ Supporto di esperti 24h</p>
        </div>
      </div>
      <RotatingContainers />
    </>
  );
}

export default App;
