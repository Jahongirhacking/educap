import { Image } from "antd";
import "./Gallery.scss";
import { useState } from "react";
import ICarouselImage from "@/types/ICarouselImage";
import CarouselControl from "../Carousel/CarouselControl/CarouselControl";
import GallerySlides from "./GallerySlides";
import translations from "@/locales/translations";
import { useAppSelector } from "@/lib/hooks";

const Gallery = ({ images }: { images: ICarouselImage[] }) => {
    const activeLang = useAppSelector(state => state.languageSlice);
    const navbarAnchor = translations[activeLang.value].Navbar.anchors;

    const [activeIndex, setActiveIndex] = useState(0);
    const [previousIndex, setPreviousIndex] = useState(-1);
    const [isReverse, setReverse] = useState(false);

    const handleClick = (scale: number) => {
        setPreviousIndex(activeIndex);
        setActiveIndex(prev => (((prev + scale) % images.length) + images.length) % images.length);
        setReverse(scale < 0);
    };

    const showNextImage = () => {
        handleClick(1);
    }

    const showPrevImage = () => {
        handleClick(-1);
    }

    return (
        <div
            className="page__gallery pd-h"
            id={navbarAnchor[3].href.slice(1)}
        >
            <div className="gallery__row">
                <div className="gallery__main-image">
                    <GallerySlides
                        images={images}
                        isReverse={isReverse}
                        activeIndex={activeIndex}
                        previousIndex={previousIndex}
                    />
                </div>
                <div className="gallery__nav">
                    <div className="gallery__images">
                        <Image
                            src={images[(activeIndex + 1) % images.length].high.src}
                            alt="gallery image"
                            placeholder={
                                <Image
                                    src={images[(activeIndex + 1) % images.length].low.src}
                                    preview={false}
                                    alt="gallery image loading"
                                />
                            }
                        />
                        <Image
                            src={images[(activeIndex + 2) % images.length].high.src}
                            alt="gallery image"
                            placeholder={
                                <Image
                                    src={images[(activeIndex + 2) % images.length].low.src}
                                    preview={false}
                                    alt="gallery image loading"
                                    className="loading-image"
                                />
                            }
                        />
                    </div>
                    <CarouselControl
                        activeIndex={activeIndex + 1}
                        imagesLength={images.length}
                        showNextImage={showNextImage}
                        showPrevImage={showPrevImage}
                    />
                </div>
            </div>
        </div>
    )
}

export default Gallery