import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
//import Create from './components/Create/Create';

function App() {

const location = useLocation();

  return (
    <div>

      {location.pathname !== '/' && <Navbar/>}

      <Routes>

        <Route exatc path="/" element={<LandingPage/>}/>
        <Route exact path="/home" element={<Home/>}/> 
        <Route exact path="/detail" element={<Detail/>}/>
        {/* <Route exact path='/create' element={<Create/>} /> */}

      </Routes>
    </div>
  );
}

export default App;
