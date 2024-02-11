import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import FavoritesPage from "./components/Favorites/FavoritesPage";
import { CardsProvider } from "./context/CardsContext"; 
import RestaurantDetailPage from "./components/RestaurantDetailPage/RestaurantDetailPage";
import CuisineDetail from "./components/CuisineDetail/CuisineDetail";

const App = () => {
  return (
    <div className="App">
      <CardsProvider> 
        <nav>
          <Navbar />
        </nav>
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/:slug" element={<RestaurantDetailPage/>}/>
          <Route path="/cuisine-:type" element={<CuisineDetail/>}/>
          <Route path="*" element={<div>Not Found</div>}/>
        </Routes>
        <footer>
          <Footer />
        </footer>
      </CardsProvider>
    </div>
  );
};

export default App;
