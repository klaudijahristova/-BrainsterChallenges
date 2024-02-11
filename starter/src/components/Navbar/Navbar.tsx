import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="d-flex justify-content-between mt-5 container">
      <Link to={"/"} className="text-decoration-none text-black"><p className="fw-bold">RESTAURANT</p></Link>
      <span>
        <Link to={"/favorites"}>
          <FavoriteIcon className="custom-color-01" />
        </Link>
      </span>
    </div>
  );
}

export default Navbar;
