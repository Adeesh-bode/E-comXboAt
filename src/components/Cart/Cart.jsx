import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";

import CartItem from "./CartItem/CartItem";

import { useContext } from "react";
import { Context } from "../../utils/context";

import { loadStripe } from "@stripe/stripe-js";

import {makePaymentRequest } from "../../utils/api"

import "./Cart.scss";

const Cart = () => {
    const { setShowCart, cartItems, cartSubTotal} = useContext(Context);

    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE);
    const handlePayment = async ()=>{
        try {
            const stripe = await stripePromise;
            const res = await makePaymentRequest.post("/api/orders",{products:cartItems})
            await stripe.redirectToCheckout({ // routes to stripes pre-built ui page in stripe library 
            sessionId: res.data.stripeSession.id
        })

        } catch (error) {
            console.log(error);
        }
    }
    return <div className="cart">
        <div className="opac-layer" onClick={()=>setShowCart(false)}></div>
        <div className="cart-main">
            <div className="cart-header">
                <div className="title">Shopping Cart</div>
                <div className="close">
                    <MdClose onClick={()=>setShowCart(false)} />
                    Close
                </div>
            </div>
            
            <div className="cart-content">
                                 
                { !cartItems.length>0 &&  // ye noob way 
                    <div className="empty-cart">
                        <BsCartX  />
                        <div className="text">No Products in the Cart</div>
                        <button onClick={()=>setShowCart(false)}  >Return To Shop</button>
                    </div>
                }
                {
                    !!cartItems?.length && // mentos zindagi
                    <div className="nonempty-cart">
                        <div>
                            <CartItem />
                        </div>
                        <div className="cta">
                            <div className="subtotal">
                                <span><b>Subtotal:</b></span>
                                <span style={{color:"purple"}}>${cartSubTotal}</span>
                            </div>
                            <botton className="checkout" onClick={handlePayment}>
                                Checkout
                            </botton>
                        </div>  
                    </div>
                }
            </div>  
        </div>
    </div>
};

export default Cart;
