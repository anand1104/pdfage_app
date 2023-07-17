import React from 'react';
import footerStyles from '@/app/styles/footer.module.css'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import Link from "next/link";


export const metadata = {
  url: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css',
}

const Footer = () => {
  return (
    <>
      <footer className={footerStyles.footer}>
        <div className={footerStyles.content}>
          <div className={footerStyles.top}>
            <div className={footerStyles['logo-details']}>
              {/*<i className={footerStyles.fab fa-slack]></i>*/}
              <span className={footerStyles.logo_name}>PDF ACE</span>
            </div>
            <div className={footerStyles[`media-icons`]}>
              <Link href="#"><i > <FaFacebookF /> </i></Link>
              <Link href="#"><i > <FaTwitter /> </i> </Link>
              <Link href="#" target="_blank"><i > <FaInstagram />  </i></Link>
              <Link href="#"><i > <FaLinkedinIn /> </i></Link>
              <Link href="#"><i > <FaYoutube />  </i></Link>
            </div>
          </div>
          <div className={footerStyles['link-boxes']}>
            <ul className={footerStyles.box}>
              <li className={footerStyles.link_name}>Company</li>
              <li><a href="#">Home</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Tools</a></li>
            </ul>
            <ul className={footerStyles.box}>
              <li className={footerStyles.link_name}>View & Edit</li>
              <li><a href="#">Edit PDF</a></li>
              <li><a href="#">Merge PDF</a></li>
              <li><a href="#">Split PDF</a></li>
              <li><a href="#">Delete  PDF Page</a></li>
            </ul>
            <ul className={footerStyles.box}>
              <li className={footerStyles.link_name}>Conversion</li>
              <li><a href="#">PDF to Word</a></li>
              <li><a href="#">Word to PDF</a></li>
              <li><a href="#">PDF to Image</a></li>
              <li><a href="#">Image to PDF </a></li>
            </ul>
            <ul className={footerStyles.box}>
              <li className={footerStyles.link_name}>Security</li>
              <li><a href="#">e-Sign PDF</a></li>
              <li><a href="#">Protect PDF</a></li>
            </ul>
            <ul className={`${footerStyles.box} ${footerStyles['input-box']}`}>
              <li className={footerStyles.link_name}>Subscribe</li>
              <li><input type="text" placeholder="Enter your email" /></li>
              <li><input type="button" value="Subscribe" /></li>
            </ul>
          </div>
        </div>
        <hr />
        <div className={footerStyles['bottom-details']}>
          <div className={footerStyles.bottom_text}>
            <span className={footerStyles.copyright_text}> Copyright © 2023
              <Link href="/>"> PDF ACE.</Link> All rights reserved </span>
            <span className={footerStyles.policy_terms}>
              <Link href="/">Privacy policy</Link>
              <Link href="/">Terms & condition</Link>
            </span>
          </div>
        </div>
      </footer>

    </>
  );
}

export default Footer;