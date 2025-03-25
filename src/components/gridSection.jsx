import image1 from "../assets/images/image_community.svg";
import image2 from "../assets/images/image-computer.svg";
import image3 from "../assets/images/image-gratis.svg";

const GridSection = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-center mx-20 mt-170 md:mx-70">
        Impara facilmente. Il mondo tech varia velocemente e noi ti aiutiamo a
        rimanere sempre sul pezzo.
      </h2>
      <div className="grid grid-col-2 grid-rows-2 mx-20 my-10 gap-3 lg:mx-70 md:h-150">
        <div className="bg-sky-100 rounded-[20px] flex flex-col items-center">
          <h3 className="text-2xl font-bold p-5 text-center">
            Supporto Community
          </h3>
          <p className="px-5 text-center -mb-12 md:-mb-44">
            Dove developers di ogni tipo si scambiano aggiornamenti e novità
            ogni giorno
          </p>
          <img src={image1} alt="immagine della community" className="md:w-[350px]"/>
        </div>
        <div className="bg-violet-100 rounded-[20px]">
          <h3 className="text-2xl font-bold p-5 text-center">
            Lezioni online registrate
          </h3>
          <p className="px-5 text-center -mb-30 md:-mb-37">
            Sappiamo quanto è prezioso il tuo tempo, pertanto offriamo lezioni
            online e registrate che ti permettono di studiare quando meglio
            credi.
          </p>
          <img src={image2} alt="immagine di un computer" className="md:w-[300px]"/>
        </div>
        <div className="col-span-2 bg-orange-100 rounded-[20px]">
          <div className="flex items-center">
            <div className="w-1/2 md:ml-15">
              <h3 className="text-2xl font-bold text-center mt-20 mb-5 md:mt-1">14 giorni free</h3>
              <p className="px-5 text-center">
                Approfitta di tutti i nostri corsi per 14 giorni gratuitamente. Alla
                fine potrai decidere se acquistare i nostri corsi oppure amici
                come prima.
              </p>
            </div>
            <div className="w-1/2">
                <img src={image3} alt="immagine per i 14 giorni gratis" className="md:w-[300px] lg:ml-15"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GridSection;
