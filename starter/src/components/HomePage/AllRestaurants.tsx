import React, { useContext } from "react";
import { CardsContext } from "../../context/CardsContext";
import RestaurantCard from "./RestaurantCard";

function AllRestaurants() {
  const card = useContext(CardsContext);

  return (
    <div>
      <h4 className="text-uppercase text-center fw-bolder mb-4">
        all restaurants
      </h4>
      <div className="flex">
        {card?.restaurants.map((el) => (
         <RestaurantCard
         key={el.slug}
         image={el.image}
         businessname={el.businessname}
         restauranttype={el.restauranttype}
         reviews={el.reviews}
         averageRating={card.calculateAverageRating(el.reviewsList)}
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

export default AllRestaurants;
