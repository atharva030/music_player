import React from "react";
import { useEffect, useState } from "react";
import "../Styles/songlist.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Musicitem from "./Musicitem";
import Featured from "./Featured";
import Slider from "react-slick";
import header from "../Images/Color.png";
import { MdFilterList, MdFavorite } from "react-icons/md";
import { IoAddCircleSharp, IoLogoFacebook } from "react-icons/io5";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Songlist from "./Songlist";


const Playlist = ({titarray,imgarray}) => {

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

  console.log(imgarray.length)


  return (
    <>
      <div className="main-container">
      <div className="head-image">
      <img src={header} />
    </div>

  
          {imgarray.length===0 || titarray.length===0? <div style={{ fontSize: "30px",textAlign: 'center',marginTop: "14rem"}}>Your Playlist is Empty</div>: <div className="flex-box">
            <h2 className=" f-hr-lines">NEWLY ADDED PLAYLIST</h2>
            <div
              className="next-previous"
              style={{ position: "relative", top: "-14px" }}
            >
              <IoIosArrowBack color="black" />
              <IoIosArrowForward color="black" />
            </div>
          <Slider {...settings}>

             { imgarray.map ((element, i) => {
              return ( 
                <>
          <div className="img-container">

                <img src={imgarray[i]} className="card-img" />
                <div className="text-container">
                  <div className="fav">
                    <MdFavorite size={30}/>
                  </div>
                  <div className="fav">
                    <IoAddCircleSharp size={30} />
                  </div>
                </div>
                <div className="text-container">
                  <h3>{titarray[i]}</h3>
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

export default Playlist;
