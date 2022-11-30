/* eslint-disable no-unused-vars */
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { FaShoppingCart, FaStream, FaTimes } from 'react-icons/fa';
import styles from './navbar.module.scss';

function Navbar() {
    const router = useRouter();
    const [toggler, setToggler] = useState(false);
    const [cartItem, setCartItem] = useState(0);

    useEffect(() => {
        const items = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('productlist'))
        setCartItem(items?.length)
        console.log(cartItem);
    }, [cartItem])

    const handleToggle = () => {
        setToggler(!toggler);
    };

    return (
        <div className={styles.navbar}>
            <div className={styles.navbar_main}>
                <Link href="/">
                    <div className={styles.brand}>
                        <h3>Lucianaschiles</h3>
                    </div>
                </Link>

                <div className={styles.menus}>
                    <div className={styles.menu_item}>
                        <Link href="/">
                            <p className={router.pathname === '/' ? `${styles.active}` : ''}>
                                Home
                            </p>
                        </Link>
                        <Link href="/products">
                            <p
                                className={
                                    router.pathname === '/products' ? `${styles.active}` : ''
                                }
                            >
                                Products
                            </p>
                        </Link>
                        <Link href="/about">
                            <p className={router.pathname === '/about' ? `${styles.active}` : ''}>
                                About
                            </p>
                        </Link>
                        <Link href="/blogs">
                            <p className={router.pathname === '/blogs' ? `${styles.active}` : ''}>
                                Blogs
                            </p>
                        </Link>
                    </div>

                    <Link href="/cart">
                        <div className={styles.cart}>
                            <FaShoppingCart className={styles.cart_icon} />
                            <span>{cartItem || 0}</span>
                        </div>
                    </Link>
                </div>

                {toggler ? (
                    <FaTimes onClick={handleToggle} className={styles.toggle_icon} size={22} />
                ) : (
                    <FaStream onClick={handleToggle} className={styles.toggle_icon} />
                )}
                {toggler && (
                    <div className={styles.res_menu}>
                        <div className={styles.res_menu_item}>
                            <Link href="/">
                                <p className={router.pathname === '/' ? `${styles.active}` : ''}>
                                    Home
                                </p>
                            </Link>
                            <Link href="/products">
                                <p
                                    className={
                                        router.pathname === '/products' ? `${styles.active}` : ''
                                    }
                                >
                                    Products
                                </p>
                            </Link>
                            <Link href="/about">
                                <p
                                    className={
                                        router.pathname === '/about' ? `${styles.active}` : ''
                                    }
                                >
                                    About
                                </p>
                            </Link>
                            <Link href="/blogs">
                                <p
                                    className={
                                        router.pathname === '/blogs' ? `${styles.active}` : ''
                                    }
                                >
                                    Blogs
                                </p>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;
