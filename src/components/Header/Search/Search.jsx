import {MdClose } from "react-icons/md";
import ProductImg from "../../../assets/products/earbuds-prod-1.webp";


import "./Search.scss";
import CartItem from "../../Cart/CartItem/CartItem";

import useFetch from "../../../hooks/useFetch";
import { useContext, useState} from "react";
import { Context } from "../../../utils/context";



const Search = () => {

    const [ query, setQuery ] = useState("");
    // const { navigate } = useContext();


    const onChange = (e=>{
        setQuery(e.target.value);
    })

    let {data} = useFetch(`/api/products?populate=*&filters[title][$contains]=${query}`);
    console.log(query);
    // $ operator in strapi ex. ne fr notequal
    //? for optional chaining prevets error crash if resource not found

    if(!query.length){
        data=null;
    }

    console.log(data);

    const { setShowSearch, navigate , setSearch } = useContext(Context);
    return <div className="search">
        <div className="search-box">
            <input type="text"autofocus placeholder="Product Search" onChange={(e)=>onChange(e)} />
            <MdClose onClick={()=>setShowSearch(false)}/>
        </div>
        <div className="search-result" >
            {
                data?.data?.map((item)=>(
                    <div className="search-result-item" key={item?.id } 
                        onClick={()=>{
                            navigate(`/product/${item.id}`)
                            setShowSearch(false);
                        }}
                    >
                        <div className="left">
                            <img src={process.env.REACT_APP_DEV_URL + 
                                item?.attributes?.img?.data?.attributes?.url} alt="product-img" />
                        </div>
                        <div className="right">
                            <div className="details">
                                <div className="title">{item?.attributes?.title.slice(0,65)+"..."}</div>
                                <div className="descrip">{item?.attributes?.desc.slice(0,60)+"..."}</div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>;
};

export default Search;
