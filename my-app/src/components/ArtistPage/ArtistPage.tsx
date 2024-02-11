import artists from "../../data/db";
import { useParams } from "react-router-dom";
import AlbumList from "../AlbumList/AlbumList";
import NotFound from "../NotFound/NotFound";

export interface ArtistPageProps {
    id: number;
    name: string;
    bio: string;
    albums: { albumId: string; title: string; year: number; cover: string; price: number }[];
}

const ArtistPage = () => {
    const { id } = useParams<{ id?: string }>();

    const artistId = id ? parseInt(id, 10) : undefined; 

    const artistInfos = artistId !== undefined ? artists.find((el: ArtistPageProps) => el.id === artistId) : undefined;

    return (
        <div className="artistWrapper">
            {artistInfos ? (
                <div className="d-flex flex-column  align-items-center py-4 px-3 text-center ">
                    <img src={require(`../../images/covers/${artistInfos.cover}.jpg`)} alt={artistInfos.name} width={120} height={120}/>
                    <h5 className="my-3">{artistInfos.name}</h5>
                    <p className="text-muted">{artistInfos.bio}</p>
                    <AlbumList array={artistInfos} id={id}/>
                </div>
            ) : (
               <NotFound/>
            )}
        </div>
    );
};

export default ArtistPage;
