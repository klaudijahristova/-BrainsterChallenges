import ArtistItem from "../ArtistItem/ArtistItem"
import artists from "../../data/db";


export interface CoverProps{
    id:number;
    src:string;
    name:string;
}

const ArtistList = () => {
   const filteredCover = artists.map((el):CoverProps => {
      return {
        id:el.id,
        src:require(`../../images/covers/${el.cover}.jpg`),
        name:el.name
      }
   });

   return (
      <div className="artistWrapper">
         <h3 className="text-center py-3">Browse the artists</h3>
         <div>
          {filteredCover.map((el, index)=>(
            <ArtistItem src={el.src} id={el.id} key={index} name={el.name}/>
          ))}
         </div>
      </div>
   );
}

export default ArtistList;
