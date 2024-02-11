import React, { useContext } from "react";
import RestaurantCard from "../HomePage/RestaurantCard";
import { CardsContext, ContextData, RestaurantData } from "../../context/CardsContext";

function FavoritesPage() {
  const context = useContext(CardsContext);
  const { calculateAverageRating } = context as ContextData

  if (!context) {
    return null;
  }

  const { favouritesRestaurants } = context;

  return (
    <div className="container">
      <h4 className="text-uppercase text-center fw-bolder mb-4">
        Your Favorite Restaurants
      </h4>
      <div className="res">
        {favouritesRestaurants &&
          favouritesRestaurants.length > 0 &&
          favouritesRestaurants.map((card: RestaurantData) => (
            <div key={card.id}>
              <RestaurantCard
                image={card.image}
                businessname={card.businessname}
                restauranttype={card.restauranttype}
                reviews={card.reviews}
                averageRating={calculateAverageRating(card.reviewsList)}
                slug={card.slug}
                reviewsList={card.reviewsList}
                isFavorite={card.isFavorite ?? false}
                id={card.id}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default FavoritesPage;
