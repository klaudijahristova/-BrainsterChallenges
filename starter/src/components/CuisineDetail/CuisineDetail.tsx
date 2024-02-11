import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import {
  CardsContext,
  RestaurantData,
  ReviewData,
} from "../../context/CardsContext";
import RestaurantCard from "../HomePage/RestaurantCard";

function CuisineDetail() {
  const location = useLocation();
  const contextData = useContext(CardsContext);
 
  if (!contextData) {
    return <div>No data available</div>;
  }

  const {
    restaurants,
    calculateAverageRating,
  }: {
    restaurants: RestaurantData[];
    calculateAverageRating: (reviewsList: ReviewData[]) => string;
  } = contextData;

  const cuisineType = location.pathname.split("-")[1];

  const filteredCards = restaurants.filter(
    (el) => el.restauranttype.toLowerCase() === cuisineType.toLowerCase()
  );

  return (
    <div>
      <h4 className="text-uppercase text-center fw-bolder mb-4">
        {cuisineType} Restaurants
      </h4>
      <div className="flex container">
      {filteredCards.map((el) => (
        <RestaurantCard
        key={el.slug}
        image={el.image}
        businessname={el.businessname}
        restauranttype={el.restauranttype}
        reviews={el.reviews}
        averageRating={calculateAverageRating(el.reviewsList)}
        reviewsList={el.reviewsList}
        slug={el.slug}
        isFavorite={el.isFavorite ?? false}
        id={el.id}
      />
      ))}
      </div>
      
    </div>
  );
}

export default CuisineDetail;
