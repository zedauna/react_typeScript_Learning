import ApodPlayer from "@/components/ApodPlayer.tsx";
import Title from "@/components/Title.tsx";
import { nasaCustomFetch } from "@/utils/customFetch.ts";
import { numberToDate } from "@/utils/functions.ts";
import type { ApodType } from "@/utils/types.ts";
import { useEffect, useState } from "react";
import { useLoaderData, type LoaderFunction } from "react-router-dom";

export const apodPageLoader:LoaderFunction=async():Promise<ApodType|null>=>{
  try{
    const response= await nasaCustomFetch.get<ApodType>('');
    return response.data
  }catch(error){
     /* eslint-disable-next-line no-console */
    console.log(error);
    return null;
  }
}

const Apod = () => {
  const defaultApod=useLoaderData() as ApodType;
  const [data, setData]=useState<ApodType>(defaultApod);
  const [day,setDay]=useState<number>(0);
  const [isLoading,setIsLoading]=useState<boolean>(false)
  // console.log(defaultApod);

  const fetchApod=async(day:number):Promise<void|null> =>{
    setIsLoading(true);
    try{
      const params={date:numberToDate(day)};
      const response= await nasaCustomFetch.get<ApodType>('',{params});
      setData(response.data);
      setIsLoading(false);
      // return response.data
    }catch(error){
      /* eslint-disable-next-line no-console */
      console.log(error);
      setIsLoading(false);
      return null;
    }
  }
  useEffect(()=>{
    fetchApod(day);
  },[day]);

  return (
    <section>
      <Title text="Nasa 's astronomy picture of the day" />
      <ApodPlayer apod={data} day={day}  setDay={setDay} isLoading={isLoading} />
    </section>
  )
}
export default Apod;