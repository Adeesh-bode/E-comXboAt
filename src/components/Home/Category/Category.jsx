import "./Category.scss";

import { useNavigate } from "react-router-dom";

const Category = ( { categories }) => {

    const navigate = useNavigate(); // instance created navigate

    return <div className="shop-by-category">
        <div className="category">
            {
                categories?.data?.map((item)=>(
                    <img key={item.id} 
                        src={ process.env.REACT_APP_DEV_URL + item.attributes.img.data.attributes.url } 
                        alt="category-img" className="cat-img"
                        
                        onClick={()=>navigate(`/category/${item.id}`)}// template literal used

                        // iss on click se vo home k category component se category page pe chale jaega
                        // category ka pagee item id ko url se nikalega usse fir specific category ppage banega

                    />
                 ) )
            }
        </div>;        
    </div>
};

export default Category;
