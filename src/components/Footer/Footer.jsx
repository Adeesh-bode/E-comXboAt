import "./Footer.scss";
// import Newsletter from "./Newsletter/Newsletter";
import PaymentOptions from "../../assets/payments.png";

import { FaLocationArrow } from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdEmail } from "react-icons/md";


const Footer = () => {
    return <div className='footer-content'>
        <div className="footer-main">
            <div className="about footer-subcontent">
                <h2>About</h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima et, facet consectetur adipisicing elit
                </p>
            </div>
            <div className="contact footer-subcontent">
                <h2>Contact</h2>
                <div> 
                    <FaLocationArrow />{" "}Boyz Hostel,Ramdeobaba College,Nagpur,440013
                </div>
                <div>
                    <IoIosPhonePortrait />{" "}Phone: 04712720261
                </div>
                <div>
                    <MdEmail />{" "}Email: adeshbode@gmail.com
                </div>
            </div>
            <div className="categories footer-subcontent">
                <h2>Categories</h2>
                <div>Headphones</div>
                <div>Smart Watches</div>
                <div>Bluetooth Speakers</div>
                <div>Wireless Earbud</div>
                <div>Home Theatre</div>
                <div>Projectors</div>
            </div>
            <div className="pages footer-subcontent">
                <h2>Pages</h2>
                <div>Home</div>
                <div>About</div>
                <div>Privacy Policy</div>
                <div>Resume</div>
                <div>Contact Us</div>
            </div>
        </div>
        <div className="additional">
        <div>React E-commerce Store 2023 created by Adesh</div>
            <img src={PaymentOptions} alt="payment-options" />
        </div>
    </div>;
};

export default Footer;
