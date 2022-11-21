import React from 'react';
import styles from './sectionheader.module.scss';

function SectionHeader({ title }) {
    return (
        <div className={styles.section_header}>
            <h1>{title}</h1>
        </div>
    );
}

export default SectionHeader;
