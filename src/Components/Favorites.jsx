import React from "react";
import "../Styles/songlist.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import header from "../Images/Color.png";
import {  MdFavorite } from "react-icons/md";
import { IoAddCircleSharp } from "react-icons/io5";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Favorites = ({favtitarray,favimgarray}) => {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  console.log(favimgarray.length)


  return (
    <>
      <div className="main-container">
      <div className="head-image">
      <img src={header} />
    </div>

  
          {favimgarray.length===0 || favtitarray.length===0? <div style={{ fontSize: "30px",textAlign: 'center',marginTop: "14rem"}}>No Favorites to show</div>: <div className="flex-box">
            <h2 className=" f-hr-lines">YOUR FAVORITES</h2>
            <div
              className="next-previous"
              style={{ position: "relative", top: "-14px" }}
            >
              <IoIosArrowBack color="black" />
              <IoIosArrowForward color="black" />
            </div>
          <Slider {...settings}>

             { favimgarray.map ((element, i) => {
              return ( 
                <>
          <div className="img-container">

                <img src={favimgarray[i]} className="card-img" />
                <div className="text-container">
                  <div className="fav">
                    <MdFavorite size={30}/>
                  </div>
                  <div className="fav">
                    <IoAddCircleSharp size={30} />
                  </div>
                </div>
                <div className="text-container">
                  <h3>{favtitarray[i]}</h3>
                </div>
          </div>

                </>
                );
             })} 


          </Slider>
        </div>}
      </div>
    </>
  
  );
};

export default Favorites;
