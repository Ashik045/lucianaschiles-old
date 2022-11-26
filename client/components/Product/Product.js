/* eslint-disable no-underscore-dangle */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './product.module.scss';

function Product({ product, scale }) {
    return (
        <div className={styles.productt}>
            <Link href={`/products/${product._id}`}>
                <Image
                    src={product.images[0]}
                    className={scale ? styles.productt_img : styles.product_imgg}
                    height={250}
                    width={270}
                    alt="chiles product"
                    objectFit="cover"
                    // layout="responsive"
                />
            </Link>
            <Link href={`/products/${product._id}`}>
                <h3 className={styles.productt_title}>{product.title}</h3>
            </Link>
            <p>{product.detail[0]}</p>
            <span>
                USD <b style={{ marginLeft: '4px' }}> {product.price}</b>
            </span>
        </div>
    );
}

export default Product;
