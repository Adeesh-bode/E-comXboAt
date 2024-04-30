import "./Newsletter.scss";

import { FaLinkedinIn , FaFacebookF , FaTwitter , FaInstagram } from "react-icons/fa";


const Newsletter = () => {
    return <div className="newsletter-section">
        <div className="newsletter-content">
            {/* h tags nhi use karna div yaha fir chote chote elements k liye span */}
            <h4 className="small-text">Newsletter</h4>
            <h2  className="big-text">Sign up for latest updates and offers</h2>
            <div className="form">
                <input type="text" placeholder="Email Address" className="email-input" ></input>
                <button className="subscribe" >Subscribe</button>
            </div>
            <h5 className="text">Will be used in accordance with our policy</h5>
            <div className="social-icons" >
                <FaLinkedinIn size={20} />
                <FaFacebookF size={20} />
                <FaTwitter size={20} />
                <FaInstagram size={20}/>
            </div>
        </div>
    </div>;
};

export default Newsletter;
