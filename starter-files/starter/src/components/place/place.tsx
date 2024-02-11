import React from "react";

type PropsPlace = {
    id: number;
    img: string;
    place: string;
    desc: string;
}

const Place = (props: PropsPlace) => {
    return (
        <div id={props.id.toString()} className="position-relative col-sm-12 col-md-6 col-lg-4 p-0 ">
            <img src={props.img} alt="nature" className="w-100 filterEfect"/>
            <div className="position-absolute top-50 start-50 translate-middle decription text-center w-100">
                <h2>{props.place}</h2>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}

export default Place;