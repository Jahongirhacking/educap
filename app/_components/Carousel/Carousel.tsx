import { useEffect, useRef, useState } from "react";
import { slider1, slider1Min, slider2, slider2Min, slider3, slider3Min, slider4, slider4Min, slider5, slider5Min, slider6, slider6Min, slider7, slider7Min } from "@/assets/images";
import "./Carousel.scss";
import Image from "next/image";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button } from "antd";

const carouselImages = [
    {
        high: slider1,
        low: slider1Min
    },
    {
        high: slider2,
        low: slider2Min
    },
    {
        high: slider3,
        low: slider3Min
    },
    {
        high: slider4,
        low: slider4Min
    },
    {
        high: slider5,
        low: slider5Min
    },
    {
        high: slider6,
        low: slider6Min
    },
    {
        high: slider7,
        low: slider7Min
    },
];

const slideTime = 6000;
const loaderTimeRate = slideTime / 100;

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [loaderTime, setLoaderTime] = useState(0);

    const slideIntervalId = useRef<NodeJS.Timeout | null>(null);
    const loaderIntervalId = useRef<NodeJS.Timeout | null>(null);

    const showNextImage = () => {
        setActiveIndex((prev) => (prev + 1) % carouselImages.length);
    };

    const showPrevImage = () => {
        setActiveIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
    };

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
                setLoaderTime((prev) => Math.min(prev + 1, 100));
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
    }, [activeIndex]);

    return (
        <div className="carousel__wrapper">
            <div className="carousel__main-image">
                <Image
                    src={carouselImages[activeIndex].high}
                    blurDataURL={carouselImages[activeIndex].low.src}
                    alt="main image" />
                <span className="carousel__loader" style={{ width: `${loaderTime}%` }} />
            </div>
            <nav className="carousel__nav">
                <div className="nav__images">
                    {carouselImages.map((img, index) => (
                        <div
                            key={index}
                            className={`nav__image ${activeIndex === index ? "active" : ""}`}
                        >
                            <Image
                                width={73}
                                height={46}
                                src={img.high}
                                blurDataURL={img.low.src}
                                onClick={() => setActiveIndex(index)}
                                alt="nav image"
                            />
                        </div>
                    ))}
                </div>
                <div className="nav__control">
                    <Button icon={<LeftOutlined />} onClick={showPrevImage} />
                    {activeIndex + 1} / {carouselImages.length}
                    <Button icon={<RightOutlined />} onClick={showNextImage} />
                </div>
            </nav>
        </div>
    );
};

export default Carousel;
