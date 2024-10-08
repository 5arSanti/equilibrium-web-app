import React from "react";
import Slider from "react-slick";


import { NextArrowCard, PrevArrowCard } from "./ArrowsCard";
import { AppContext } from "../../../Context";
import { WrapperContainer2 } from "../WrapperContainers";

const SliderWrapper = ({children, padding, arrows=true, dots=true, slidesToShow=1}) => {
	const context = React.useContext(AppContext)

    const paddingValue = padding ? padding : (context.windowWith <= 450 ? 0 : padding )

    const options = {
        infinite: true,
		speed: 1250,
		slidesToShow: slidesToShow,
		slidesToScroll: 1,
		autoplay: true,
        autoplaySpeed: 6000,
        dots: dots,
        arrows: arrows,
        nextArrow: <NextArrowCard/>,
		prevArrow: <PrevArrowCard/>,
		style: { width: "100%",},
		focusOnSelect: false,
		pauseOnHover: false,
		responsive: [
			{
			breakpoint: 1150,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		]
    }


    return(
        <WrapperContainer2 justifyContent="center" alignItems="center" padding={paddingValue}>
            <Slider {...options}>
                {children}
            </Slider>
        </WrapperContainer2>
    );
}

export { SliderWrapper };