/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper';
import Product from '../Product/Product';
import styles from './topratedproducts.module.scss';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SectionHeader from '../SectionHeader/SectionHeader';

function TopratedProducts({ products }) {
    return (
        <div className={styles.toprated_products}>
            <SectionHeader title="TOPRATED PRODUCTS" />
            <div className={styles.toprated_products_main}>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    navigation
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                     modules={[Pagination, Navigation, Autoplay]}
                    className="mySwiper"
                >
                    {products.map((product) => (
                        <SwiperSlide key={product._id} className={styles.slide}>
                            <Product product={product} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default TopratedProducts;
