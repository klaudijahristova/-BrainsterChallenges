import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import ArtistList from "./components/ArtistList/ArtistList";
import ArtistPage from "./components/ArtistPage/ArtistPage";
import AlbumPage from "./components/AlbumPage/AlbumPage";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <nav>
          <Navbar />
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<ArtistList />} />
          <Route path="/artist/:id/:albumId" element={<AlbumPage />} />
          <Route path="/artist/:id" element={<ArtistPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;


