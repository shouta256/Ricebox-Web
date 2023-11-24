// pages/index.js

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "components/News.module.css"; // 作成した styles.css ファイルをインポート

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const News = (props) => {
  return (
    <div className={styles.body}>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        sliderClass={styles.slider}
        containerClass={styles.container}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass={styles.newsItem}
      >
        <div className={styles.newsContainer}>
          <img className={styles.news} src="logo.jpg" alt="News Image" />
        </div>
        <div className={styles.newsContainer}>
          <img className={styles.news} src="logo.jpg" alt="News Image" />
        </div>
        <div className={styles.newsContainer}>
          <img className={styles.news} src="logo.jpg" alt="News Image" />
        </div>
        <div className={styles.newsContainer}>
          <img className={styles.news} src="logo.jpg" alt="News Image" />
        </div>
        <div className={styles.newsContainer}>
          <img className={styles.news} src="logo.jpg" alt="News Image" />
        </div>
      </Carousel>
    </div>
  );
};
