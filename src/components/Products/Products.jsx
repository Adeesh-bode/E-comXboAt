import "./Products.scss";
import Product from "./Product/Product";

const Products = ({innerpage="true", title ="Trending Products" , products}) => {
    return <div className="products">
        <div className="products-heading">
            {title}
        </div>
        <div className="products-items">
            {
                products?.data?.map((item)=>(
                    <Product key={item.id}
                        img={process.env.REACT_APP_DEV_URL+ item?.attributes?.img?.data?.attributes?.url }
                        title={item?.attributes?.title}
                        price={item?.attributes?.price}
                        desc={item?.attributes?.desc}
                        id={item.id}
                    />
                ))
            }
        </div>
    </div>;
};

export default Products;
