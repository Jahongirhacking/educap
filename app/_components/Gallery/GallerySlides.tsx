import { Image } from "antd";
import clsx from "clsx";
import { StaticImageData } from "next/image";
import './GallerySlides.scss';

const GallerySlides = ({ images, isReverse, activeIndex, previousIndex, className }: {
    images: StaticImageData[],
    isReverse: boolean,
    activeIndex: number,
    previousIndex: number
    className?: string
}) => {

    const clsName = clsx("gallery__carousel", {
        reverse: isReverse
    });

    return (
        <div className={`${clsName} ${className}`}>
            {
                images.map((image, index) => (
                    <CarouselSlide
                        isActive={activeIndex === index}
                        isPrevious={previousIndex === index}
                        key={index}
                        url={image.src}
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
        <div className={className} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image alt="slider image" src={url} preview={{ src: url }}></Image>
        </div>
    );
};

export default GallerySlides;