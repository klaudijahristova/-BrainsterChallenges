import React, { useContext } from 'react';
import { CardsContext, RestaurantData } from '../../context/CardsContext';
import RestaurantCard from './RestaurantCard';

function PopularRestaurants() {
  const context = useContext(CardsContext);

  if (!context) {
    return null;
  }

  const { restaurants, calculateAverageRating } = context;


  if (!restaurants) {
    return null;
  }

  const getTop10Restaurants = (): RestaurantData[] => {
    const sortedRestaurants = restaurants.slice().sort((a, b) => {
      if (b.reviews !== a.reviews) {
        return b.reviews - a.reviews;
      } else {
        const avgRatingA = parseFloat(calculateAverageRating(a.reviewsList));
        const avgRatingB = parseFloat(calculateAverageRating(b.reviewsList));
        return avgRatingB - avgRatingA;
      }
    });
  
    return sortedRestaurants.slice(0, 10);
  };
  

  const top10Restaurants = getTop10Restaurants();

  return (
    <div className=''>
      <h4 className="text-uppercase text-center fw-bolder mb-4">
        Our most popular restaurants
      </h4>
      <div className="flex">
        {top10Restaurants.map((restaurant: RestaurantData) => (
         <RestaurantCard
         key={restaurant.id}
         image={restaurant.image}
         businessname={restaurant.businessname}
         restauranttype={restaurant.restauranttype}
         reviews={restaurant.reviews}
         averageRating={calculateAverageRating(restaurant.reviewsList)}
         slug={restaurant.slug}
         reviewsList={restaurant.reviewsList}
         isFavorite={restaurant.isFavorite ?? false}
         id={restaurant.id}
       />
           
          
        ))}
      </div>
    </div>
  );
}

export default PopularRestaurants;
