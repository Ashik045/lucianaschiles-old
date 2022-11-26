import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import Image from 'next/image';
import { Autoplay, Pagination } from 'swiper';
import header1 from '../../images/header1.jpg';
import header2 from '../../images/header2.jpg';
import header3 from '../../images/header3.jpg';
import header4 from '../../images/header4.jpg';
import styles from './header.module.scss';

function Header() {
    if (typeof window !== 'undefined') {
        console.log(window.console.error);
    }

    return (
        <div className={styles.header}>
            <div className={styles.header_main}>
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    loop
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    className="mySwiper"
                >
                    <SwiperSlide  className={styles.slidee}>
                        <Image
                            src={header1}
                            alt="jewelry img"
                            className={styles.header_img}
                            height={600}
                            layout="responsive"
                            width={1250}
                        />
                    </SwiperSlide>
                    <SwiperSlide  className={styles.slidee}>
                        <Image
                            src={header2}
                            alt="jewelry img"
                            className={styles.header_img}
                            height={600}
                            width={1250}
                            layout="responsive"
                        />
                    </SwiperSlide>
                    <SwiperSlide  className={styles.slidee}>
                        <Image
                            src={header3}
                            alt="jewelry img"
                            className={styles.header_img}
                            height={600}
                            width={1250}
                            layout="responsive"
                        />
                    </SwiperSlide>
                    <SwiperSlide  className={styles.slidee}>
                        <Image
                            src={header4}
                            alt="jewelry img"
                            className={styles.header_img}
                            height={600}
                            width={1250}
                            layout="responsive"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default Header;
