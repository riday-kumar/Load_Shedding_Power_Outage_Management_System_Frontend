import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const HomeCarousel = () => {
  const imgArray = ["/third.jpg", "/first.jpg", "/second.jpg"];
  return (
    <Carousel className="group relative w-full">
      <CarouselContent>
        {imgArray.map((img, index) => (
          <CarouselItem key={img}>
            <div className="">
              <Card className="p-0 m-0 overflow-hidden border-0 bg-white">
                <CardContent className=" relative h-60 p-0 sm:h-87.5 md:h-112.5 lg:h-130">
                  <Image
                    src={img}
                    alt={`Carousel image ${index + 1}`}
                    fill
                    priority={index === 0}
                    sizes="100vw"
                    className="bg-white  transition-transform duration-500 group-hover:scale-[1.01]"
                  />

                  {/* Optional dark overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="left-4 border-0 bg-white/90 shadow-md hover:bg-white" />
      <CarouselNext className="right-4 border-0 bg-white/90 shadow-md hover:bg-white" />
    </Carousel>
  );
};

export default HomeCarousel;
