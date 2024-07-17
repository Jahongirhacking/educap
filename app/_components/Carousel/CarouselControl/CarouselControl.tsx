import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import "./CarouselControl.scss";

const CarouselControl = ({ imagesLength, activeIndex, showPrevImage, showNextImage }: {
    imagesLength: number,
    activeIndex: number,
    showPrevImage: () => void,
    showNextImage: () => void,
}) => {
    return (
        <div className="carousel__control">
            <Button className="prev-btn" type="text" icon={<LeftOutlined />} onClick={showPrevImage} />
            {activeIndex} / {imagesLength}
            <Button className="next-btn" type="text" icon={<RightOutlined />} onClick={showNextImage} />
        </div>
    )
}

export default CarouselControl