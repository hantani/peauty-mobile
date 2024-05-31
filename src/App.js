import "./reset.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Page/Main/Main";
import Peauty from "./Page/Peauty/Peauty";
import Stylist from "./Page/Stylist/Stylist";
import StyleShop from "./Page/StyleShop/StyleShop";
import StarPet from "./Page/StarPet/StarPet";
import InfoUse from "./Page/InfoUse/InfoUse";
import SingUp from "./Page/SignUp/SignUp";
import PetName from "./Page/PetName/PetName";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/peauty" element={<Peauty />} />
        <Route path="/stylist" element={<Stylist />} />
        <Route path="/style-shop" element={<StyleShop />} />
        <Route path="/star-pet" element={<StarPet />} />
        <Route path="/info-use" element={<InfoUse />} />
        <Route path="/sign-up" element={<SingUp />} />
        <Route path="/my/pet-name" element={<PetName />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
