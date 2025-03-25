const ContactForm = () => {
  return (
    <>
    <h2 className="text-3xl font-bold text-center mt-30 mb-5">Contattaci per qualsiasi domanda</h2>
      <form action="#" className="grid grid-col-2 grid-rows-4 gap-3 border border-zinc-300 rounded-[20px] mx-10 p-3 md:mx-70">
        <input type="text" placeholder="Nome" className="border-b-1 border-zinc-300 text-center focus:outline-none"/>
        <input type="text" placeholder="Cognome" className="col-start-2 border-b-1 border-zinc-300 text-center focus:outline-none"/>
        <input type="email" placeholder="Email" className="col-span-2 border-b-1 border-zinc-300 text-center focus:outline-none"/>
        <textarea name="" id="" placeholder="Quali dubbi ti affliggono?" className="col-span-2 border-b-1 border-zinc-300 text-center focus:outline-none"></textarea>
        <button className="p-[10px] rounded-lg bg-sky-500 cursor-pointer hover:bg-sky-600 col-span-2">Invia</button>
      </form>
    </>
  )
}

export default ContactForm
