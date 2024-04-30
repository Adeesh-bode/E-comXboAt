import {BrowserRouter, Routes, Route} from "react-router-dom";// each route a page

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Category from './components/Category/Category';
import SingleProduct from './components/SingleProduct/SingleProduct';
import Newsletter from './components/Footer/Newsletter/Newsletter';

import AppContext from './utils/context';

// import React from "react";
function App() {
    return(
     <BrowserRouter>
        <AppContext>

            {/* iise kya hoge iske jo bhi childern componentshai unme sab mai App context k states chal paege..smoothy...
            without passing any states as prop */}

            {/* AppContext k andar  {children} hai ye content...fir vaha se vo contextprovided value le leta hai  */}
            <Header />
            <Routes>
                <Route path="/" element={<Home />} ></Route>  
                {/* 
                ---path and element are 2 props of route
                ---id are passed 
                --- ./ refers to jaha bhi ho uske parent folder k ander jane k liye...
                --- .. for going to grandparent
                --- ../../ for going to greatgrandparent
                */}
                <Route path="/category/:id" element={<Category />} ></Route> 
                {/* ye id imp hai params hai usme */}
                <Route path="/product/:id" element={<SingleProduct />} ></Route>
            </Routes> 
            <Newsletter />
            <Footer />
        </AppContext>
    </BrowserRouter>   
    );
}

export default App;
