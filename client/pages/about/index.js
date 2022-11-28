import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import styles from '../../styles/aboutuspage.module.scss'

const index = () => {
  return (
    <div className={styles.aboutus_page}>
        <Navbar />
            <div className={styles.aboutus_page_main}>
                <h2>About us page(updating)</h2>
            </div>
        <Footer />
    </div>
  )
}

export default index