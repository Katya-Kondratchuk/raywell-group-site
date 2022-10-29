import Home from "./Pages/Home";
import Raywell from "./Pages/Raywell";
import { Routes, Route } from "react-router-dom";
import EnviePage from "./pages/EnviePage";
import VeganPage from "./pages/VeganPage";
import Technics from "./Pages/Technics";
import Powder from "./Pages/Powder";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="raywell" element={<Raywell />}></Route>
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
