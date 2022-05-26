import React from 'react';
import Sidebar from './cpmponent/sidebar/Sidebar';
import Topbar from './cpmponent/topbar/Topbar';
import './app.css'
import Home from './page/home/Home';
import { Route, Routes } from 'react-router-dom';
import UserList from './page/userList/UserList';
import User from './page/user/User';
import NewUser from './page/newUser/NewUser';
import ProductList from './page/productList/ProductList';
import Product from './page/product/Product';
import NewProduct from './page/newProduct/NewProduct';

const App = () => {
  return (
    <div>
      <Topbar></Topbar>
      
     
      <div className="container">
      <Sidebar></Sidebar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/users' element={<UserList></UserList>}></Route>
          <Route path="/user/:userId" element={<User></User>}></Route>
          <Route path="/newUser" element={<NewUser></NewUser>}></Route>
          <Route path="/products" element={<ProductList></ProductList>}></Route>
          <Route path="/product/:productId" element={<Product />}></Route>
          <Route path="/newproduct" element={ <NewProduct />}>
           
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;