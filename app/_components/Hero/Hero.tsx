import translations from "@/locales/translations";
import "./Hero.scss";
import { useAppSelector } from "@/lib/hooks";

const Hero = () => {
    const activeLang = useAppSelector(state => state.languageSlice);
    const heroContent = translations[activeLang.value].Hero;
    return (
        <section className="page__hero">
            <div className="hero__content pd-h">
                <div className="hero__content__wrapper">
                    <h1 className="hero__title">ESports EDUCUP</h1>
                    <p className="hero__sponsor">{heroContent.sponsor}</p>
                    <strong className="hero__location">{heroContent.location}</strong>
                    <strong className="hero__date">{heroContent.date}</strong>
                </div>
            </div>
        </section>
    )
}

export default Hero