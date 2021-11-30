import Navbar from "./components/Navbar";
import Homescreen from './screens/Homescreen';
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Homescreen/>
    </div>
  );
}

export default App;
