/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Product from '../Product/Product';
import SectionHeader from '../SectionHeader/SectionHeader';
import styles from './products.module.scss';

function Products({ products, title }) {
    const [allProducts, setAllProducts] = useState(products)
    const [filteredPost, setFilteredPost] = useState([]);
    const [inpVal, setInpVal] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData2 = () => {
            if (inpVal?.length > 0) {
                setLoading(true);
                const filterData = allProducts.filter((item) =>
                    Object.values(item.title).join('').toLowerCase().includes(inpVal?.toLowerCase())
                );
                setFilteredPost(filterData);

                setLoading(false);
            } else {
                setFilteredPost(allProducts);
            }

            if (inpVal?.length === 0) {
                setFilteredPost(allProducts);
            }
        };

        fetchData2();
    }, [allProducts, inpVal])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inpVal);
    }

    return (
        <div className={styles.products}>
            <SectionHeader title={title} />
            <div className={styles.products_main}>
                <div className={styles.search}>
                    <h2>Search Here</h2>
                    <form action="" onSubmit={handleSubmit}>
                        <div className={styles.form_div}>
                            <input type="text" placeholder="Search.." value={inpVal} onChange={(e) => setInpVal(e.target.value)} />
                            <FaSearch className={styles.submit_icon} size={22} type="submit" onClick={handleSubmit} />
                        </div>
                    </form>
                </div>

                <div className={styles.all_products}>
                    {filteredPost.length === 0 ? <div className={styles.no_product}>
                    <p>No Product Found</p>
                    </div> : filteredPost?.map((product) => (
                        <Product key={product._id} product={product} scale  />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Products;
