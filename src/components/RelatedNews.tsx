import type { News } from "@/utils/types.ts"
import NewsCard from "./NewsCard.tsx";

const RelatedNews = ({news}:{news:News[]}) => {
    // console.log(news);
  return (
    <div>
        <h1 className="capitalize my-4 text-2xl">Related news</h1>
        <div className="grid gap-2 auto-rows-fr grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2">
            {news.map((item)=>(
                <NewsCard key={item.id} news={item}  />          
            ))}
        </div>
    </div>
  )
}
export default RelatedNews