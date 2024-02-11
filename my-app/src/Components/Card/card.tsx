export interface PropsCard {
  name: string;
  price: number;
  image: string;
}

const Card = (props:PropsCard ) => {

  return (
    <>
      <div className="col-4 mb-4">
        <div className="card h-100">
          <img
            src={`./images/${props.image}.png`}
            alt={props.name}
            className="card-img-top img-fluid"
          />

          <div className="card-body">
            <h6 className="card-title">{props.name}</h6>
            <p className="card-text">{props.price + " " + "$"}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
