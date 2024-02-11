import React, { useEffect, useState } from "react";
import Place from "../place/place";

type PropsContainer = {
    id: number;
    img: string;
    place: string;
    desc: string;
}

const PlaceContainer = () => {
    const [cards, setCards] = useState<PropsContainer[]>([]);

    useEffect(() => {
        fetch('http://localhost:5001/places')
            .then((res) => res.json())
            .then((data) => {
                setCards(data); 
            })
    }, []);

    return (
        <div className="container-fluid">
            <div className="row ">
            {cards.map((el) => (
                <Place key={el.id} id={el.id} img={el.img} place={el.place} desc={el.desc} />
            ))}
            </div>
           
        </div>
    )
}

export default PlaceContainer;