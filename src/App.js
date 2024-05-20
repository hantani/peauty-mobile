import "./reset.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Page/Main/Main";
import Peauty from "./Page/Peauty/Peauty";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/peauty" element={<Peauty />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
