import Image from "next/image";
import { esportsLogo, tgLogo, vkLogo, ytLogo } from "@/assets/logos";
import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="page__footer pd-h">
            <div className="footer__wrapper">
                <Image
                    src={esportsLogo}
                    alt="esports logo"
                    className="logo"
                />

                <div className="social__links">
                    {
                        [tgLogo, ytLogo, vkLogo].map((image, index) => (
                            <a href="#" key={index}>
                                <Image
                                    width={50}
                                    height={50}
                                    src={image}
                                    alt="social network image"
                                />
                            </a>
                        ))
                    }
                </div>
            </div>
        </footer>
    )
}

export default Footer