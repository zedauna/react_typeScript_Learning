import CardsGrid from "@/components/CardsGrid.tsx";
import Filters from "@/components/Filters.tsx";
import Overview from "@/components/Overview.tsx";
import PaginationContainer from "@/components/PaginationContainer.tsx";
import Title from "@/components/Title.tsx";
import { objectsPerPage } from "@/utils/constants.ts";
import { datastroCustomFetch } from "@/utils/customFetch.ts";
import type { FiltersParams, HubbleImageResponse, HubbleResponseWithParams } from "@/utils/types.ts";
import { useLoaderData, type LoaderFunction } from "react-router-dom";

const hubbleParams={
  order_by:"photo_date_taken desc",
  limit:objectsPerPage,
}

export const hubblePageLoader:LoaderFunction= async({request}):Promise<HubbleResponseWithParams|null>=>{
  try{
    const params:FiltersParams=Object.fromEntries([...new URL(request.url).searchParams.entries()])
    const formatedParams={
      where:params.term? `photo_title like "${params.term}" `:"",
      offset:params.page? objectsPerPage * (parseFloat(params.page)) -1 : 0,
      ...hubbleParams
    };
    const response=await datastroCustomFetch.get<HubbleImageResponse>("",{params:formatedParams});
    return {response:response.data,params}
  }catch(error){
     /* eslint-disable-next-line no-console */
    console.log(error);
    return null;
  }
};

const Hubble = () => {
  const data=useLoaderData() as HubbleResponseWithParams;
  const {response,params}=data;
  // console.log(response);
  return (
    <section className="section">
      <Title text="Hubble telescope photos" />
      <Filters term={params.term} mode="hubble" key={params.term} />
      <Overview objects={response} />
      <CardsGrid objects={response.results} mode="hubble-page" />
      <PaginationContainer />
    </section> 
  )
}
export default Hubble;