import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import styles from './newsletter.module.scss';

function Newsletter() {
    return (
        <div className={styles.newsletter}>
            <SectionHeader title="NEWSLETTER" />
            <div className={styles.newsletter_main}>
                <h2>newsletter</h2>
            </div>
        </div>
    );
}

export default Newsletter;
