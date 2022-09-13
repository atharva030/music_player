import React from "react";
import { MdFilterList, MdFavorite } from "react-icons/md";
import { IoAddCircleSharp } from "react-icons/io5";

import "../Styles/songitem.css";
const Musicitem = (props) => {
  let { title, imageURL } = props;
  console.log(imageURL);
  return (
    <>
      <div className="img-container">
      <img src={imageURL} className="card-img" />
      <div className="text-container">
        <div className="fav">
          <MdFavorite size={30} />
        </div>
        <div className="fav">
          <IoAddCircleSharp size={30} />
        </div>
      </div>
      <div className="text-container">
        <h3>{title}</h3>
      </div>
      </div>
    </>
  );
};

export default Musicitem;
