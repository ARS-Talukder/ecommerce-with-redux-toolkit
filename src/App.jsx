import { Route, Routes } from 'react-router-dom'
import './App.css';
import Header from './pages/Shared/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import TopRated from './pages/TopRated/TopRated';
import Carts from './pages/Cart/Carts';
import Dashboard from './pages/Dashboard/Dashboard';
import ProductList from './pages/Dashboard/ProductList.jsx';
import AddProduct from './pages/Dashboard/AddProduct';


function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/toprated" element={<TopRated />} />
        <Route path="/carts" element={<Carts />} />
        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
          <Route index element={<ProductList></ProductList>}></Route>
          <Route path='/dashboard/addproduct' element={<AddProduct></AddProduct>}></Route>
        </Route>
      </Routes>

    </>
  )
}

export default App
