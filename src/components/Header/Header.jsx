import "./Header.scss";

import { useEffect, useState, useContext} from 'react';
// import { useNavigate } from "react-router-dom";

import { TbSearch } from 'react-icons/tb';
import { CgShoppingCart } from 'react-icons/cg';
import { AiOutlineHeart } from 'react-icons/ai';

import Cart from '../Cart/Cart';
import Search from './Search/Search';

// import {useContext} from 'react'
import { Context } from '../../utils/context';


const Header = () => {

    const { navigate ,showCart, setShowCart,showSearch, setShowSearch, cartItemsQuantity} = useContext(Context);
    const [scrolled, setScrolled ] = useState(false);
    // const [ cartItemsQuantity, setCartItemsQuantity] = useState(cartItems.length);
    // const [ showCart, setShowCart ] = useState(false);
    // const [showSearch, setShowSearch ] = useState(false);
    useEffect(()=>{
        const handleScroll=()=>{
            const offSet = window.scrollY;
            if(offSet>200){
                setScrolled(true);
            }
            else{
                setScrolled(false);
            }
        } 

        window.addEventListener("scroll",handleScroll);
        
    },[]) 
    // hook in react that allow side renderi-ng,called after 1st render of component
    // afterwards whenever the dependency array changes, it will again be rendered
    
    return( 
    <header className={`main-header ${scrolled ? 'sticky-header': "" }`}>
        <div className="header-content">
            {/* shortcut ul>li*3 */}
            <ul className="left">
                <li onClick={()=> navigate('')}>Home</li>
                <li onClick={()=>window.scroll(0,3200)} >About</li>
                <li onClick={()=>window.scroll(0,600)} >Categories</li>
            </ul>
            <div className="center" onClick={()=>
                navigate('')
            } >ReactXboAt</div>
            <div className="right">
                <TbSearch onClick={()=>setShowSearch(true)} />
                <AiOutlineHeart />
                <span className="cart-icon">
                    <CgShoppingCart  onClick={()=>setShowCart(true)} />
                    <span>{cartItemsQuantity}</span>
                </span>
            </div>
        </div>
        { showCart && <Cart />}
        { showSearch && <Search  />}

    </header>
    );
};

export default Header;
