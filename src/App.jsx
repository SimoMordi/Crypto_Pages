import { Route, Routes } from "react-router-dom";
import Currencies from "./pages/Currencies";

import Price from "./pages/Price";
import Nav from "./components/Navbar";



const App = () => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/currencies" element={<Currencies/>} />
        <Route path="/price/:symbol" element={<Price/>} />
        <Route path="/crypto" element={<crypto />} />
      </Routes>
    </div>
  );
}

export default App;
