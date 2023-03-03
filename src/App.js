import './App.css';
// import Products from './Components/Products';
import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import {Routes,Route,Outlet} from 'react-router-dom';
import { Suspense } from 'react';
// import { NavLink } from 'react-bootstrap';
import NotFound from './Components/NotFound';
import NavigationBar from './Components/Navbar';
import Home from './Components/Home';

function App() {
  const Products = React.lazy(()=> import('./Components/Products'));
  const ProductDetail = React.lazy(()=> import('./Components/ProductDetail'));
  return (
  <>
 <NavigationBar/>
 <Outlet />
    <Suspense fallback={ 
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>}>
    <Routes>
      <Route path="/products" element={<Products/>}/>
      <Route path="/products/:name" element={<ProductDetail/>}/>
      <Route path="/"  element={<Home/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </Suspense>
    </>
  );
}

export default App;
