import { Route, Routes } from "react-router-dom";
import Currencies from "./pages/Currencies";

import Price from "./pages/Price";
import Nav from "./componenets/Navigation/Nav";


const App = () => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/currencies" element={<Currencies/>} />
        <Route path="/price/:symbol" element={<Price/>} />
      </Routes>
    </div>
  );
}

export default App;
