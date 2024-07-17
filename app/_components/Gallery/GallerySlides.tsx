import ICarouselImage from "@/types/ICarouselImage";
import clsx from "clsx";

const GallerySlides = ({ images, isReverse, activeIndex, previousIndex }: {
    images: ICarouselImage[],
    isReverse: boolean,
    activeIndex: number,
    previousIndex: number
}) => {

    const className = clsx("gallery__carousel", {
        reverse: isReverse
    });

    return (
        <div className={className}>
            {
                images.map((image, index) => (
                    <CarouselSlide
                        isActive={activeIndex === index}
                        isPrevious={previousIndex === index}
                        key={index}
                        url={image.high.src}
                    />
                ))
            }
        </div>
    );
};


interface CarouselSlideProps {
    isActive: boolean;
    isPrevious: boolean;
    url: string;
}

const CarouselSlide: React.FC<CarouselSlideProps> = props => {
    const { isActive, isPrevious, url } = props;

    const className = clsx("carousel-slide", {
        active: isActive,
        previous: isPrevious
    });

    return (
        <div className={className} style={{ backgroundImage: `url(${url})` }} />
    );
};

export default GallerySlides;