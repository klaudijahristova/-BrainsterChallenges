import { Link } from "react-router-dom";
import { CoverProps } from "../ArtistList/ArtistList";
const ArtistItem = ({src, id, name}:CoverProps) => {

    return (
        <Link to={`/artist/${id}`}><div className="m-2 position-relative" id={id.toString()}>
        <img src={src} alt="Artist" className="w-100 " />
        <span className="position-absolute start-0 text-white bottom-0 px-2 py-1 artistName">{name}</span>
      </div></Link>
      
    );
  };

export default ArtistItem;
