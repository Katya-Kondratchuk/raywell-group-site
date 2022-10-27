import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="raywell-group-site/" element={<Home />} />
      {/* <Route path="raywell" element={<Reywell />} /> */}
      {/* <Route path="envie" element={<Envie />} /> */}
      {/* <Route path="invidia" element={<Invidia />} /> */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default App;
