import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

export const metadata = {
  title: "About",
  description: "A Blog web made by Syarif",
};

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg"
          alt=""
          fill={true}
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences.
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam vero
            natus doloremque commodi rerum placeat! Esse temporibus et id earum
            porro cupiditate odit molestias odio asperiores? Non facilis quasi
            eaque placeat voluptatem ipsam, vitae facere. Commodi nesciunt
            laborum repellat. Iure omnis maiores nobis corporis vero. Neque vero
            id itaque voluptate.
            <br />
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
            rerum saepe maiores delectus sint minima, minus dolorum pariatur
            veritatis vero voluptatum itaque similique exercitationem veniam
            quia laudantium cum blanditiis sit reiciendis dolores soluta
            consequuntur distinctio non animi.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
            tempore saepe non itaque et dolor? Itaque veritatis eaque deleniti
            distinctio ab est, ex dicta fugiat soluta ratione in nostrum id.
            <br />
            <br />
            - Lorem ipsum dolor sit amet.
            <br />
            <br />- Lorem ipsum dolor sit amet.
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
