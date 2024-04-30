import "./SingleProduct.scss";
import React from "react";

import { useParams } from "react-router-dom";
import { FaLinkedinIn , FaFacebookF , FaTwitter , FaInstagram } from "react-icons/fa";
import { CgShoppingCart } from 'react-icons/cg';

import { useState, useContext } from "react";
import { Context } from "../../utils/context";

import  useFetch from "../../hooks/useFetch";

import RelatedProducts from "./RelatedProducts/RelatedProducts";
// import ProductImg from "../../assets/products/speaker-prod-2.webp";
const SingleProduct = () => {

    const {
        handleAddToCart
    } = useContext(Context);

    const [ quantity, setQuantity] = useState(1);

    const inc=()=>{
        setQuantity(quantity+1);    // ( (prevState)=>prevState+1)
    }
    const dec=()=>{
        setQuantity(quantity-1);    // ( (prevState)=>prevState-1)
        
        if(quantity<=1){
            setQuantity(1);
        }
    }

    const {id} = useParams();

    const {data} = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
    console.log(id); 
    console.log(data);

    // below commented I missed to do/...

    // if(!data){            // ye use karliya toh option chaining is jarurat nhi rehti
    //     return ;
    // }

    // 
    // const { product } = data?.data?.[0]?.attributes;  // ye use than long use of dot reduced (direct attribute mai sb)

    return <div className="singleproduct-content">
        <div className="layout">
            <div className="singleproduct-main">
                <div className="pdt-img">
                    <img src={process.env.REACT_APP_DEV_URL + data?.data?.[0]?.attributes?.img?.data?.attributes?.url} alt="Product-img"  />
                </div>
                <div className="pdt-details">
                    <div className="details-top">
                        <div className="name">
                            {data?.data?.[0]?.attributes?.title}
                        </div>
                        {/* <div className="spec">
                            {data[0].attributes.desc}
                        </div>  */}
                        <div className="price">
                            {/* {data[0].attributes.price} */}
                            ${data?.data?.[0]?.attributes?.price}
                        </div>
                        <div className="desc">
                            {/* {data[0].attributes.desc} */}
                            {data?.data?.[0]?.attributes?.desc}
                        </div>
                        <div className="btns">
                            <div className="quantity">
                                <button  onClick={dec}>-</button>
                                <div className="display-quantity">{ quantity }</div>
                                <button  onClick={inc}>+</button>
                            </div>
                            <button className="add-to-cart" 
                                onClick={()=>{
                                    console.log(data?.data?.[0]);
                                    handleAddToCart(data?.data?.[0], quantity);
                                    setQuantity(1);
                                    // ab vapas 1 pe daldena...

                                }
                                }
                            >
                                <CgShoppingCart />
                                {"  "}
                                <div>ADD To CART</div>
                            </button>
                        </div>
                    </div>
                    <hr />
                    <div className="details-bottom">
                        <div className="product-category">
                            <b>Category: </b> {data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes?.title}
                        </div>
                        <div className="product-share">
                            <b>Share: </b>
                            <div className="social-icons">
                            <FaFacebookF />
                            <FaTwitter />
                            <FaInstagram />
                            <FaLinkedinIn />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <RelatedProducts 
            categoryid={ data?.data?.[0]?.attributes?.categories?.data?.[0]?.id}
            productid={data?.data?.[0]?.id}
            />
        </div>
    </div>;
};

export default SingleProduct;
