import Image from "next/image";
import { esportsLogo, tgLogo, vkLogo, ytLogo } from "@/assets/logos";
import "./Footer.scss";
import { Flex, Typography } from "antd";

const Footer = () => {
    return (
        <footer className="page__footer pd-h">
            <div className="footer__wrapper">
                <Image
                    src={esportsLogo}
                    alt="esports logo"
                    className="logo"
                />

                <Flex vertical gap={15}>
                    <div className="social__links" style={{ marginLeft: 'auto' }}>
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
                    <Typography.Text strong style={{ color: "#fff" }}>
                        &copy; Raqamli ta&apos;lim texnologiyalarini rivojlantirish markazi
                    </Typography.Text>
                </Flex>
            </div>
        </footer>
    )
}

export default Footer