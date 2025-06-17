import CardsGrid from "@/components/CardsGrid.tsx";
import RelatedNews from "@/components/RelatedNews.tsx";
import Title from "@/components/Title.tsx";
import { snapiCustomFetch, spacexCustomFetch } from "@/utils/customFetch.ts";
import type { News, NewsResponse, Rocket, SpaceXNewsAndRockets } from "@/utils/types.ts";
import { useLoaderData, type LoaderFunction } from "react-router-dom";

const newsParams={
  news_site_exclude:"SpacePolicyOnline.com",
  limit:20,
  // ordering:"date",
  summary_contains:"spacex",
};

const starshipURL="rockets/starship";
const falconNineURL="rockets/falcon9";
const falconHeavyURL="rockets/falconheavy";
const rocketsURL=[starshipURL,falconNineURL,falconHeavyURL]

export const newsFetch=async():Promise<News[] | null>=>{
  try{
    const response=await snapiCustomFetch.get<NewsResponse>('',{params:newsParams});
    return response.data.results;
  }catch (error){
     /* eslint-disable-next-line no-console */
    console.log(error)
    return null;
  }
}

export const rocketFetch=async(rocketURL :string):Promise<Rocket | null>=>{
  try{
    const response=await  spacexCustomFetch.get<Rocket>(rocketURL);
    return response.data;
  }catch (error){
     /* eslint-disable-next-line no-console */
    console.log(error)
    return null;
  }
}

export const rocketsFetch=async():Promise<(Rocket| null)[] | null>=>{
  try{
    const response:(Rocket| null)[]=await Promise.all(rocketsURL.map((rocketURL)=>rocketFetch(rocketURL)))
    return response;
  }catch (error){
     /* eslint-disable-next-line no-console */
    console.log(error)
    return null;
  }
}

export const spacexPageLoader:LoaderFunction=async():Promise<SpaceXNewsAndRockets|null>=>{
  try {
    const [news,rockets] = await Promise.all([newsFetch(),rocketsFetch()])
    return {news,rockets}
  }catch (error){
     /* eslint-disable-next-line no-console */
    console.log(error);
    return null;
  }
}

const Spacex = () => {
  const {news,rockets}=useLoaderData() as SpaceXNewsAndRockets;

   return (
    <section className="section">
      <Title text="spaceX" />
      {news && <RelatedNews news={news} />}
      <Title text="rockets" />
      {rockets && <CardsGrid mode="rockets" objects={rockets} />}
    </section>
  )
}
export default Spacex