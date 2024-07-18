import ICarouselImage from "@/types/ICarouselImage";
import { Carousel } from "../"
import "./PrizeFund.scss";
import { useAppSelector } from "@/lib/hooks";
import translations from "@/locales/translations";

const PrizeFund = ({ images }: { images: ICarouselImage[] }) => {
    const activeLang = useAppSelector(state => state.languageSlice);
    const prizeFundContent = translations[activeLang.value].PrizeFund;

    return (
        <section className="page__prize-fund pd-h">
            <div className="prize__wrapper">
                <div className="prize__info">
                    <h2>{prizeFundContent.title}</h2>
                    <strong>36 000 000 UZS</strong>
                </div>
            </div>
            <Carousel images={images} />
        </section>
    )
}

export default PrizeFund