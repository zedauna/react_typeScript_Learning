import Title from "@/components/Title.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { datastroCustomFetch } from "@/utils/customFetch.ts";
import {type HubbleImage, type HubbleImageResponse } from "@/utils/types.ts";
import { useLoaderData, useNavigate, type LoaderFunction } from "react-router-dom";

export const singleHubblePageLoader:LoaderFunction=async ({params}):Promise <HubbleImage|null>=>{
    try{
        const formatParams={where : params.id ? `photo_id like "${params.id}"` :``}
        const response =await datastroCustomFetch.get<HubbleImageResponse>("",{params:formatParams});
        return response.data.results[0];
    }catch (error){
         /* eslint-disable-next-line no-console */
        console.log(error);
        return null;
    }
};

const SingleHubble = () => {
    const {photo_date_taken,album_name_tags,photo_description,photo_title,photo_url_m,photo_license} =useLoaderData() as HubbleImage;
    const navigate=useNavigate();
    return (
    <section className="section">
        <Button type="button" variant={"default"} size={"lg"} onClick={()=>navigate(-1)}>Back</Button>
        <Title text="Hubble telescope photo"/>
        <Card>
            <CardHeader>
                <CardTitle className="flex justify-between text-2xl">
                    <div>{photo_title}|{album_name_tags}</div>
                    <div>
                        <p>Taken : {photo_date_taken}</p>
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <img src={photo_url_m.url} alt="hubble-pic" className="w-full h-full " />
                <p className="mt-4">{photo_description}</p>
            </CardContent>
            <CardFooter>{photo_license}</CardFooter>
        </Card>
    </section>
    )
}
export default SingleHubble;