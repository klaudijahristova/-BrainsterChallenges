import { useParams } from "react-router-dom";
import artists from "../../data/db";
import NotFound from "../NotFound/NotFound";


interface AlbumInfo {
  albumId: string;
  title: string;
  year: number;
  cover: string;
  price: number;
}

interface Artist {
  id: number;
  name: string;
  cover: string;
  bio: string;
  albums: AlbumInfo[];
}

const AlbumPage = () => {
  const { albumId } = useParams<{ albumId: string }>();

  const artist: Artist | undefined = artists.find((artist: Artist) =>
    artist.albums.some((album) => album.albumId === albumId)
  );

  const albumInfo: AlbumInfo | undefined = artist
    ? artist.albums.find((album) => album.albumId === albumId)
    : undefined;


  return (
    <div className="d-flex flex-column align-items-center py-4 artistWrapper text-center">
      {albumInfo ? (
        <div >
          <img src={require(`../../images/albums/${albumInfo?.cover}.jpg`)} alt={albumInfo.title} width={170} height={170}/>
          <div className="my-2"><strong>Title:</strong> <span className="text-muted">{albumInfo.title}</span></div>
          <div className="my-2"><strong>Year:</strong> <span className="text-muted">{albumInfo.year}</span></div>
          <div className="my-2"><strong>Price:</strong> <span className="text-muted">{albumInfo.price} $</span></div>
       
        </div>
      ) : (
        <NotFound/>
      )}
    </div>
  );
};

export default AlbumPage;
