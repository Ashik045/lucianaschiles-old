import Head from 'next/head';
import BlogComponent from '../components/BlogComponent/BlogComponent';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import Newsletter from '../components/Newsletter/Newsletter';
import Products from '../components/Products/Products';
import Testimonial from '../components/Testimonial/Testimonial';
import TopratedProducts from '../components/TopratedProducts/TopratedProducts';


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

// fetch all the necessary items
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