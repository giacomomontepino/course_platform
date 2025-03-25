import ButtonPrimary from "../components/buttonPrimary";
import image from "../assets/images/image-mountain.svg";
import TextAndCaption from "../components/textAndCaption";
import Footer from "../components/footer";

export default function About() {
  return (
    <>
      <div className="flex flex-col items-center">
        <TextAndCaption
          text1="Impara. Crea. Cresci."
          text2="Siamo un team di sviluppatori e appassionati di tecnologia che ha creato questa piattaforma per rendere l'apprendimento dello sviluppo software accessibile a tutti. Qui potrai trovare corsi pratici e mirati per imparare e costruire applicazioni moderne, step by step."
        />
        <ButtonPrimary text="Voglio saperne di più" />
        <div className="relative mt-5">
          <h3 className="absolute top-55 left-4 text-center text-3xl font-bold text-zinc-400 z-1">
            Insieme fino alla vetta delle Big Tech
          </h3>
          <img
            src={image}
            alt="panorama di montagne"
            className="scale-150 mt-30 rounded-[20px] z-0"
          />
        </div>
      </div>
      <h2 className="text-3xl font-bold text-center mt-40 md:mx-70">
        I nostri valori e principi fondamentali
      </h2>
      <div className="grid grid-cols-2 grid-rows-2 gap-4 m-10 md:mx-35 xl:mx-70">
        <div className="flex flex-col p-10 text-center items-center">
          <svg
            className="my-10"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-15 text-emerald-300"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
            />
          </svg>

          <h3 className="text-xl font-bold mb-2">Continua a crescere</h3>
          <p className="text-sm">
            La vita è crescita. Niente rimane fermo e nemmeno noi. Imparare
            dagli altri e migliorarsi è nel nostro DNA. Quindi… trovate una
            soluzione!
          </p>
        </div>
        <div className="flex flex-col p-10 text-center items-center">
          <svg
            className="my-10"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-15 text-blue-300"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
            />
          </svg>

          <h3 className="text-xl font-bold mb-2">
            Trasparenza totale e apertura
          </h3>
          <p className="text-sm">
            Dare feedback sinceri ci permette di diventare la migliore versione
            di noi stessi e il divertimento nel lavorare insieme non finisce
            mai.
          </p>
        </div>
        <div className="flex flex-col p-10 text-center items-center">
          <svg
            className="my-10"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-15 text-yellow-300"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
            />
          </svg>

          <h3 className="text-xl font-bold mb-2">Riuscire con gioia</h3>
          <p className="text-sm">
            La vita è troppo breve per fare un lavoro che non ci appassiona. Ci
            sosteniamo a vicenda per ricordarcelo sempre.
          </p>
        </div>
        <div className="flex flex-col p-10 text-center items-center">
          <svg
            className="my-10"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-15 text-orange-300"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>

          <h3 className="text-xl font-bold mb-2">Ossessione per il cliente</h3>
          <p className="text-sm">
            Lavoriamo esclusivamente con tecnologie che siamo certi saranno
            amate e utilizzate dai nostri incredibili e instancabili clienti.s
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center sm:mx-30">
        <TextAndCaption
          text1="Pronto a dare il via al tuo percorso di crescita?"
          text2="I nostri corsi sono pensati per portarti al prossimo livello nello sviluppo software. Inizia oggi il tuo viaggio con noi!"
        />
        <ButtonPrimary text="Sono pronto!" />
      </div>
      <Footer />
    </>
  );
}
