import "./reset.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Page/Main/Main";
import Peauty from "./Page/Peauty/Peauty";
import Stylist from "./Page/Stylist/Stylist";
import StyleShop from "./Page/StyleShop/StyleShop";
import StarPet from "./Page/StarPet/StarPet";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/peauty" element={<Peauty />} />
        <Route path="/stylist" element={<Stylist />} />
        <Route path="/style-shop" element={<StyleShop />} />
        <Route path="/star-pet" element={<StarPet />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
