

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Slider/Slide.css"

import Slider from "react-slick";
// import { Link } from "react-router-dom";

export const Myslider = () => {


  const renderSlides = () =>
    [{img:"https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/351ade425a21d0f7.jpg?q=50"},{img:"https://rukminim1.flixcart.com/flap/1688/280/image/6549654b7720f105.jpg?q=50"},
    {img:"https://rukminim1.flixcart.com/flap/1688/280/image/3c1ffd44cb438c16.jpg?q=50"},{img:"https://rukminim1.flixcart.com/flap/1688/280/image/d4d6cd8bd0c533a1.jpg?q=50"},
    {img:"https://rukminim1.flixcart.com/flap/1688/280/image/f2bf22581e9ec489.jpg?q=50"}
    ].map(num => (

      <div className="my1slides">
        <img className="proimg" src={num.img} alt="" />
        
      </div>
    ));

  function Arrow(props) {
    let className = props.type === "next" ? "nextArrow" : "prevArrow";
    className += " arrow";
    const char = props.type === "next" ? "﹥" : "﹤";
    return (
      <span className={className} onClick={props.onClick}>
        {char}
      </span>
    );
  }

  return (
    <div className="masterslide">
      <div className="myApp">
       
        <Slider

          nextArrow={<Arrow type="next" />}
          prevArrow={<Arrow type="prev" />}
          dots={false}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay={true}
          responsive={[ {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              adaptiveHeight: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },]}
          
        >
          {renderSlides()}
        </Slider>
       
      </div>
      <img className="bankimg" src="https://rukminim1.flixcart.com/flap/2907/251/image/b3a198e3adc98ab8.jpg?q=50" alt="" />
    </div >
  );
}





