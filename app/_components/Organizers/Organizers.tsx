import { Col, Row } from "antd";
import "./Organizers.scss";
import Image from "next/image";
import { organizer1, organizer2, organizer3 } from "@/assets/logos";
import { team1, team2, team3, team4 } from "@/assets/images";
const runnerText = "ESPORTS EDUCUP";

const Organizers = () => {
    const bannerRunners = new Array(3).fill(runnerText);

    return (
        <section className="page__organizers">
            <h2>Организаторы</h2>
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
                            <Image src={team1} alt="team image" width={276} />
                            <p>Организаторы обучали студентов работе на киберспортивной платформе Faceit, помогали создавать команды и регистрироваться на чемпионаты, включая их собственный турнир.</p>
                        </div>

                        <div className="media__card">
                            <Image src={team3} alt="team image" width={476} />
                            <p>На киберсцене было десять компьютеров, а трансляции на YouTube набрали более 4 000 просмотров. Победители получили денежные призы, медали и кубки.</p>
                        </div>
                    </div>

                    <div className="media__grid grid-right">
                        <div className="media__card">
                            <Image src={team2} alt="team image" width={576} />
                            <p>Финал турнира прошел 23 мая в Министерстве Высшего Образования, Науки и Инноваций, с русскоязычными и узбекоязычными комментаторами. </p>
                        </div>

                        <div className="media__card">
                            <Image src={team4} alt="team image" width={376} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Organizers