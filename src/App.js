import "./App.css";
import Navbar from "./Components/Navbar";
import Songlist from "./Components/Songlist";
import Playlist from "./Components/Playlist";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Favorites from "./Components/Favorites";

function App() {
  //playlist stuff
  const [titarray, settitArray] = useState([]);
  const [imgarray, setImgArray] = useState([]);

  const handlePlaylist = (tit, img) => {
    const newtitarray = titarray.slice();
    newtitarray.push(tit);
    settitArray(newtitarray);

    const newimgarray = imgarray.slice();
    newimgarray.push(img);
    setImgArray(newimgarray);
  };

  // favorites stuff
  const [favtitarray, setFavtitArray] = useState([]);
  const [favimgarray, setFavImgArray] = useState([]);

  const handleFavorites = (favtit, favimg) => {
    const newfavtitarray = favtitarray.slice();
    newfavtitarray.push(favtit);
    setFavtitArray(newfavtitarray);

    const newfavimgarray = favimgarray.slice();
    newfavimgarray.push(favimg);
    setFavImgArray(newfavimgarray);
  };
  console.log(favtitarray,favimgarray);
  return (
    <>
      <Router>
        <div className="outer-container">
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={<Songlist handlePlaylist={handlePlaylist} handleFavorites={handleFavorites}/>}
            />
            <Route
              exact
              path="/playlist"
              element={<Playlist titarray={titarray} imgarray={imgarray} />}
            />
            <Route
              exact
              path="/favorites"
              element={<Favorites favtitarray={favtitarray} favimgarray={favimgarray} />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
