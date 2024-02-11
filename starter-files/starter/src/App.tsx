import Banner from "./components/banner/banner";
import Block from "./components/details-block/details-block";
import Footer from "./components/footer/footer";
import PlaceContainer from "./components/places-container/places-container";
import "./css/main.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <Banner />
      <Block title="Stories of Adventure" image="https://fastly.picsum.photos/id/278/5000/3333.jpg?hmac=9jqaiiw-7kbgDwalwTN1ZAvEVnTPZ-9bmvf5GunCaPY"/>
      <PlaceContainer/>
      <Block title="Popular Adventures" image="https://fastly.picsum.photos/id/521/5000/3333.jpg?hmac=2HRSOPXMsbUnjFywDez-Cis1CLMAduxkz3tlNVaBLL0"/>
      <Footer />
    </div>
  );
};

export default App;
