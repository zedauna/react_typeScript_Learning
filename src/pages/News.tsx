import CardsGrid from "@/components/CardsGrid.tsx";
import Filters from "@/components/Filters.tsx";
import Overview from "@/components/Overview.tsx";
import PaginationContainer from "@/components/PaginationContainer.tsx";
import Title from "@/components/Title.tsx";
import { objectsPerPage } from "@/utils/constants.ts";
import { snapiCustomFetch } from "@/utils/customFetch.ts"
import type { FiltersParams, NewsResponse, NewsResponseWithParams } from "@/utils/types.ts";
import { useLoaderData, type LoaderFunction } from "react-router-dom";

const newsParams={
  news_site_exclude:"SpacePolicyOnline.com",
  limit:20,
  //ordering:"date"
};

export const newsPageLoader:LoaderFunction=async ({request}) :Promise<NewsResponseWithParams|null>=>{
  try{
    const params:FiltersParams=Object.fromEntries([...new URL(request.url).searchParams.entries()])
    // console.log(params)

    const formatedParams={
      search:params.term?params.term:"",
      offset:params.page? objectsPerPage * (parseFloat(params.page)) -1 : 0,
      ...newsParams,
    }

    const response =await snapiCustomFetch.get<NewsResponse>("", {
      params:formatedParams,
    });
    return {response:response.data,params};
  }catch(error){
     /* eslint-disable-next-line no-console */
    console.log(error)
    return null;
  }

}

const News = () => {
  const data=useLoaderData() as NewsResponseWithParams;
  const {response,params}=data;
  // console.log(results);
  return (
    <section className="section">
      <Title text="All news" />
      <Filters term={params.term} mode="news" key={params.term}/>
      <Overview objects={data} />
      <CardsGrid objects={response.results} mode="news-page" />
      <PaginationContainer />
    </section>
  )
}
export default News