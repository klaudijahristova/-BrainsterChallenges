import React, { createContext, useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export interface ReviewData {
  id: number;
  author: string;
  comment: string;
  stars: number;
}

export interface RestaurantData {
  reviews: number;
  parkinglot?: boolean;
  phone?: string;
  image: string;
  restauranttype: string;
  businessname: string;
  slug: string;
  address:string;
  email?: string;
  id: string;
  reviewsList: ReviewData[];
  isFavorite?: boolean;
  averageRating: string;
}

export const calculateAverageRating = (reviewsList: ReviewData[]): string => {
  if (reviewsList && reviewsList.length > 0) {
    const totalStars = reviewsList.reduce(
      (accumulator: number, review: ReviewData) => accumulator + review.stars,
      0
    );
    return (totalStars / reviewsList.length).toFixed(1);
  }
  return "0";
};


export interface ContextData {
  restaurants: RestaurantData[];
  calculateAverageRating: (reviewsList: ReviewData[]) => string;
  getRestaurantBySlug: (slug: string) => RestaurantData | undefined;
  updateRestaurant: (updatedRestaurant: RestaurantData) => void;
  isFavouriteRestaurant: (e: React.MouseEvent<HTMLElement, MouseEvent>, id: string) => void;
  favouritesRestaurants?: RestaurantData[];
}


export const CardsContext = createContext<ContextData | null>(null);

export const CardsProvider = ({ children }: Props) => {
  const [restaurants, setRestaurants] = useState<RestaurantData[]>([]);
  const [favouritesRestaurants, setFavouritesRestaurants] = useState<RestaurantData[]>([]);

 
  const calculateAverageRating = (reviewsList: ReviewData[]): string => {
    if (reviewsList && reviewsList.length > 0) {
      const totalStars = reviewsList.reduce(
        (accumulator: number, review: ReviewData) => accumulator + review.stars,
        0
      );
      return (totalStars / reviewsList.length).toFixed(1);
    }
    return "0";
  };

  const updateRestaurant = (updatedRestaurant: RestaurantData) => {
    const updatedRestaurants = restaurants.map((restaurant) => {
      if (restaurant.id === updatedRestaurant.id) {
        const updatedReviewsList = updatedRestaurant.reviewsList.map(
          (review, index) => ({ ...review, id: index + 1 })
        );
  
        const updatedRating = calculateAverageRating(updatedReviewsList);
  
        return {
          ...updatedRestaurant,
          reviews: updatedReviewsList.length,
          reviewsList: updatedReviewsList,
          averageRating: updatedRating,
        };
      }
      return restaurant;
    });
  
    setRestaurants(updatedRestaurants);
    setFavouritesRestaurants(updatedRestaurants.filter((el) => el.isFavorite));
  };

  useEffect(() => {
    const storedData = localStorage.getItem('storedData');
    if(storedData){
      const data: RestaurantData[]=JSON.parse(storedData);
      setRestaurants(data);
    }
    else{
      fetch(`http://localhost:5001/restaurants`)
      .then((res) => res.json())
      .then((data: RestaurantData[]) => {
        setRestaurants(data);
      })
      .catch((error) => console.error("Error:", error));
    }
    
  }, []);

  const isFavouriteRestaurant = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();

    setRestaurants([
      ...restaurants.map((el) => {
        return el.id === id
          ? { ...el, isFavorite: !el.isFavorite }
          : el;
      }),
    ]);
  };

  useEffect(() => {
    setFavouritesRestaurants(restaurants.filter((el) => el.isFavorite));
  }, [restaurants]);

  useEffect(() => {
    if (favouritesRestaurants.length !== 0) {
      localStorage.setItem('storedData', JSON.stringify(restaurants));
    } else {
      localStorage.removeItem('storedData');
    }
  }, [restaurants, favouritesRestaurants.length]);
  

  const getRestaurantBySlug = (slug: string): RestaurantData | undefined => {
    return restaurants.find((restaurant) => restaurant.slug === slug);
  };


  
  return (
    <CardsContext.Provider
      value={{
        restaurants,
        favouritesRestaurants,
        isFavouriteRestaurant,
        calculateAverageRating,
        getRestaurantBySlug,
        updateRestaurant
      }}
    >
      {children}
    </CardsContext.Provider>
  );
};
