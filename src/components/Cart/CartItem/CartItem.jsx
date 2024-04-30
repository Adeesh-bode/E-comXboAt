import "./CartItem.scss";

import React, { useContext } from "react";
import { Context } from "../../../utils/context";

import  { MdClose } from "react-icons/md"


const CartItem = () => {
    
    
    const { cartItems , handleRemoveFromCart, handleCartProductQuantity } = useContext(Context);
    console.log(cartItems);

    return <div className="cart-items">
        {
           cartItems?.map((item)=>(
            <div className="item" key={item?.id} >
                <div className="left">
                    { console.log(item)}
                    <img src={process.env.REACT_APP_DEV_URL+ item?.attributes?.img?.data?.attributes?.url} alt="product-img" />

                </div>
                <div className="right">
                    <div className="details">
                        <div className="title">{item.attributes.title.slice(0,20)+"..."}</div>
                        {/* {" | "} */}
                        {/* <div className="descrip">Smartwatch with Amoled Screen and 144hz refresh rate</div> */}
                        <div className="close" onClick={()=>handleRemoveFromCart(item)}>
                            <MdClose />
                        </div>
                    </div>
                    <div className="quantity">
                        <button onClick={()=>handleCartProductQuantity('dec',item)}>-</button>
                        <div className="display"> { item?.attributes?.quantity }</div>
                        <button onClick={()=>handleCartProductQuantity('inc',item)} >+</button>
                    </div>
                    <div className="total">
                        {item.attributes.quantity} x <span className="price">${item.attributes.price}</span>
                    </div>
                </div>
            </div>
                )) 
        }
</div>;
};

export default CartItem;
 