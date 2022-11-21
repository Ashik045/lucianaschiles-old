/* eslint-disable no-underscore-dangle */
import Image from 'next/image';
import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import customer1 from '../../images/customer1.jpg';
import customer2 from '../../images/customer2.jpg';
import customer3 from '../../images/customer3.jpg';
import customer4 from '../../images/customer4.jpg';
import SectionHeader from '../SectionHeader/SectionHeader';
import styles from './testimonial.module.scss';
// Import Swiper React components
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules

const testimonials = [
    {
        _id: 1,

        image: customer1,
        quote: 'Your customer service is outstanding, your packaging is beautiful and the products I have received so far are wonderful - great quality!  Your catalog is fabulous.  I usually hate getting catalogs but yours will be staying with me and used often - it is pretty enough to leave on my coffee table!  But what I find most appealing is that your prices are better than most other options out there on almost every product!',
    },
    {
        _id: 2,
        image: customer2,
        quote: 'Everything I have received so far has been wonderful.  I am working on making samples for my website and am so happy with the quality and value of everything.  I did hours and days and weeks of looking and pricing before placing an order, and Halstead was by far the best in both selection and cost.',
    },
    {
        _id: 3,
        image: customer3,
        quote: 'I just got my order of birthstone charms and they are FABULOUS!  The colors are amazing and the size and price are PERFECT.  I have to reiterate how much I love Halstead.  Your customer service, selection and prices are top notch and I love that you’re up the hill from me so I always get my stuff in record time.  I’m a huge fan of you all!',
    },
    {
        _id: 4,
        image: customer4,
        quote: 'I am very happy with the products I received yesterday.  I had some problems with French customs but one of your Customer Service Representatives did everything she could to help and I never felt alone dealing with the problems.  I like the human side of Halstead and the fact that it is a small family-run business like mine.  It felt like I was ordering from the shop around the corner when we are in fact 5000 miles away!',
    },
];

function Testimonial() {
    return (
        <div className={styles.testimonial}>
            <SectionHeader title="TESTIMONIALS" />
            <div className={styles.testimonial_main}>
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    loop
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    className="mySwiper"
                >
                    {testimonials.map((items) => (
                        <SwiperSlide key={items._id}>
                            <div className={styles.testimonial_div}>
                                <Image
                                    src={items.image}
                                    className={styles.testimonial_img}
                                    height={170}
                                    width={170}
                                    alt="jewelry product"
                                    objectFit="cover"
                                    // layout="responsive"
                                />
                                <p>
                                    {' '}
                                    <FaQuoteLeft
                                        size={13}
                                        style={{ color: 'rgb(65, 64, 64)', marginBottom: '5px' }}
                                    />
                                    {'  '}
                                    {items.quote}
                                    <FaQuoteRight
                                        size={13}
                                        style={{
                                            color: 'rgb(65, 64, 64)',
                                            marginBottom: '3px',
                                            marginLeft: '5px',
                                        }}
                                    />{' '}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Testimonial;
