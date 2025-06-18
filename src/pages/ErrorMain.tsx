/* eslint-disable no-console */
import { Button } from "@/components/ui/button.tsx";
import { Link, useRouteError } from "react-router-dom";

const ErrorMain = () => {
    const error=useRouteError();
    console.log(error)
  return (
   <div className="section flex flex-col gap-10 items-start">
       <h4>Il d'agit d'une erreur ... </h4>
       <Button asChild size={"lg"} variant={"default"}>
        <Link to="/">Back Home</Link>
       </Button>
   </div>
  )
}
export default ErrorMain