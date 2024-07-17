import { Carousel } from "../"
import "./PrizeFund.scss";

const PrizeFund = () => {
    return (
        <section className="page__prize-fund pd-h">
            <div className="prize__wrapper">
                <div className="prize__info">
                    <h2>Призовой фонд</h2>
                    <strong>36 000 000 UZS</strong>
                </div>
            </div>
            <Carousel />
        </section>
    )
}

export default PrizeFund