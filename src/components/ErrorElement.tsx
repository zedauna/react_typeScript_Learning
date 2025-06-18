/* eslint-disable no-console */
import { useRouteError } from "react-router-dom"

const ErrorElement = () => {
    const error=useRouteError();
    console.log(error)
  return (
   <div className="section">
       <h4>Il d'agit d'une erreur ... </h4>
   </div>
  )
}
export default ErrorElement