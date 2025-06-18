import type { LandingPageNewsApodHubbles } from "@/utils/types.ts";
import { CircleArrowRight } from "lucide-react";
import { Link, useLoaderData } from "react-router-dom";

const ApodLauncher = () => {
  const {apod}=useLoaderData() as LandingPageNewsApodHubbles;
  if(!apod){
    return <>Problem while fetching data;</>
  }

  const {copyright,date,media_type,title,url}=apod;
  return (
    <article className="w-full py-12">
      <div className="align-element h-full grip gap-4 lg:grid-cols-2">
        <div>
          <p className="capitalize text-xl">Today</p>
          <p className="capitalize my-4 text-4xl font-bold">Nasa 's astronomy picture of the day</p>
          <p className="capitalize text-2xl">{title}</p>
          <p className="capitalize mt-4">{copyright}</p>
          <p className="capitalize ">{date}</p>
          <p className="capitalize mt-8 flex gap-2">
            Browse archives
            <Link to="/apod">
            <CircleArrowRight color="var(--clr-violet)" className="transition-all hover:-scale-150" />
            </Link>
          </p>
        </div>
        {media_type==="video" ? (
          <iframe src={url} height={"100%"} width={"100%"} className="min-h-[400px]"></iframe>
        ) : (
          <img src={url} alt="apod-pic" />
        )}

      </div>
    </article>
  )
}
export default ApodLauncher