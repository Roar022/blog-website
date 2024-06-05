import Image from "next/image";
import React from "react";
import styles from "./about.module.css";
const About = () => {
  return (
    <div className="flex gap-10">
      <div className="flex-1 flex flex-col gap-5">
        <h2 className="font-bold text-xl text-blue-700">About Agency</h2>
        <h1 className="text-4xl font-bold">We create digital ideas</h1>
        <p className="text-base font-light">
          nejkvev v ejrkv jdnjk dj dvjkd vjd vjdvjdvd dfbd f fd fd fjdf
          dfbdhfbhdf dhfbdjfsn e
        </p>
        <div className="flex items-center justify-between">
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className="flex-1 relative">
        <Image
          src="/about.png"
          className="object-contain"
          alt="about"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default About;
