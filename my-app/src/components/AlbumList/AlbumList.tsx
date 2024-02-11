import { Link } from "react-router-dom";
import { ArtistPageProps } from "../ArtistPage/ArtistPage";

const AlbumList = ({ array, id }: { array: ArtistPageProps; id?: string }) => {
  return (
    <div className="albumList w-100 d-flex flex-wrap justify-content-start">
      {array.albums.map((el, index) => {
        return (
          <Link to={`/artist/${id}/${el.albumId}`} key={index} className="w-50">
            <img
              src={require(`../../images/albums/${el.cover}.jpg`)}
              alt={el.title}
              className="w-100"
            />
          </Link>
        );
      })}
    </div>
  );
};

export default AlbumList;

