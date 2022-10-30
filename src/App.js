import Home from "./pages/Home";
import Raywell from "./pages/Raywell";
import { Routes, Route } from "react-router-dom";

import Technics from "./pages/Technics";
import EnviePage from "./pages/EnviePage";
import Powder from "./pages/Powder";
import Oxygen from "./pages/Oxygen";
import VeganPage from "./pages/VeganPage";
import NotFoundPage from "./pages/NotFoundPage";
import DecoPage from "./pages/DecoPage";
import RespectPage from "./pages/RespectPage";
import HyaluronicPage from "./pages/HyaluronicPage";
import ColorPlexPage from "./pages/ColorPlexPage";

const App = () => {
  return (
    <Routes>
      <Route path="/raywell-group-site" element={<Home />} />
      <Route path="raywell" element={<Raywell />} />
      <Route path="technics" element={<Technics />} />
      <Route path="powder" element={<Powder />} />
      <Route path="oxygen" element={<Oxygen />} />
      <Route path="colorplex" element={<ColorPlexPage />} />
      <Route path="envie" element={<EnviePage />} />
      <Route path="deco" element={<DecoPage />} />
      <Route path="respect" element={<RespectPage />} />
      <Route path="hyaluronic" element={<HyaluronicPage />} />
      <Route path="vegan" element={<VeganPage />} />
      {/* <Route path="invidia" element={<Invidia />} /> */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
