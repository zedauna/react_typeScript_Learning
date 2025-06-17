import LinksDesktop from "./LinksDesktop.tsx"
import LinksMobile from "./LinksMobile.tsx"

const Navbar = () => {
  return (
    <nav className="bg-black py-5">
      <div className="align-element">
        <LinksMobile />
        <LinksDesktop />
      </div>
    </nav>
  )
}
export default Navbar