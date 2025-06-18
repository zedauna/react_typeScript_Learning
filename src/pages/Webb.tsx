import CardsGrid from "@/components/CardsGrid.tsx";
import RelatedNews from "@/components/RelatedNews.tsx";
import Title from "@/components/Title.tsx";
import WebbTelescopeSummary from "@/components/WebbTelescopeSummary.tsx";
import { snapiCustomFetch, webbCustomFetch } from "@/utils/customFetch.ts"
import { type News, type NewsResponse, type WebbImage, type WebbImageResponse, type WebbNewsAndImagery } from "@/utils/types.ts";
import { useLoaderData, type LoaderFunction } from "react-router-dom";

const newsParams={
  news_site_exclude:"SpacePolicyOnline.com",
  limit:9,
  // ordering:"date",
  summary_contains:"webb",
};

export const newsFetch=async():Promise<News[] | null>=>{
  try{
    const response=await snapiCustomFetch.get<NewsResponse>('',{params:newsParams})
    return response.data.results
  }catch (error){
    console.log(error)
    return null;
  }
}

const imagesParams={
  page:1,
  perPage:4,
}

export const imageryFetch=async():Promise<WebbImage[] | null>=>{
  try{
    const response=await webbCustomFetch.get<WebbImageResponse>('',{params:imagesParams})
    return response.data.body;
  }catch (error){
    console.log(error)
    return null;
  }
}

export const webbPageLoader:LoaderFunction=async():Promise<WebbNewsAndImagery | null>=>{
  try{
    const [news,imagery] =await Promise.all([newsFetch(),imageryFetch()]);
    return {news,imagery}
  }catch (error){
    console.log(error)
    return null;
  }
};

const Webb = () => {
  const {news,imagery}=useLoaderData() as WebbNewsAndImagery;
  return (
  <>
  <section>
    <Title text="James Webb Space Telescope"/>
    {news && <RelatedNews news={news} />}
    <Title text="in bref" />
    <WebbTelescopeSummary />
    <Title text="Recent Imagery" />
    {imagery && <CardsGrid objects={imagery} mode="imagery" />}
  </section>
  </>
  )
}
export default Webb