import type {CardsGridType, HubbleImage, News, Rocket, WebbImage} from "@/utils/types.ts"
import type { ReactNode } from "react";
import NewsPageCard from "./NewsPageCard.tsx";
import HubblePageCard from "./HubblePageCard.tsx";
import ImageCard from "./ImageCard.tsx";
import RocketCard from "./RocketCard.tsx";

const CardsGrid = ({objects,mode}:{objects:CardsGridType;mode:string}):ReactNode => {
  // console.log(mode)
  // console.log(objects)
  if (mode==="hubble-page"){
    return (
      <div 
      className="grid gap-2 auto-rows-fr grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-16">
      {(objects as HubbleImage[]).map((object,index)=>(
        <HubblePageCard image={object as HubbleImage} key={index} />
      ))}
      </div>
    )
  }else if(mode==="news-page"){
    return (
    <div className="grid grid-cols-1 gap-y-4 auto-rows-[600px] lg:auto-rows-[300px] mb-12">
      {(objects as News[]).map((object,index)=>(
        <NewsPageCard news={object as News} key={index} />
      ))}
    </div>
  )
  }else if (mode==="imagery"){
    return (
      <div className="grid gap-2 auto-rows-fr grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {(objects as WebbImage[]).map((object,index)=>(
          <ImageCard image={object} key={index} />
        ))}
      </div>
    )
  }else if(mode==="rockets"){
    return(
      <div>
        {(objects as (Rocket|null)[]).map((object, index)=>(
          object && <RocketCard rocket={object} index={index} key={index} />
        ))}
      </div>
    )
  }
}
export default CardsGrid