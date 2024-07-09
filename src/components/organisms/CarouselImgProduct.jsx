import React from "react";
import Slider from "react-slick";
import { danaPayment, debitPayment, gopayPayment, ovoPayment, productPadi } from "../../assets";

const CarouselImgProduct = ({productImage, onProductImage}) => {

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
        className={className}
        style={{ ...style, display: "block", background: "", borderRadius: '50%', position: 'absolute', right:"0", width: "25px"}}
        onClick={onClick}
        />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
        className={className}
        style={{ ...style, display: "block", background: "", zIndex: '1', borderRadius: '50%', position: 'absolute', left:"8px", width: "25px"}}
        onClick={onClick}
        />
    );
  }

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          initialSlide: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Slider {...settings}>
      <div className="px-1">
        <div onClick={()=>onProductImage(1)} className="box w-full h-[80px] md:h-[80px] rounded-md overflow-hidden">
          <img src={productImage[0]} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="px-1">
        <div onClick={()=>onProductImage(2)} className="box w-full h-[80px] md:h-[80px] rounded-md overflow-hidden">
          <img src={productImage[1]} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="px-1">
        <div onClick={()=>onProductImage(3)} className="box w-full h-[80px] md:h-[80px] rounded-md overflow-hidden">
          <img src={productImage[2]} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="px-1">
        <div onClick={()=>onProductImage(4)} className="box w-full h-[80px] md:h-[80px] rounded-md overflow-hidden">
          <img src={productImage[3]} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="px-1">
        <div onClick={()=>onProductImage(5)} className="box w-full h-[80px] md:h-[80px] rounded-md overflow-hidden">
          <img src={productImage[4]} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </Slider>
  );
};

export default CarouselImgProduct;
