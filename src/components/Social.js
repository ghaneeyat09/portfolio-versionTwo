import React from 'react';
import { Link } from 'gatsby';
import * as styles from "../styles/social.module.css";
export default function Social() {

  return (
    <div>
        <h1 className="section-header">Where to find Me</h1>
        <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className={styles.wrapper}>
        <div>
            <Link to="#"><img src="/icons/tiktok.png" alt="" title="tiktok"/></Link>
        </div>
        <div>
           <Link to="#"><img src="/icons/twitter.png" alt="" title="twitter"/></Link>
        </div>
        <div>
           <Link to="#"><img src="/icons/whatsapp.png" alt="" title="whatsapp"/></Link>
        </div>
        <div>
           <Link to="#"><img src="/icons/instagram.png" alt="" title="instagram"/></Link>
        </div>
        <div>
           <Link to="#"><img src="/icons/gmail.png" alt="" title="email"/></Link>
        </div>
        <div>
           <Link to="#"><img src="/icons/github.png" alt="" title="github"/></Link>
        </div>
        <div>
           <Link to="#"><img src="/icons/linkedin.png" alt="" title="linkedin"/></Link>
        </div>
        </div> 
    </div>
  )}

