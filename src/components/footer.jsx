import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
    <div className="bg-zinc-100 grid grid-cols-2 gap-5 text-center mt-40">
        <div className="flex flex-col my-5">
            <h3 className="text-md font-bold uppercase mb-5">Links</h3>
            <Link className="text-sm text-zinc-500 hover:text-sky-500" to="blog">Blog</Link>
            <Link className="text-sm text-zinc-500 hover:text-sky-500" to="support">Support</Link>
            <Link className="text-sm text-zinc-500 hover:text-sky-500" to="docs">Docs</Link>
            <Link className="text-sm text-zinc-500 hover:text-sky-500" to="pricing">Pricing</Link>
        </div>
        <div className="flex flex-col my-5">
            <h3 className="text-md font-bold uppercase mb-5">Legal</h3>
            <Link className="text-sm text-zinc-500 hover:text-sky-500" to="cookie-policy">Cookie Policy</Link>
            <Link className="text-sm text-zinc-500 hover:text-sky-500" to="privacy-policy">Privacy Policy</Link>
            <Link className="text-sm text-zinc-500 hover:text-sky-500" to="terms">Termini & Condizioni</Link>
            <Link className="text-sm text-zinc-500 hover:text-sky-500" to="refund">Informativa sui rimborsi</Link>
        </div>
    </div>
    </>
  )
}

export default Footer