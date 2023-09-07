import { Route, Routes } from 'react-router-dom'
import './App.css';
import Header from './pages/Shared/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import TopRated from './pages/TopRated/TopRated';
import Carts from './pages/Cart/Carts';


function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/toprated" element={<TopRated />} />
        <Route path="/carts" element={<Carts />} />
      </Routes>

    </>
  )
}

export default App
