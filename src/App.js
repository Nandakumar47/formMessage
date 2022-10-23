import "./App.css";
import Home from "./components/Home";
import Welcome from "./components/Welcome";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Documentation from "./components/Documentation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />          
          <Route path="/documentation" element={<Documentation/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
