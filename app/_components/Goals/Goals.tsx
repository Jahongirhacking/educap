"use client";

import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import "./Goals.scss";
import { useAppSelector } from "@/lib/hooks";
import translations from "@/locales/translations";

const Goals = () => {
    const activeLang = useAppSelector(state => state.languageSlice);
    const goalsContent = translations[activeLang.value].Goals;
    const [isHoverVideo, setIsHoverVideo] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const PlaybackButton = () => (
        <svg
            onMouseOver={() => setIsHoverVideo(true)}
            onMouseOut={() => setIsHoverVideo(false)}
            width="76"
            height="76"
            viewBox="0 0 76 76"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="38" cy="38" r="38" fill={isHoverVideo ? "#7F00FF" : "#37A9E3"} />
            <path d="M53.25 35.8349C54.9167 36.7972 54.9167 39.2028 53.25 40.1651L32.25 52.2894C30.5833 53.2517 28.5 52.0489 28.5 50.1244L28.5 25.8756C28.5 23.9511 30.5833 22.7483 32.25 23.7106L53.25 35.8349Z" stroke="white" strokeWidth="3" />
        </svg>
    );

    return (
        <section className="page__goals pd-h" >
            <div className="goals__content">
                <h2>{goalsContent.title}</h2>
                <p>
                    {goalsContent.paragraph}
                </p>
            </div>
            <div className="player__wrapper">
                {
                    isClient &&
                    <ReactPlayer
                        width="100%"
                        height="100%"
                        url={"https://youtu.be/3ZuSKhnu1P0?si=RCTUQTVBPp1e32I6"}
                        playIcon={<PlaybackButton />}
                        light={"/champions.jpg"}
                        controls
                        playing
                    />
                }
            </div>
        </section>
    )
}

export default Goals
