import ICarouselImage from "@/types/ICarouselImage";
import { Carousel } from "../"
import "./PrizeFund.scss";

const PrizeFund = ({ images }: { images: ICarouselImage[] }) => {
    return (
        <section className="page__prize-fund pd-h">
            <div className="prize__wrapper">
                <div className="prize__info">
                    <h2>Призовой фонд</h2>
                    <strong>36 000 000 UZS</strong>
                </div>
            </div>
            <Carousel images={images} />
        </section>
    )
}

export default PrizeFund