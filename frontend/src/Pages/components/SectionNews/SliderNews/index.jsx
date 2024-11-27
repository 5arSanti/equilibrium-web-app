import React from "react";
import Slider from "react-slick";
import { AppContext } from "../../../../Context";


import { NextArrowCard, PrevArrowCard } from "./ArrowsCard";
import { NewsCard } from "../NewsCard";
import { WrapperContainer2 } from "../../WrapperContainers";

const SliderNews = () => {
	const { windowWith, responseData } = React.useContext(AppContext);

	const { news } = responseData;

    const options = {
        infinite: true,
		speed: 1250,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
        autoplaySpeed: 6000,
        dots: true,
        arrows: true,
        nextArrow: <NextArrowCard/>,
		prevArrow: <PrevArrowCard/>,
		style: { width: "100%",},
		focusOnSelect: false,
		pauseOnHover: true,
		responsive: [
			{
			breakpoint: 1150,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
			breakpoint: 700,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		]
    }


    return(
        <WrapperContainer2 justifyContent="center" alignItems="center" padding={windowWith <= 450 ? 0 : 15}>
            <Slider {...options}>
                {news?.map((item, index) => (
                    <NewsCard key={index} item={item}/>
                ))}
            </Slider>
        </WrapperContainer2>
    );
}

export { SliderNews };