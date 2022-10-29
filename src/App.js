import Home from "./pages/Home";
import Raywell from "./pages/Raywell";
import { Routes, Route } from "react-router-dom";
import EnviePage from "./pages/EnviePage";
import VeganPage from "./pages/VeganPage";
import Technics from "./pages/Technics";
import Powder from "./pages/Powder";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="raywell" element={<Raywell />} />
      <Route path="technics" element={<Technics />} />
      <Route path="powder" element={<Powder />} />
      <Route path="envie" element={<EnviePage />} />
      <Route path="vegan" element={<VeganPage />} />
      {/* <Route path="invidia" element={<Invidia />} /> */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default App;
