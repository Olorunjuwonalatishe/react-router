import './App.css';
import Navbar from './Components/Navbar';
import Homepage from './Components/Homepage';
import About from './Components/About';
import { Route, Routes } from 'react-router-dom';
import Blog from './Components/Blog';
import Services from './Components/Services';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path='/Homepage' element={<Homepage/>}/> 
      <Route path='/About' element={<About/>}/> 
      <Route path='/Blog' element={<Blog/>}/>
      <Route path='/Services' element={<Services/>}/>
      </Routes>
    </div>
  );
}

export default App;
