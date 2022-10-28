import Home from "./pages/Home";
import Reywell from "./pages/Raywell";
import { Routes, Route } from "react-router-dom";
// import Technics from "./pages/Technics";
import EnviePage from "./pages/EnviePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="raywell" element={<Reywell />}></Route>
      {/* <Route path="technics" element={<Technics />} /> */}
      <Route path="envie" element={<EnviePage />} />
      {/* <Route path="invidia" element={<Invidia />} /> */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default App;
