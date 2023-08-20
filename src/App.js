import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Courses from './components/Courses';
import Home from './components/Home';
import Nav from './components/Nav';
import Welcome from './components/Welcome';
import Dashboard from './components/Dashboard';
import Pages from './components/Pages';
import Elements from './components/Elements';
import Blog from './components/Blog';


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
