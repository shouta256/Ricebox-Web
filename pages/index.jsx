import { Header } from "components/Header";
import styles from "styles/Home.module.css";
import { Footer } from "components/Footer";
import Head from "next/head";
import { Topic } from "components/Topic";
import { News } from "components/News";
import Link from "next/link";
import { useState, useEffect } from 'react';


export default function Home() {
  const aboutDescription = "Riceboxの成り立ち、\n事業内容、業績を紹介";
  const serviceDescription = "Riceboxのサービスに\nついて詳しく紹介";
  const [isFinish, setisFinish] = useState(false);
  const [isVisible,setIsVisible] = useState(false);
  const aboutProps = {page: "/about", imageName: "logo.jpg", title: "About", description:aboutDescription};
  const serviceProps = {page: "/service", imageName: "app.jpg", title: "Service", description:serviceDescription};

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the scroll position
      const scrollPosition = window.scrollY;
      // Calculate the threshold for setting isFinish to true
      const threshold = 400;
      // Update isFinish based on the scroll position
      setisFinish(scrollPosition > threshold);

      const threshold2 = 300;
      setIsVisible(scrollPosition > threshold2);
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    
    <>
      <Head>
        <title>Ricebox ライスボックス</title>
        <meta name="description" content="無駄なく、より安く" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script type="module" async src="https://unpkg.com/@splinetool/viewer@0.9.510/build/spline-viewer.js"></script>
      </Head>

      <Header />
      <div className={styles.blank}></div>

      <div className={styles.space}>
        <div className={isFinish ? styles.cg2 : styles.cg}>
          <spline-viewer  url="https://prod.spline.design/YvhqUW18KupvgdcU/scene.splinecode"></spline-viewer>
          <div className={isVisible ? styles.topicsShow : styles.topics}>
          <Topic {...aboutProps}/>

         <Topic {...serviceProps}/>
        </div>
        </div>
      </div>    
     
      <Link href={"/news"}>
        <News />
      </Link>
      <Footer />
    </>
  );
}
