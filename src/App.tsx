import { Route, Routes } from "react-router-dom";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import Watch from "./pages/Watch";

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/watch/:animeID" element={<Watch />} />
      <Route path="/*" element={<Error404 />} />
      <Route path="/notFound" element={<Error404 />} />
    </Routes>
  );
};

export default App;
