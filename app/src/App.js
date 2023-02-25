import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="font-avanir">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
