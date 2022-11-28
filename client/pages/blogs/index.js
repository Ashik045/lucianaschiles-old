import React from 'react'
import Blog from '../../components/Blog/Blog'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import styles from '../../styles/blogpage.module.scss'

const index = ({blogs}) => {
  return (
    <div className={styles.blog_page}>
        <Navbar />
            <div className={styles.blog_page_main}>
                <SectionHeader title="ALL BLOGS" />
                <div className={styles.blogss}>
                    {blogs.map((blog) => {
                        return <Blog blog={blog} key={blog._id} />
                    })}
                </div>
            </div>
        <Footer />
    </div>
  )
}

export default index

export async function getStaticProps() {
    const res = await fetch('https://lucianaschiles-backend.onrender.com/api/blogs/all')
  
    const data = await res.json();
  
    const blogs = data.message;
    return {
      props: {
        blogs: blogs || null,
      },
    }
}