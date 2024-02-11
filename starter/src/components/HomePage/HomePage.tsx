import SurpriseRestaurant from "./SurpriseRestaurant";
import AllRestaurants from "./AllRestaurants";
import Cuisines from "./Cuisines";
import PopularRestaurants from "./PopularRestaurants";

function HomePage() {

  return (
    <div className="container">
      <SurpriseRestaurant/>
      <PopularRestaurants/>
      <Cuisines/>
      <AllRestaurants/>
    </div>
  );
}

export default HomePage;
