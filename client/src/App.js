import './App.css';
import { Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  return (
    <div>
      <Routes>

        <Route exatc path="/" element={<LandingPage/>}/>

      </Routes>
    </div>
  );
}

export default App;
