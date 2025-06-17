import type { OverviewType } from "@/utils/types.ts"
import type { ReactNode } from "react"

const Overview = ({objects}:{objects:OverviewType}) :ReactNode=> {
  let compteur:number
  if ("total_count" in objects){
    compteur=objects.total_count
  }else{
    compteur=objects.response.count;
  }

    return (
    <div className="my-6 text-xl">{compteur} matches</div>
  )
}
export default Overview;