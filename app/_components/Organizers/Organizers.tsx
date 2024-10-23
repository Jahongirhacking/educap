import { Col, Row } from "antd";
import "./Organizers.scss";
import Image from "next/image";
import { organizer1, organizer2, organizer3 } from "@/assets/logos";
import { team1, team2, team3, team4 } from "@/assets/images";
import translations from "@/locales/translations";
import { useAppSelector } from "@/lib/hooks";
const runnerText = "ESPORTS EDUCUP";

const Organizers = () => {
    const activeLang = useAppSelector(state => state.languageSlice);
    const organizersContent = translations[activeLang.value].Organizers;
    const navbarAnchor = translations[activeLang.value].Navbar.anchors;
    const bannerRunners = new Array(3).fill(runnerText);

    return (
        <section
            className="page__organizers"
            id={navbarAnchor[1].href.slice(1)}
        >
            <h2>{organizersContent.title}</h2>
            <div className="organizers__wrapper">
                <Row gutter={16} className="pd-h">
                    <Col span={8}>
                        <Image src={organizer1} alt="Организатор 1" />
                    </Col>
                    <Col span={8}>
                        <Image src={organizer2} alt="Организатор 2" />
                    </Col>
                    <Col span={8}>
                        <Image src={organizer3} alt="Организатор 3" />
                    </Col>
                </Row>

                <div className="background-banner">
                    {
                        bannerRunners.map((runner, index) => (
                            <h1 key={index} className="esports background-runner">
                                {runner}
                            </h1>
                        ))
                    }
                </div>
            </div>

            <div className="organizers__media pd-h">
                <div className="media__flex">
                    <div className="media__grid grid-left">
                        <div className="media__card">
                            <Image src={team1} alt="team image" width={276} className="team-image-1" />
                            <p>{organizersContent.paragraphs[0]}</p>
                        </div>

                        <div className="media__card">
                            <Image src={team3} alt="team image" width={476} className="team-image-3" />
                            <p>{organizersContent.paragraphs[1]}</p>
                        </div>
                    </div>

                    <div className="media__grid grid-right">
                        <div className="media__card">
                            <Image src={team2} alt="team image" width={576} className="team-image-2" />
                            <p>{organizersContent.paragraphs[2]}</p>
                        </div>

                        <div className="media__card">
                            <Image src={team4} alt="team image" width={376} className="team-image-4" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Organizers