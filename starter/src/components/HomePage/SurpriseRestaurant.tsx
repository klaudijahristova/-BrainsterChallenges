import React, { useContext } from 'react';
import { CardsContext, RestaurantData } from '../../context/CardsContext';
import { useNavigate } from 'react-router-dom';

function SurpriseRestaurant() {
  const history = useNavigate();
  const context = useContext(CardsContext);

  if (!context) {
    return null; 
  }


  const handleSurpriseClick = () => {
    const { restaurants } = context as { restaurants: RestaurantData[] };

    const slugs = restaurants.map((restaurant) => restaurant.slug);

    const randomSlugIndex = Math.floor(Math.random() * slugs.length);
    const randomSlug = slugs[randomSlugIndex];

    history(`/${randomSlug}`); 
  };

  return (
    <div className='container px-0'>
      <h4 className="text-uppercase text-center fw-bolder mb-4">Don't know what to eat?</h4>
      <div className='d-grid'>
        <button className="custom-bg-color-03 text-white border-0 rounded-1 p-2" onClick={handleSurpriseClick}>
          Surprise me!
        </button>
      </div>
    </div>
  );
}

export default SurpriseRestaurant;
