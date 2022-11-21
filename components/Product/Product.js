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
                    src={product.image}
                    className={scale ? styles.productt_img : styles.product_imgg}
                    height={300}
                    width={270}
                    alt="jewelry product"
                    objectFit="cover"
                    // layout="responsive"
                />
            </Link>
            <Link href={`/products/${product._id}`}>
                <h3 className={styles.productt_title}>{product.title}</h3>
            </Link>
            <p>{product.desc[0]}</p>
        </div>
    );
}

export default Product;
