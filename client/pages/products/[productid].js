import Image from 'next/image';
import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import styles from '../../styles/singleproduct.module.scss';

const index = ({product}) => {
    const [sliderNum, setSliderNum] = useState(0)
    
return (
    <div className={styles.product_detail_page}>
        <Navbar />
            <div className={styles.product_detail_page}>
                <div className={styles.detail_page_left}>
                <div className={styles.detail_page_slider}>
                    <Image src={product.images[sliderNum]} width={600} height={500} />

                    <div className={styles.slider_btm_imgs}>
                        {product.images.map((img, i) => {
                        return <Image key={i} src={img} onClick={() => setSliderNum(i)} alt="project img" className={styles.slider_btm_img} height={50} width={90} />
                        })}
                    </div>
                </div>

                    {product.detail.map((detail, i) => {
                       return <p key={i}>{detail}</p>
                    })}
                </div>

                <div className={styles.detail_page_right}>
                    <h1>{product.title}</h1>
                    <h2>${product.price}</h2>
                    <p>Qualtity</p>
                    <input type="number" name="" id="" />
                    <button>Add to Cart</button>

                    <div className={styles.highlight}>
                        <h2>Highlights</h2>
                        {product.highlights.map((highlight, i) => {
                            return <p key={i}>{highlight}</p>
                        })}
                    </div>
                </div>
            </div>
        <Footer />
    </div>
);
                    }

export default index;

export async function getStaticPaths() {
    const res = await fetch('https://lucianaschiles-backend.onrender.com/api/products/all')
  
    const data = await res.json();
    const products = data.message;

    const paths = products.map((items) => ({
        params: {
            productid: items._id
        }
    }));
    
    return {
        paths,
        fallback: true,
    }
  }  

export async function getStaticProps(context) {
    const {params} = context;

    const res = await fetch(`https://lucianaschiles-backend.onrender.com/api/products/${params.productid}`)
  
    const data = await res.json();
  
    const product = data.message;
    return {
      props: {
        product: product || null,
      },
    }
}