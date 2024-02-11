import React from "react";

type Props = {
  title: string;
  image: string;
};
const Block = (props: Props) => {
  return (
    <div className="block d-flex my-5 justify-content-between">
      <div className="text d-flex flex-column justify-content-center">
        <span className="text-uppercase">About</span>
        <h2>{props.title}</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
          ratione nostrum ea obcaecati suscipit quia magnam! Sed, eveniet vel
          reprehenderit tenetur minima ad aliquid velit quibusdam earum
          aspernatur doloremque ipsum!
        </p>
        <p className="mb-0">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
          ratione nostrum ea obcaecati suscipit quia magnam!
        </p>
      </div>
      <div className="picture d-flex align-iten-center justify-content-center">
        <img src={props.image} alt="nature" />
      </div>
    </div>
  );
};
export default Block;
