import React from "react";
import './Footer.css'
import { assets } from "../../assets/assets";
const Footer = ()=>{
    return (
<div className="Footer" id="footer">
<div className="footer-content">
<div className="footer-content-left">
<img src={assets.logo} alt="" />
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit aliquam architecto minus porro deserunt eum reiciendis magnam perspiciatis impedit animi inventore excepturi repellendus nemo, quaerat hic iure distinctio necessitatibus! Nostrum.</p>
<div className="footer-social-icons">
<img src={assets.facebook_icon} alt="" />
<img src={assets.twitter_icon} alt="" />
<img src={assets.linkedin_icon} alt="" />
</div>
</div>
<div className="footer-content-center">
    <h2>COMPANY</h2>
    <ul>
        <li> Home</li>
        <li> About us</li>
        <li> Delivery</li>
        <li> Privacy policy</li>
    </ul>
</div>
<div className="footer-content-right">
<h2>GET IN TOUCH</h2>
<ul>
    <li>+2348117292302</li>
    <li> contact@gmail.com</li>
</ul>
</div>
</div>
<hr />
<p className="footer-copyright">
    copyright 2024 @ lalechu.com - All Right Reserved.
</p>
</div>
    )
}
export default Footer