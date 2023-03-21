import React, { useRef, useState } from "react";
import Slider from "react-slick";

const CustomBtns = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setCurrentSlide(index),
  };

  const sliderRef = useRef(null);

  const handleButtonClick = (direction) => {
    if (sliderRef.current) {
      if (direction === "prev") {
        sliderRef.current.slickPrev();
      } else if (direction === "next") {
        sliderRef.current.slickNext();
      }
    }
  };
  const [value,setVlaue]=useState()

  return (
    <div>
      <div className="container vh-100 d-flex flex-column justify-content-center">
        <div className="row ">
          <div className="col-6 bg-dark text-white">
            <Slider {...settings} ref={sliderRef}>
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div>
            </Slider>
          </div>
          <div className="col-6">
            <button
              disabled={currentSlide === 0}
              className="btn btn-success px-3 py-2 mx-2"
              onClick={() => handleButtonClick("prev")}
            >
              Prev
            </button>
            <button
              disabled={currentSlide === settings.slideCount - 1}
              className="btn btn-success px-3 py-2 mx-2"
              onClick={() => handleButtonClick("next")}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomBtns;
