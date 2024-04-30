import Products from "../../Products/Products";

import { useContext } from "react";
import { Context } from "../../../utils/context";
import useFetch from "../../../hooks/useFetch";
const RelatedProducts = ({categoryid, productid}) => {

    console.log(categoryid);
    console.log(productid);
    
    // console.log(typeof(categoryid))
    // const { data } = useFetch(`/api/products?populate=*&[filters][products][categories][id]=${categoryid}`);
    
    const { data } = useFetch(`/api/products?populate=*&filters[id][$ne]=${productid}&filters[categories][id]=${categoryid}&
        pagination[start]=0&pagination[limit]=4
    `);

    console.log(data);

    return <div>
        <Products title="Related Products" products={data} />
        </div>;
};

export default RelatedProducts;
