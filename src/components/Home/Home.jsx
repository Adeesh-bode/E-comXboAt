import "./Home.scss";

import React, {  useEffect } from 'react';

import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";

import { fetchDataFromApi } from "../../utils/api";

import { useContext } from "react";

import { Context }from "../../utils/context";

const Home = () => {
    const { categories, setCategories, products, setProducts } = useContext(Context);
    
    useEffect(()=>{
        getCategories();
        getProducts();
    }, [])

    const getCategories = ()=>{
        fetchDataFromApi("/api/categories?populate=*").then((res)=>{ // then is used when async functn is ready
            console.log(res);
            setCategories(res); // yaha {} coz ultiples lines nhi toh for single line ()
        });
    }

    const getProducts =()=>{
        fetchDataFromApi("/api/products?populate=*").then((res)=>{
            console.log(res);
            setProducts(res);
        })
    }

    return <div className="home-content">
            <Banner />
            <div className="home-main">
                {/* <div className="layout"> */}
                <Category categories={categories} />
                <Products products={products} />
                {/* </div> */}
            </div>
    </div>;
};

export default Home;
