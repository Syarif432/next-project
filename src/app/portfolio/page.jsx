import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

export const metadata = {
  title: "Portfolio",
  description: "A Blog web made by Syarif",
};

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        <Link className={styles.item} href="/portfolio/illustrations">
          <span className={styles.title}>Illustrations</span>
        </Link>
        <Link className={styles.item} href="/portfolio/websites">
          <span className={styles.title}>Websites</span>
        </Link>
        <Link className={styles.item} href="/portfolio/applications">
          <span className={styles.title}>Applications</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
