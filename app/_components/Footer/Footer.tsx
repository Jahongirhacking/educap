import Image from "next/image";
import { esportsLogo, tgLogo, ytLogo } from "@/assets/logos";
import "./Footer.scss";
import { Flex, Typography } from "antd";
import { useAppSelector } from "@/lib/hooks";
import translations from "@/locales/translations";

const Footer = () => {
    const activeLang = useAppSelector(state => state.languageSlice);

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
                            [
                                { image: tgLogo, href: "https://t.me/uzbekistancybersport1" },
                                { image: ytLogo, href: "https://www.youtube.com/@esportseducup" }
                            ].map((obj, index) => (
                                <a href={obj.href} key={index}>
                                    <Image
                                        width={50}
                                        height={50}
                                        src={obj.image}
                                        alt="social network image"
                                    />
                                </a>
                            ))
                        }
                    </div>
                    <Typography.Text strong style={{ color: "#fff" }}>
                        &copy; {translations[activeLang.value].Footer.organizer}
                    </Typography.Text>
                </Flex>
            </div>
        </footer>
    )
}

export default Footer