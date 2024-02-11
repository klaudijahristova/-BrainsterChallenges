import React from "react";

const Banner = () => {
  return (
    <div className="vh-100 w-100 d-flex flex-column justify-content-center bannerWrapper">
      <div className="banner">
        <p className="text-uppercase">Summer Vacation</p>
        <h1 className="mb-4">Nomad nation</h1>
        <a href="/" className="text-decoration-none text-uppercase">Read More</a>
      </div>
    </div>
  );
};

export default Banner;
