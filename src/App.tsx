import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Homesection from "./pages/Home";
import NotFound from "./NotFound";

const App = () => {
  return (
    <HashRouter>      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homesection />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;