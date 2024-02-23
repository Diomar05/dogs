import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";


function App() {

    const location = useLocation();

  return (
    <div>
      {location.pathname !== "/" && <Header />}

      <Routes>
        <Route exatc path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<Home />} />
  
      </Routes>
    </div>
  );
}

export default App;
