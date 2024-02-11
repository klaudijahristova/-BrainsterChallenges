import React, { useState, useCallback, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "../HomePage/HomePage.css";
import { CardsContext, ReviewData } from "../../context/CardsContext";

export interface RestaurantCardProps {
  image: string;
  businessname: string;
  restauranttype: string;
  reviews: number;
  averageRating: string;
  slug: string;
  reviewsList: ReviewData[];
  isFavorite?: boolean; 
  id?: string;
}

const RestaurantCard = ({ image, businessname, restauranttype, reviews, averageRating, slug, reviewsList, isFavorite, id, }: RestaurantCardProps) => {
  const context = useContext(CardsContext);

  if (!context) {
    return null;
  }

  const { isFavouriteRestaurant} = context;

  const handleClick = (e: React.MouseEvent<HTMLElement> | React.MouseEvent<SVGSVGElement>) => {
    const target = e.target as HTMLElement;

    if (target.tagName === "svg" || target.tagName === "path") {
   
      if (id) {
        isFavouriteRestaurant && isFavouriteRestaurant(e as React.MouseEvent<HTMLElement>, id);
      }
    }
  };

  return (
    <Link to={`/${slug}`}  className="card-link res rounded-1 custom-bg-color-01 position-relative text-decoration-none text-black">
       {isFavorite ? (
        <FavoriteIcon
          className="position-absolute heart custom-color-01"
          onClick={(e: React.MouseEvent<SVGSVGElement>) => handleClick(e)} 
        />
      ) : (
        <FavoriteBorderIcon
          className="position-absolute heart custom-color-01"
          onClick={(e: React.MouseEvent<SVGSVGElement>) => handleClick(e)}
        />
      )}
        <div className="picture">
          <img src={image} alt="" className="rounded-3 img-fluid" />
        </div>
        <div className="m-2">
          <h6 className="fw-bold mb-0 fw-bolder">{businessname}</h6>
          <p className="custom-color-01 fw-bold">{restauranttype}</p>
          {reviews !== undefined && reviews !== 0 && (
            <>
              <p className="m-0">rating: {averageRating}</p>
              <small>
                Based on <span>{reviews}</span> reviews
              </small>
            </>
          )}
        </div>
    </Link>
  );
};

export default RestaurantCard;
