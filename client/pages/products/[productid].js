import Image from 'next/image';
import React, { useState } from 'react';
import { FaCheckDouble, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Swal from 'sweetalert2';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import styles from '../../styles/singleproduct.module.scss';

const productDetail = ({product}) => {
    const [sliderNum, setSliderNum] = useState(0)
    const [quantity, setQuantity] = useState(1)

    const lastImg = product.images?.length - 1;
    const handleClick = (e) => {
        let newSliderNum;
        if (e === "inc") {
            newSliderNum = sliderNum === 0 ? lastImg :  sliderNum - 1
        } else {
            newSliderNum = sliderNum === lastImg ? 0 :  sliderNum + 1
        }

        setSliderNum(newSliderNum)
    }

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        width: "15rem",
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

    const addToCart = () => {
        console.log(quantity);
        Toast.fire({
            icon: 'success',
            title: 'Added to Cart',
          })
    }
    
return (
    <div className={styles.product_detail_page}>
        <Navbar />
            <div className={styles.product_detail_page}>
                <div className={styles.detail_page_left}>
                <div className={styles.detail_page_slider}>
                    <div className={styles.slider_main}>
                        <Image src={product?.images[sliderNum]} width={500} height={500} alt="product img" className={styles.slider_main_imgg} />
                        
                        <div className={styles.slider_btnss}>
                            <FaChevronLeft size={35} className={styles.slide_icon} onClick={() => handleClick("inc")} />
                            <FaChevronRight size={35} className={styles.slide_icon} onClick={() => handleClick("dec")} />
                        </div>
                    </div>

                    <div className={styles.slider_btm_imgs}>
                        {product.images?.map((img, i) => {
                        return <Image key={i} src={img} onClick={() => setSliderNum(i)} alt="product img" className={styles.slider_btm_img} height={50} width={70} />
                        })}
                    </div>
                </div>

                <div className={styles.res_priceee}>
                    <h2 className={styles.product_title}>{product.title}</h2>
                    <h2 className={styles.product_price}>USD {product.price}</h2>
                    <span style={{fontSize: "14px", color: 'rgb(66, 65, 65)'}}>Local taxes included (where applicable)</span>
                    <p style={{color: 'black', marginTop: '40px'}}>Quantity</p>
                    <input type="number" value={quantity} min={1} max={20} onChange={(e) => setQuantity(e.target.value)} className={styles.product_quantity}/>
                    <button onClick={addToCart} >Add to Cart</button>

                    <div className={styles.highlight}>
                        <h3>Highlights</h3>
                        {product.highlights.map((highlight, i) => {
                            return <p key={i}><FaCheckDouble style={{marginRight: '5px'}} size={15} /> {highlight}</p>
                        })}
                    </div>
                </div>

                    {product.detail.map((detail, i) => {
                       return <p key={i} className={styles.detail_secs}>{detail}</p>
                    })}
                </div>

                <div className={styles.detail_page_right}>
                    <h2 className={styles.product_title}>{product.title}</h2>
                    <h2 className={styles.product_price}>USD {product.price}</h2>
                    <span style={{fontSize: "14px", color: 'rgb(66, 65, 65)'}}>Local taxes included (where applicable)</span>
                    <p style={{color: 'black', marginTop: '40px'}}>Quantity</p>
                    <input type="number" value={quantity} min={1} max={20} onChange={(e) => setQuantity(e.target.value)} className={styles.product_quantity}/>
                    <button onClick={addToCart} >Add to Cart</button>

                    <div className={styles.highlight}>
                        <h3>Highlights</h3>
                        {product.highlights.map((highlight, i) => {
                            return <p key={i}><FaCheckDouble style={{marginRight: '5px'}} size={15} /> {highlight}</p>
                        })}
                    </div>
                </div>
            </div>
        <Footer />
    </div>
);
}

export default productDetail;

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
        fallback: false,
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