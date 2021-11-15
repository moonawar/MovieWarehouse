import classes from "./Movie.module.css";
import bdClasses from '../components/description/Backdrop.module.css';
import React, { useContext, useState } from "react";

import { MovieContext } from "../context/MovieData";
import { PopUpContext } from "../context/PopUp";
import { DescContext } from "../context/DescContext";

const Movie = (props) => {
  const [wishlist, setWishlist] = useContext(MovieContext).slice(2,4);
  const setPopUpText = useContext(PopUpContext)[3];
  const showPopup = useContext(PopUpContext)[4];
  const i = wishlist.filter((obj) => obj.id === props.id).length;
  const [count, setCount] = useState(i);

  const handleWishlist = () => {
    if (count === 1) {
      setCount(0);
      if (props.type === 'movie') {
        setPopUpText(`'${props.title}' is Removed from the Wishlist`)
        
      } else {
        setPopUpText(`'${props.name}' is Removed from the Wishlist`)
        
      }
      showPopup();
      setWishlist((prevWishlist) =>
        prevWishlist.filter((x) => {
          return x.id !== props.id;
        })
      );  
    } else {
      setWishlist((prevWishlist) => [
        ...prevWishlist,
        props.post
      ]);
      setCount(1);
      if (props.type === 'tv') {
        setPopUpText(`'${props.name}' is Added to the Wishlist`)
      } else {
        setPopUpText(`'${props.title}' is Added to the Wishlist`)
      }
      showPopup();
    }
  };

  const dynamicPoster = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original${props.posterUrl})`,
  };

  let buttonClass = classes.addButton

  if (count === 1) {
    buttonClass = classes.removeButton
  } 

  const setInsight = useContext(DescContext)[1];
  const setOpen = useContext(DescContext)[3];
  const handleDesc = (params) => {
    setInsight(props.post)
    setOpen(bdClasses.backdrop_show)
  }
  

  return (
    <div className={classes.movie} style={dynamicPoster}>
      <div className={classes.rating}>{props.rating}⭐</div>
      <div
        className={buttonClass}
        onClick={handleWishlist}
      />
      <div className={classes.title} onClick={handleDesc}>
        <p className={classes.titleText}>
          {props.title}
          {props.name}
        </p>
      </div>
    </div>
  );
};

export default Movie;
