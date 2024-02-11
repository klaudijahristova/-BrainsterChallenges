import React, { useContext } from "react";
import { CardsContext } from "../../context/CardsContext";
import { Link } from "react-router-dom";

function Cuisines() {
  const card = useContext(CardsContext);

  if (!card || !Array.isArray(card.restaurants)) {
    return null; 
  }

  const restauranttype = Array.from(new Set(card.restaurants.map((el) => el.restauranttype)));

  return (
    <div className="d-flex flex-column justify-content-center container">
         <h4 className="text-uppercase text-center fw-bolder mb-0">Cuisines</h4>
        <div className=" mt-3 d-flex justify-content-center">
          <div className="row justify-content-center">
            <div className="col-12">  {restauranttype.map((type) => (
        <Link key={type} to={`/cuisine-${type}`}>
          <button className="border-0 px-3 py-1 me-1 custom-bg-color-02 text-white rounded-2 mb-2">{type}</button>
        </Link>
      ))}</div>
          </div>
      
        </div>
     
    </div>
  );
}

export default Cuisines;

