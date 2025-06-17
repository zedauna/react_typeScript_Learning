import { useLoaderData } from "react-router-dom";
import NewsLauncherHeader from "./NewsLauncherHeader.tsx"
import type { LandingPageNewsApodHubbles } from "@/utils/types.ts";
import NewsLauncherSquaredCards from "./NewsLauncherSquaredCards.tsx";
import NewsLauncherBubbledCards from "./NewsLauncherBubbledCards.tsx";

const NewsLauncher = () => {
   const {news}=useLoaderData() as LandingPageNewsApodHubbles;
  return (
    <article className="w-full py-12 test">
      <div className="align-element h-full">
        <NewsLauncherHeader />
        { news && <NewsLauncherSquaredCards news={news} /> }
        { news && <NewsLauncherBubbledCards news={news} /> }
      </div>
    </article>
  )
}
export default NewsLauncher