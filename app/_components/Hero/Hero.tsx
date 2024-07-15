import "./Hero.scss";

const Hero = () => {
    return (
        <section className="page__hero">
            <div className="hero__content pd-h">
                <div className="hero__content__wrapper">
                    <h1 className="hero__title">ESports EDUCAP</h1>
                    <p className="hero__sponsor">Турнир Министерства высшего образования, науки и инноваций</p>
                    <strong className="hero__location">Ташкент 2024</strong>
                    <strong className="hero__date">Май 10-23</strong>
                </div>
            </div>
        </section>
    )
}

export default Hero