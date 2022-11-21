import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import styles from './blogcomponent.module.scss';

function BlogComponent() {
    return (
        <div className={styles.blog_component}>
            <SectionHeader title="BLOGS" />
            <div className={styles.blog_component_main}>
                <p>blogs</p>
            </div>
        </div>
    );
}

export default BlogComponent;
