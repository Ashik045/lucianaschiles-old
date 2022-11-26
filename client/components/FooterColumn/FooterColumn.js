import Link from 'next/link'
import React from 'react'
import styles from './footercolumn.module.scss'

const FooterColumn = ({ FooterDetail, title }) => {
  return (
    <div className={styles.footer_col}>
            <h3>{title}</h3>
            {FooterDetail.map((items) => (
                <Link href={items.link}>
                    <p key={items.id}>{items.text}</p>
                </Link>
            ))}
    </div>
  )
}

export default FooterColumn