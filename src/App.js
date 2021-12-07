import Navbar from "./components/Navbar";
import Homescreen from "./screens/Homescreen";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Productescreen from "./screens/Productescreen";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homescreen />} exact />
          <Route path="/product/:id" element={<Productescreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
