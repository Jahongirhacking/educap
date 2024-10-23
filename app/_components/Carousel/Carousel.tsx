import { useCallback, useEffect, useRef, useState } from "react";
import "./Carousel.scss";
import Image, { StaticImageData } from "next/image";
import CarouselControl from "./CarouselControl/CarouselControl";

const slideTime = 8000;
const loaderTimeRate = slideTime / 101;

const Carousel = ({ images }: { images: StaticImageData[] }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [loaderTime, setLoaderTime] = useState(0);
    const [clsName, setClsName] = useState('');

    const slideIntervalId = useRef<NodeJS.Timeout | null>(null);
    const loaderIntervalId = useRef<NodeJS.Timeout | null>(null);

    const showNextImage = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % images.length);
    }, [images]);

    const showPrevImage = useCallback(() => {
        setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
    }, [images]);

    useEffect(() => {
        const startSlideInterval = () => {
            if (slideIntervalId.current) {
                clearInterval(slideIntervalId.current);
            }
            slideIntervalId.current = setInterval(showNextImage, slideTime);
        };

        const startLoaderInterval = () => {
            if (loaderIntervalId.current) {
                clearInterval(loaderIntervalId.current);
            }
            setLoaderTime(0);
            loaderIntervalId.current = setInterval(() => {
                setLoaderTime((prev) => {
                    if (prev < 25) setClsName('show-img');
                    else if (prev >= 75) setClsName('hide-img');
                    else setClsName('');
                    return Math.min(prev + 1, 100)
                });
            }, loaderTimeRate);
        };

        startSlideInterval();
        startLoaderInterval();

        return () => {
            if (slideIntervalId.current) {
                clearInterval(slideIntervalId.current);
            }
            if (loaderIntervalId.current) {
                clearInterval(loaderIntervalId.current);
            }
        };
    }, [activeIndex, showNextImage]);

    return (
        <div className="carousel__wrapper">
            <div className="carousel__main-image">
                <Image
                    className={clsName}
                    src={images[activeIndex]}
                    blurDataURL={images[activeIndex].src}
                    alt="main image"
                />
                <span className="carousel__loader" style={{ width: `${loaderTime}%` }} />
            </div>
            <nav className="carousel__nav">
                <div className="nav__images">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className={`nav__image ${activeIndex === index ? "active" : ""}`}
                        >
                            <Image
                                width={73}
                                height={46}
                                src={img}
                                blurDataURL={img.src}
                                onClick={() => setActiveIndex(index)}
                                alt="nav image"
                            />
                        </div>
                    ))}
                </div>
                <CarouselControl
                    imagesLength={images.length}
                    activeIndex={activeIndex + 1}
                    showNextImage={showNextImage}
                    showPrevImage={showPrevImage}
                />
            </nav>
        </div>
    );
};

export default Carousel;
