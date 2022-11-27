import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Products from '../../components/Products/Products'
import styles from '../../styles/productpage.module.scss'

const index = ({products}) => {
  return (
    <div className={styles.proudct_page}>
      <Navbar />
      {/* <SectionHeader title="ALL PRODUCTS" /> */}
      <Products products={products} title="ALL PRODUCTS" />
      <Footer />
    </div>
  )
}

export default index

export async function getStaticProps() {
  const res = await fetch('https://lucianaschiles-backend.onrender.com/api/products/all')

  const data = await res.json();

  const products = data.message;
  return {
    props: {
      products: products || null,
    },
  }
}  