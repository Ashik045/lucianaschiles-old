/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Pagination } from 'swiper';
import SectionHeader from '../SectionHeader/SectionHeader';
import styles from './blogcomponent.module.scss';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Blog from '../Blog/Blog';

function BlogComponent({ blogs }) {
    return (
        <div className={styles.blog_component}>
            <SectionHeader title="BLOGS" />
            <div className={styles.blog_component_main}>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {blogs.map((blog) => (
                        <SwiperSlide key={blog._id}>
                            <Blog blog={blog} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default BlogComponent;
