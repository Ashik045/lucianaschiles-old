import Head from 'next/head';
import BlogComponent from '../components/BlogComponent/BlogComponent';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import Newsletter from '../components/Newsletter/Newsletter';
import Products from '../components/Products/Products';
import Testimonial from '../components/Testimonial/Testimonial';
import TopratedProducts from '../components/TopratedProducts/TopratedProducts';


// const blogs = [
//     {
//         _id: 1,
//         title: 'Looking for a new way to add flavor to your food without sacrificing taste?',
//         desc: [
//             'This Simple Style Enamel Design Anklet is a stylish and elegant accessory for your feet. It is made of alloy material with enamel design in donut pattern. The anklet is simple yet chic and will make a great addition to your jewelry collection. It has an adjustable closure to ensure a comfortable fit. Wear it with your favorite dress or skirt for a special occasion or any day of the week to add a touch of glamour to your look.',
//             'Not only is our Guajillo chile delicious, but it is also healthy! These little peppers are packed with vitamins and minerals, making them not only good for your taste buds, but good for your body as well. So if you are looking for a new way to add flavor to your food without sacrificing taste',
//         ],
//         image: blog1,
//     },
//     {
//         _id: 2,
//         title: 'Looking for a new way to add flavor to your food without sacrificing taste?',
//         desc: [
//             'This Simple Style Enamel Design Anklet is a stylish and elegant accessory for your feet. It is made of alloy material with enamel design in donut pattern. The anklet is simple yet chic and will make a great addition to your jewelry collection. It has an adjustable closure to ensure a comfortable fit. Wear it with your favorite dress or skirt for a special occasion or any day of the week to add a touch of glamour to your look.',
//             'Not only is our Guajillo chile delicious, but it is also healthy! These little peppers are packed with vitamins and minerals, making them not only good for your taste buds, but good for your body as well. So if you are looking for a new way to add flavor to your food without sacrificing taste',
//         ],
//         image: blog2,
//     },
//     {
//         _id: 3,
//         title: 'Looking for a new way to add flavor to your food without sacrificing taste?',
//         desc: [
//             'This Simple Style Enamel Design Anklet is a stylish and elegant accessory for your feet. It is made of alloy material with enamel design in donut pattern. The anklet is simple yet chic and will make a great addition to your jewelry collection. It has an adjustable closure to ensure a comfortable fit. Wear it with your favorite dress or skirt for a special occasion or any day of the week to add a touch of glamour to your look.',
//             'Not only is our Guajillo chile delicious, but it is also healthy! These little peppers are packed with vitamins and minerals, making them not only good for your taste buds, but good for your body as well. So if you are looking for a new way to add flavor to your food without sacrificing taste',
//         ],
//         image: blog3,
//     },
//     {
//         _id: 4,
//         title: 'Looking for a new way to add flavor to your food without sacrificing taste?',
//         desc: [
//             'This Simple Style Enamel Design Anklet is a stylish and elegant accessory for your feet. It is made of alloy material with enamel design in donut pattern. The anklet is simple yet chic and will make a great addition to your jewelry collection. It has an adjustable closure to ensure a comfortable fit. Wear it with your favorite dress or skirt for a special occasion or any day of the week to add a touch of glamour to your look.',
//             'Not only is our Guajillo chile delicious, but it is also healthy! These little peppers are packed with vitamins and minerals, making them not only good for your taste buds, but good for your body as well. So if you are looking for a new way to add flavor to your food without sacrificing taste',
//         ],
//         image: blog4,
//     },
//     {
//         _id: 5,
//         title: 'Looking for a new way to add flavor to your food without sacrificing taste?',
//         desc: [
//             'This Simple Style Enamel Design Anklet is a stylish and elegant accessory for your feet. It is made of alloy material with enamel design in donut pattern. The anklet is simple yet chic and will make a great addition to your jewelry collection. It has an adjustable closure to ensure a comfortable fit. Wear it with your favorite dress or skirt for a special occasion or any day of the week to add a touch of glamour to your look.',
//             'Not only is our Guajillo chile delicious, but it is also healthy! These little peppers are packed with vitamins and minerals, making them not only good for your taste buds, but good for your body as well. So if you are looking for a new way to add flavor to your food without sacrificing taste',
//         ],
//         image: blog5,
//     },
//     {
//         _id: 6,
//         title: 'Looking for a new way to add flavor to your food without sacrificing taste?',
//         desc: [
//             'This Simple Style Enamel Design Anklet is a stylish and elegant accessory for your feet. It is made of alloy material with enamel design in donut pattern. The anklet is simple yet chic and will make a great addition to your jewelry collection. It has an adjustable closure to ensure a comfortable fit. Wear it with your favorite dress or skirt for a special occasion or any day of the week to add a touch of glamour to your look.',
//             'Not only is our Guajillo chile delicious, but it is also healthy! These little peppers are packed with vitamins and minerals, making them not only good for your taste buds, but good for your body as well. So if you are looking for a new way to add flavor to your food without sacrificing taste',
//         ],
//         image: blog6,
//     },
// ];

export default function Home({ products, blogs }) {

    // console.log(products);
    return (
        <div className="container">
            <Head>
                <title>Lucianaschiles</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="main">
                <Navbar />
                <Header />
                <Products products={products} title="PRODUCTS" />
                <TopratedProducts products={products} />
                <Testimonial />
                <BlogComponent blogs={blogs} />
                <Newsletter />
                <Footer />
            </main>
        </div>
    );
}

export async function getStaticProps() {
    const res = await fetch('https://lucianaschiles-backend.onrender.com/api/products/all')
    const res2 = await fetch('https://lucianaschiles-backend.onrender.com/api/blogs/all')

    const data = await res.json();
    const data2 = await res2.json();

    const products = data.message;
    const blogs = data2.message;
    return {
      props: {
        products: products || null,
        blogs: blogs || null,
      },
    }
};