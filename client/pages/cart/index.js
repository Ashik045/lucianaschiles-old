import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import styles from '../../styles/cartpage.module.scss'

const index = () => {
  return (
    <div className={styles.cart_page}>
        <Navbar />
            <div className={styles.cart_page_main}>
                <h2>Add to Cart page(updating)</h2>
            </div>
        <Footer />
    </div>
  )
}

export default index