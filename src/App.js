import Home from "./pages/Home";
import Raywell from "./pages/Raywell";
import { Routes, Route } from "react-router-dom";

import Technics from "./Pages/Technics";
import EnviePage from "./Pages/EnviePage";
import Powder from "./Pages/Powder";
import Oxygen from "./Pages/Oxygen";
import VeganPage from "./pages/VeganPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="raywell" element={<Raywell />} />
      <Route path="technics" element={<Technics />} />
      <Route path="powder" element={<Powder />} />
      <Route path="oxygen" element={<Oxygen />} />
      <Route path="envie" element={<EnviePage />} />
      <Route path="vegan" element={<VeganPage />} />
      {/* <Route path="invidia" element={<Invidia />} /> */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default App;
