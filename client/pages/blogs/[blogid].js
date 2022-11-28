import Image from 'next/image'
import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import styles from '../../styles/blogdetail.module.scss'

const blogDetails = ({blog}) => {
  return (
    <div className={styles.blog_details}>
    <Navbar />
        <div className={styles.blog_details_main}>
        <h1>{blog.title}</h1>
        <div className={styles.blog_details_imgs}>
            <Image src={blog.image} className={styles.blog_details_img}  height={600} width={1200}   layout='responsive' />
        </div>

        <div className={styles.blog_details_text}>
            {blog.desc.map((des, i) => {
                return <p key={i}>{des}</p>
            })}
        </div>
        </div>
    <Footer />
    </div>
  )
}

export default blogDetails

export async function getStaticPaths() {
    const res = await fetch('http://localhost:4000/api/blogs/all')
  
    const data = await res.json();
    const blogs = data.message;

    const paths = blogs.map((items) => ({
        params: {
            blogid: items._id
        }
    }));
    
    return {
        paths,
        fallback: false,
    }
  }  

export async function getStaticProps(context) {
    const {params} = context;

    const res = await fetch(`http://localhost:4000/api/blogs/${params.blogid}`)
  
    const data = await res.json();
  
    const blog = data.message;
    return {
      props: {
        blog: blog || null,
      },
    }
}