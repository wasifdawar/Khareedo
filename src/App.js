import Navbar from "./components/Navbar";
import Homescreen from "./screens/Homescreen";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" component={Homescreen} exact />
        </Routes>
      </BrowserRouter> */}
      <Homescreen />
    </div>
  );
}

export default App;
