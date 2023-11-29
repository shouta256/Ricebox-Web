// pages/index.js

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "components/News.module.css"; // 作成した styles.css ファイルをインポート
import { NewsContent } from "components/NewsContent";

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

const newsData = [
  {
    imgName: "News1.jpeg",
    description:
      "全国高校生ビジネスアイディアコンテスト 2021で優秀賞を受賞したことから仙台高専校長より賞状伝達をして いただきました",
  },
  {
    imgName: "News2.JPG",
    description:
      "第10回「創造力、無限大∞高校生ビジネスプラン・グランプリ」でベスト100に選出されたことから日本政策金融公庫の兵藤仙台支店長による表彰式を行っていただきました 仙台高専ページ",
  },
  {
    imgName: "News3.JPEG",
    description:
      "日本政策金融公庫が開催した東北地区発表会に参加させていただきました",
  },
  {
    imgName: "News4.JPG",
    description:
      "これまでのRiceboxの活動を評価していただき、仙台高専から校長賞を授与していただきました。",
  },
];

export const News = (props) => {
  return (
    <div className={styles.body}>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={1000}
        sliderClass={styles.slider}
        containerClass={styles.container}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass={styles.newsItem}
      >
        {newsData.map((news, index) => (
          <NewsContent
            key={index}
            imgName={news.imgName}
            description={news.description}
          />
        ))}
      </Carousel>
    </div>
  );
};
