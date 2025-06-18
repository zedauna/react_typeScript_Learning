import { Link } from "react-router-dom"

const SpaceXLauncher = () => {
  return (
    <article className="w-full h-[40vh] spacex">
      <div className="align-element text-white p-2 mt-20">
        <p className="font-bold text-4xl capitalize">More about spacex</p>
        <button className="mt-4 slide-btn" type="button" >
          <Link to="/spacex" >Explore</Link>
        </button>
      </div>
    </article>
  )
}
export default SpaceXLauncher