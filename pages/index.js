import Head from 'next/head';
import BlogComponent from '../components/BlogComponent/BlogComponent';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import Products from '../components/Products/Products';
import Testimonial from '../components/Testimonial/Testimonial';
import TopratedProducts from '../components/TopratedProducts/TopratedProducts';
import product1 from '../images/product1.jpg';
import product2 from '../images/product2.jpg';
import product3 from '../images/product3.jpg';
import product4 from '../images/product4.jpg';

const products = [
    {
        _id: 1,
        title: 'Flor de Jamaica Herbal Tea: A great Way to Boost Your Health - Brew Hot or Cold - high-quality source for Hibiscus Tea - 8oz',
        image: product1,
        desc: [
            'Savor the taste of Mexico with every sip of Dried Hibiscus Jamaica, Imported from Mexico and used in a popular Mexican drink, agua de Jamaica. Packed with antioxidants to help you stay healthy and vibrant. Served over ice with sweetener, lime, and fresh herbs for a refreshing beverage.',
            'You can make delicious beverages in a matter of seconds without having to clean up any mess. These drinks are also superfood-based, low in calories, portable, and handy.',
            'Flavorful and healthy beverage alternative, Can be used to make many different kinds of drinks, Very versatile product, Good for you and tastes great, Turns a boring drink into a delicious refreshment, Customizable to your own taste.',
        ],
        price: '8.5',
    },
    {
        _id: 2,
        title: 'Flor de Jamaica Herbal Tea: A great Way to Boost Your Health - Brew Hot or Cold - high-quality source for Hibiscus Tea - 8oz',
        image: product2,
        desc: [
            'Savor the taste of Mexico with every sip of Dried Hibiscus Jamaica, Imported from Mexico and used in a popular Mexican drink, agua de Jamaica. Packed with antioxidants to help you stay healthy and vibrant. Served over ice with sweetener, lime, and fresh herbs for a refreshing beverage.',
            'You can make delicious beverages in a matter of seconds without having to clean up any mess. These drinks are also superfood-based, low in calories, portable, and handy.',
            'Flavorful and healthy beverage alternative, Can be used to make many different kinds of drinks, Very versatile product, Good for you and tastes great, Turns a boring drink into a delicious refreshment, Customizable to your own taste.',
        ],
        price: '8.5',
    },
    {
        _id: 3,
        title: 'Flor de Jamaica Herbal Tea: A great Way to Boost Your Health - Brew Hot or Cold - high-quality source for Hibiscus Tea - 8oz',
        image: product3,
        desc: [
            'Savor the taste of Mexico with every sip of Dried Hibiscus Jamaica, Imported from Mexico and used in a popular Mexican drink, agua de Jamaica. Packed with antioxidants to help you stay healthy and vibrant. Served over ice with sweetener, lime, and fresh herbs for a refreshing beverage.',
            'You can make delicious beverages in a matter of seconds without having to clean up any mess. These drinks are also superfood-based, low in calories, portable, and handy.',
            'Flavorful and healthy beverage alternative, Can be used to make many different kinds of drinks, Very versatile product, Good for you and tastes great, Turns a boring drink into a delicious refreshment, Customizable to your own taste.',
        ],
        price: '8.5',
    },
    {
        _id: 4,
        title: 'Flor de Jamaica Herbal Tea: A great Way to Boost Your Health - Brew Hot or Cold - high-quality source for Hibiscus Tea - 8oz',
        image: product4,
        desc: [
            'Savor the taste of Mexico with every sip of Dried Hibiscus Jamaica, Imported from Mexico and used in a popular Mexican drink, agua de Jamaica. Packed with antioxidants to help you stay healthy and vibrant. Served over ice with sweetener, lime, and fresh herbs for a refreshing beverage.',
            'You can make delicious beverages in a matter of seconds without having to clean up any mess. These drinks are also superfood-based, low in calories, portable, and handy.',
            'Flavorful and healthy beverage alternative, Can be used to make many different kinds of drinks, Very versatile product, Good for you and tastes great, Turns a boring drink into a delicious refreshment, Customizable to your own taste.',
        ],
        price: '8.5',
    },
    {
        _id: 5,
        title: 'Flor de Jamaica Herbal Tea: A great Way to Boost Your Health - Brew Hot or Cold - high-quality source for Hibiscus Tea - 8oz',
        image: product1,
        desc: [
            'Savor the taste of Mexico with every sip of Dried Hibiscus Jamaica, Imported from Mexico and used in a popular Mexican drink, agua de Jamaica. Packed with antioxidants to help you stay healthy and vibrant. Served over ice with sweetener, lime, and fresh herbs for a refreshing beverage.',
            'You can make delicious beverages in a matter of seconds without having to clean up any mess. These drinks are also superfood-based, low in calories, portable, and handy.',
            'Flavorful and healthy beverage alternative, Can be used to make many different kinds of drinks, Very versatile product, Good for you and tastes great, Turns a boring drink into a delicious refreshment, Customizable to your own taste.',
        ],
        price: '8.5',
    },
    {
        _id: 6,
        title: 'Flor de Jamaica Herbal Tea: A great Way to Boost Your Health - Brew Hot or Cold - high-quality source for Hibiscus Tea - 8oz',
        image: product2,
        desc: [
            'Savor the taste of Mexico with every sip of Dried Hibiscus Jamaica, Imported from Mexico and used in a popular Mexican drink, agua de Jamaica. Packed with antioxidants to help you stay healthy and vibrant. Served over ice with sweetener, lime, and fresh herbs for a refreshing beverage.',
            'You can make delicious beverages in a matter of seconds without having to clean up any mess. These drinks are also superfood-based, low in calories, portable, and handy.',
            'Flavorful and healthy beverage alternative, Can be used to make many different kinds of drinks, Very versatile product, Good for you and tastes great, Turns a boring drink into a delicious refreshment, Customizable to your own taste.',
        ],
        price: '8.5',
    },
    {
        _id: 7,
        title: 'Flor de Jamaica Herbal Tea: A great Way to Boost Your Health - Brew Hot or Cold - high-quality source for Hibiscus Tea - 8oz',
        image: product4,
        desc: [
            'Savor the taste of Mexico with every sip of Dried Hibiscus Jamaica, Imported from Mexico and used in a popular Mexican drink, agua de Jamaica. Packed with antioxidants to help you stay healthy and vibrant. Served over ice with sweetener, lime, and fresh herbs for a refreshing beverage.',
            'You can make delicious beverages in a matter of seconds without having to clean up any mess. These drinks are also superfood-based, low in calories, portable, and handy.',
            'Flavorful and healthy beverage alternative, Can be used to make many different kinds of drinks, Very versatile product, Good for you and tastes great, Turns a boring drink into a delicious refreshment, Customizable to your own taste.',
        ],
        price: '8.5',
    },
];

export default function Home() {
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
                <Products products={products} />
                <TopratedProducts products={products} />
                <Testimonial />
                <BlogComponent />
            </main>
        </div>
    );
}
