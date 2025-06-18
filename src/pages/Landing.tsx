import ApodLauncher from "@/components/ApodLauncher.tsx";
import HubbleLauncher from "@/components/HubbleLauncher.tsx";
import NewsLauncher from "@/components/NewsLauncher.tsx";
import SpaceXLauncher from "@/components/SpaceXLauncher.tsx";
import WebbLauncher from "@/components/WebbLauncher.tsx";
import { datastroCustomFetch, nasaCustomFetch, snapiCustomFetch } from "@/utils/customFetch.ts";
import { type ApodType, type HubbleImage, type HubbleImageResponse, type LandingPageNewsApodHubbles, type News, type NewsResponse } from "@/utils/types.ts";
import {type LoaderFunction } from "react-router-dom";

const newparams={
  limit :9,
}

const hubblesParams={
order_by:"photo_date_taken desc",
limit:12,
}

export const newsFetch= async():Promise<News[]|null>=>{
  try{
    const response=await snapiCustomFetch.get<NewsResponse>("",{params:newparams});
    return response.data.results;
  }catch(error){
    console.log(error);
    return null;
  }
}

export const apodFetch= async():Promise<ApodType|null>=>{
  try{
    const response=await nasaCustomFetch.get<ApodType>("");
    return response.data;
  }catch(error){
    console.log(error);
    return null;
  }
}

export const hubblesFetch= async():Promise<HubbleImage[]|null>=>{
  try{
    const response=await datastroCustomFetch.get<HubbleImageResponse>("",{params:hubblesParams});
    return response.data.results;
  }catch(error){
    console.log(error);
    return null;
  }
}

export const LandingpageLoader:LoaderFunction=async():Promise<LandingPageNewsApodHubbles|null>=>{
  try{
    const [news,apod,hubbles]=await Promise.all([newsFetch(),apodFetch(),hubblesFetch()]);
    return {news,apod,hubbles};
  } catch (error){
    console.log(error);
    return null;
  }
}


const Landing = () => {
  //const data=useLoaderData() as LandingPageNewsApodHubbles;
  // console.log(data);
  return (
    <section>
      <NewsLauncher />
      <SpaceXLauncher /> 
      <ApodLauncher />
      <WebbLauncher/>
      <HubbleLauncher />
    </section>
  )
}
export default Landing