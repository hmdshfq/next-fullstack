import React from 'react';
import styles from './Footer.module.scss';
import Image from 'next/image';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>&copy; 2023 WebDev Blogs</div>
      <div className={styles.social}>
        <Image src="/1.png" alt="Facebook" width={15} height={15}/>
        <Image src="/2.png" alt="Instagram" width={15} height={15}/>
        <Image src="/3.png" alt="Twitter" width={15} height={15}/>
        <Image src="/4.png" alt="YouTube" width={15} height={15}/>
      </div>
    </footer>
  );
}

export default Footer;
