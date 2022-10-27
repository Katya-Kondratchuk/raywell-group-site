import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default App;
