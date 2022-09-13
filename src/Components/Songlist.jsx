import React from "react";
import { useEffect, useState } from "react";
import "../Styles/songlist.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import header from "../Images/Color.png";
import { MdFilterList, MdFavorite } from "react-icons/md";
import { IoAddCircleSharp, IoLogoFacebook } from "react-icons/io5";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Songlist = ({ handlePlaylist,handleFavorites }) => {
  const [isColor, setIsColor] = useState(false);

  const handleMouseOver = () => {
    
  };

  const handleMouseOut = () => {
    setIsColor(false);
  };
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

  const [released, setReleased] = useState([]);
  const getmusic = async () => {
    const fetchereleased = await fetch(
      "https://shazam.p.rapidapi.com/charts/track?locale=en-US&pageSize=20&startFrom=0",

      {
        method: "GET",
        headers: {
          'X-RapidAPI-Key': '9c7610a1c4msh7ab1478a17df094p10d614jsn36906aa1a141',
          'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        },
      }
    );

    const json = await fetchereleased.json();

    setReleased(json.tracks);
  };

  const [featured, setFeatured] = useState([]);
  const getfeatured = async () => {
    const fetchefeatured = await fetch(
      "https://shazam.p.rapidapi.com/songs/list-recommendations?key=484129036&locale=en-US'",

      {
        method: "GET",
        headers: {
          'X-RapidAPI-Key': '9c7610a1c4msh7ab1478a17df094p10d614jsn36906aa1a141',
    'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        },
      }
    );

    const json = await fetchefeatured.json();

    setFeatured(json.tracks);
  };

  const [searched, setSearched] = useState([]);
  const getsearch = async () => {
    const fetchesearched = await fetch(
      "https://shazam.p.rapidapi.com/search?term=kiss%20the%20rain&locale=en-US&offset=0&limit=5",

      {
        method: "GET",
        headers: {
            'X-RapidAPI-Key': '9c7610a1c4msh7ab1478a17df094p10d614jsn36906aa1a141',
    'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        },
      }
    );

    const json = await fetchesearched.json();

    setSearched(json.tracks);
  };

  useEffect(() => {
    getmusic();
    getfeatured();
    getsearch();
  }, []);

  const handleClickonplayreleased = (i) => {
    let img = released[i].images.background;
    let tit = released[i].title;
    setIsColor(true);
    handlePlaylist(tit, img);
  };
  const handleClickonfavreleased = (i) => {
    let favimg = released[i].images.background;
    let favtit = released[i].title;
    handleFavorites(favtit, favimg);
  };
  const handleClickonplayfeatured = (i) => {
    let img = featured[i].images.background;
    let tit = featured[i].title;
    handlePlaylist(tit, img);
  };
  const handleClickonfavfeatured = (i) => {
    let favimg = featured[i].images.background;
    let favtit = featured[i].title;
    handleFavorites(favtit, favimg);
  };

  return (
    <>
      <div className="main-container">
        
        <div className="head-image">
          <img src={header} />
        </div>
  
        <div className="flex-box">
          <h2 className=" f-hr-lines">REALEASED THIS WEEK</h2>
          <div
            className="next-previous"
            style={{ position: "relative", top: "-14px" }}
          >
            <IoIosArrowBack color="black" />
            <IoIosArrowForward color="black" />
          </div>
          <Slider {...settings}>
            {released.map((released, i,iscolor) => {
              return (
                <div className="img-container" key={i}>
                  <img src={released.images.background} className="card-img" />
                  <div className="text-container">
                    <div className="fav" >
                    
                      <MdFavorite size={30} onClick={() => handleClickonfavreleased(i)}
                        title={i} />
                    </div>
                    <div className="fav">
                      <IoAddCircleSharp
                        size={30}
                        onClick={() => handleClickonplayreleased(i)}
                        title={i}
                      />
                    </div>
                  </div>
                  <div className="text-container">
                    <h3>{released.title}</h3>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>

      <div className="main-container" style={{ paddingTop: "49px" }}>
        <div className="flex-box">
          <h2 className="s-hr-lines">FEATURED PLAYLIST</h2>
          <div
            className="next-previous"
            style={{ position: "relative", top: "-14px" }}
          >
            <IoIosArrowBack color="black" />
            <IoIosArrowForward color="black" />
          </div>
        </div>

        <Slider {...settings}>
          {featured.map((featured, i) => {
            return (
              <div className="img-container" key={i}>
                <img src={featured.images.background} className="card-img" />
                <div className="text-container">
                  <div className="fav">
                    <MdFavorite size={30} onClick={() => handleClickonfavfeatured(i)}
                        title={i} />
                  </div>
                  <div className="fav">
                    <IoAddCircleSharp size={30} onClick={() => handleClickonplayfeatured(i)}
                        title={i}/>
                  </div>
                </div>
                <div className="text-container">
                  <h3>{featured.title}</h3>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default Songlist;
