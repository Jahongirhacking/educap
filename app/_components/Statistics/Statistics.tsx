import { Card, Col, Row } from "antd";
import "./Statistics.scss";

const Statistics = () => {
    return (
        <section className="page__statistics">
            <Row gutter={24} className="statistics__row pd-h" wrap>
                <Col span={8} className="col-1">
                    <Card className="statistics__card">
                        <h2>425</h2>
                        <p>Студентов</p>
                    </Card>
                </Col>
                <Col span={8} className="col-2">
                    <Card className="statistics__card">
                        <h2>85</h2>
                        <p>Команд</p>
                    </Card>
                </Col>
                <Col span={8} className="col-3">
                    <Card className="statistics__card">
                        <h2>60</h2>
                        <p>Университетов</p>
                    </Card>
                </Col>
            </Row>
        </section>
    )
}

export default Statistics