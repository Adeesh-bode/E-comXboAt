import "./Product.scss";
import { useContext } from "react";
import { Context } from "../../../utils/context";
import ProductImg from "../../../assets/products/speaker-prod-3.webp";
import { useNavigate } from "react-router-dom";
const Product = ( { id,title, img, price, desc} ) => {
    // const useNavigate =useNavigate();

    const {navigate} = useContext(Context);

    return <div className="product-card"
        onClick={()=>navigate(`/product/${id}`)}>
        <div className="img-div">
            <img src={img} alt="product" className="product-img"/>
        </div>
        <div className="details">
            <div className="name">{title}</div>
            <div className="descrip">{desc}</div>
            <div className="price">${price}</div>
        </div>
    </div>;
};

export default Product;
