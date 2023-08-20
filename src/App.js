import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Courses from './components/NavComponents/Courses';
import Home from './components/NavComponents/Home';
import Nav from './components/Nav';
import Welcome from './components/Welcome';
import Dashboard from './components/NavComponents/Dashboard';
import Pages from './components/NavComponents/Pages';
import Elements from './components/NavComponents/Elements';
import Blog from './components/NavComponents/Blog';


function App() {
  return (
    <BrowserRouter>
      <main>
        <Nav />
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/home' element={<Home />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/pages' element={<Pages />} />
          <Route path='/elements' element={<Elements />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
    </main>
    </BrowserRouter>
 );
}

export default App;
