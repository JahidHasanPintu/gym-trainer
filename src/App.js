
import './App.css';

import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import NotFound from './components/NotFound/NotFound';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Greetings from './components/Greetings/Greetings';
// import app from './firebase.init';





function App() {
  
  return (
    <div >
      
      
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/service/:serviceID" element={
          <RequireAuth> <Checkout></Checkout> </RequireAuth>
        }></Route>
        <Route path="/about" element={<About></About> }></Route>
        <Route path="/blogs" element={<Blogs></Blogs> }></Route>
        <Route path="/checkout" element={
          <RequireAuth> <Checkout></Checkout> </RequireAuth>
        }></Route>
        <Route path="/login" element={<Login></Login> }></Route>
        <Route path="/register" element={<Register></Register> }></Route>
        <Route path="/greetings" element={<Greetings></Greetings> }></Route>
        <Route path="*" element={ <NotFound></NotFound>}></Route>
        
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
