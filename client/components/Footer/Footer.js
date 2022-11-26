import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
// import brand from '../../images/retool-icon.svg';
import FooterColumn from '../FooterColumn/FooterColumn';
import styles from './footer.module.scss';

const FooterDetail1 = [
    {
        id: 1,
        link: '/about',
        text: 'About Us',
    },
    {
        id: 2,
        link: '/',
        text: 'Home',
    },
    {
        id: 3,
        link: '/contact',
        text: 'Contact',
    },
    {
        id: 4,
        link: '/blogs',
        text: 'Blogs',
    },
];

const FooterDetail2 = [
    {
        id: 1,
        link: '/products',
        text: 'Products',
    },
    {
        id: 2,
        link: '/about',
        text: 'About',
    },
    {
        id: 5,
        link: '/contact',
        text: 'Contact Us',
    },
];

function Footer() {
    return (
        <div className={styles.footer_sec}>
            <div className={styles.footer_sec_main}>
                <div className={styles.first_col}>
                    <div className={styles.first_col_brand}>
                        {/* <Image src={brand} alt="footer-brand" height={35} width={35} /> */}
                        <h2>Lucianaschiles</h2>
                    </div>
                    <p>
                        We help buisnesses maximize their online persence with a personalized
                        approach to online marketing.
                    </p>
                    
                </div>

                <div className={styles.second_col}>
                    <h3>Contact</h3>
                    <p>Mexico, US</p>
                    <p>+880000000000</p>
                    <p className={styles.second_col_email}>Office@merchantquickfix.com</p>
                    <span>
                        <Link href="https://facebook.com" target="_blank">
                            <FaFacebook className={styles.body_iconss} />
                        </Link>
                        <Link href="https://twitter.com" target="_blank">
                            <FaTwitter className={styles.body_iconss} />
                        </Link>
                        <Link href="https://instagram.com" target="_blank">
                            <FaInstagram className={styles.body_iconss} />
                        </Link>
                    </span>
                </div>

                <FooterColumn FooterDetail={FooterDetail1} title="Basic Info" />
                <FooterColumn FooterDetail={FooterDetail2} title="Our Services" />
            </div>
        </div>
    );
}

export default Footer;