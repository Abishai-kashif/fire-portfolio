import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useSwiper } from "swiper/react";

const WorkSliderBtns = ({
    containerStyles,
    btnStyles,
    iconStyles,
}: {
    containerStyles: string;
    btnStyles: string;
    iconStyles: string;
}) => {
    const swiper = useSwiper();

    return (
        <div className={containerStyles}>
            <button className={btnStyles} onClick={() => swiper.slidePrev()}>
                <FiChevronLeft className={iconStyles} />
            </button>
            <button className={btnStyles} onClick={() => swiper.slideNext()}>
                <FiChevronRight className={iconStyles} />
            </button>
        </div>
    );
};

export default WorkSliderBtns;
