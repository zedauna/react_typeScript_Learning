import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="test bg-black text-white">
      <div className="align-element min-h-[15vh] flex flex-col justify-center items-center">
        <p className="my-2">2025</p>
        <p className="mars-font text-2xl text-center">alphaSpace, by Jéros</p>
        <p className="underline">ressources:</p>
        <p className="text-center">
          <Link to={"https://www.nasa.gov/"}>Nasa</Link>|<Link to={"jerosweb.com"}>Git</Link>
        </p>
      </div>

    </footer>
  )
}
export default Footer