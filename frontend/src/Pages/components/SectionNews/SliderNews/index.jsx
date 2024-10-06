import React from "react";
import Slider from "react-slick";
import { AppContext } from "../../../../Context";


import { NextArrowCard, PrevArrowCard } from "./ArrowsCard";
import { NewsCard } from "../NewsCard";
import { news } from "../../../../utils/news";
import { WrapperContainer2 } from "../../WrapperContainers";

const SliderNews = () => {
	const context = React.useContext(AppContext)

    const options = {
        infinite: true,
		speed: 1250,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: true,
        nextArrow: <NextArrowCard/>,
		prevArrow: <PrevArrowCard/>,
		style: { width: "100%",},
		focusOnSelect: false,
		pauseOnHover: false,
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
        <WrapperContainer2 justifyContent="center" alignItems="center" padding={context.windowWith <= 450 ? 0 : 15}>
            <Slider {...options}>
                {news?.map((item, index) => (
                    <NewsCard key={index} item={item}/>
                ))}
            </Slider>
        </WrapperContainer2>
    );
}

export { SliderNews };