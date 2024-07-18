import { Card, Col, Row } from "antd";
import "./Statistics.scss";
import { useAppSelector } from "@/lib/hooks";
import translations from "@/locales/translations";

const Statistics = () => {
    const activeLang = useAppSelector(state => state.languageSlice);
    const statisticsContent = translations[activeLang.value].Statistics;
    const navbarAnchor = translations[activeLang.value].Navbar.anchors;

    return (
        <section
            className="page__statistics"
            id={navbarAnchor[0].href.slice(1)}
        >
            <Row gutter={24} className="statistics__row pd-h" wrap>
                <Col span={8} className="col-1">
                    <Card className="statistics__card">
                        <h2>425</h2>
                        <p>{statisticsContent.students}</p>
                    </Card>
                </Col>
                <Col span={8} className="col-2">
                    <Card className="statistics__card">
                        <h2>85</h2>
                        <p>{statisticsContent.teams}</p>
                    </Card>
                </Col>
                <Col span={8} className="col-3">
                    <Card className="statistics__card">
                        <h2>60</h2>
                        <p>{statisticsContent.universities}</p>
                    </Card>
                </Col>
            </Row>
        </section>
    )
}

export default Statistics