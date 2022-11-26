/* eslint-disable no-underscore-dangle */
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import Product from '../Product/Product';
import SectionHeader from '../SectionHeader/SectionHeader';
import styles from './products.module.scss';

function Products({ products }) {
    return (
        <div className={styles.products}>
            <SectionHeader title="PRODUCTS" />
            <div className={styles.products_main}>
                <div className={styles.search}>
                    <h2>Search Here</h2>
                    <form action="">
                        <div className={styles.form_div}>
                            <input type="text" placeholder="Search.." />
                            <FaSearch className={styles.submit_icon} size={22} type="submit" />
                        </div>
                    </form>
                </div>

                <div className={styles.all_products}>
                    {products?.map((product) => (
                        <Product key={product._id} product={product} scale  />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Products;
