import { createContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";


export const Context = createContext(); // yaha context create hua hai....

// ye upper wale contect ko ab dusre files mai importkarege jisse yahe k saare states usme use ho sake

const AppContext = ({children}) =>{
    
    const [ categories, setCategories] = useState();
    const [ products , setProducts] = useState();

    const [showCart, setShowCart] = useState(false); // iska use q nhi hua dekhna
    // github wale code mai used hai..
    
    const [showSearch, setShowSearch ] = useState(false);

    // const [ quantity, setQuantity ] = useState(1);
    const [ cartItems, setCartItems ] = useState([]);
    // const [ cartCount, setCartCount ] = useState(0);   isske jagah dusre naam se liye
    const [ cartSubTotal, setCartSubTotal ] = useState(0);
    const [ cartItemsQuantity, setCartItemsQuantity] = useState(cartItems.length);

    const navigate = useNavigate();
    
    const location = useLocation(); // location means url ( navigate hua toh change hue)
    useEffect(()=>{
        window.scroll(0,0);
    },[location])

    useEffect(()=>{
        let subTotal=0;
        cartItems.map((item)=>subTotal+=item.attributes.price*item.attributes.quantity);
        setCartSubTotal(subTotal);
        setCartItemsQuantity(cartItems.length);
    },[cartItems]);

    const handleAddToCart = (product, quantity)=>{
        console.log(product);
        let items = [...cartItems];
        const index = items?.findIndex((p)=>p.id === product?.id);// if not found returns -1 

        if(index!==-1){// that is  element already in cart // now only only quantity increase
            items[index].attributes.quantity+=quantity;
        }
        else{ // product ko he addkarna hai
            product.attributes.quantity=quantity;
            items=[...items, product];
        }
        
        setCartItems(items);

        console.log(items);
    }

    const handleRemoveFromCart=(product)=>{
        let items =[...cartItems];
        items=items.filter((p)=>p.id!==product.id);
        setCartItems(items);
    }

    const handleCartProductQuantity=( type, product )=>{ 
        let items = [...cartItems];
        let index = items.findIndex((p)=>p.id===product.id)
        if(type==='inc'){
            items[index].attributes.quantity+=1;
        }
        else if(type==='dec'){
            if(product.attributes.quantity===1 )  return ; 
            items[index].attributes.quantity-=1;
        }        
        setCartItems(items);
    }

    return(
        
        // jo bhi provide karna haii context proivde ke value k andar dal dena

        <Context.Provider value={{ 
            categories, setCategories ,
            products, setProducts,
            navigate,
            // quantity, setQuantity,
            cartItems, setCartItems,
            // cartCount, setCartCount, isske jagah dusre naam se liye
            cartSubTotal, setCartSubTotal,
            handleAddToCart,
            handleRemoveFromCart,
            handleCartProductQuantity,

            showCart, setShowCart,
            showSearch, setShowSearch,
            cartItemsQuantity
        }}
        >
            {children}
        </Context.Provider>
    )
}
export default AppContext;
