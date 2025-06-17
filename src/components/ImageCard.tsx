import type { WebbImage } from "@/utils/types.ts"
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card.tsx";

const ImageCard = ({image}:{image:WebbImage}) => {
    const {details, location}=image;
    const {description,mission}=details
  return (
    <>
        <Card className="bg-muted">
            <CardHeader>{mission}</CardHeader>
            <CardContent>
                <img src={location} alt="jwst-pic" className="w-full h-full object-cover"/>
            </CardContent>
            <CardFooter>{description}</CardFooter>
        </Card>
    </>
  )
}
export default ImageCard