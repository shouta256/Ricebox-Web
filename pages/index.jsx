import { Header } from "components/Header";
import styles from "styles/Home.module.css";
import { Footer } from "components/Footer";
import Head from "next/head";
import { Top } from "components/Top";
import { Topic } from "components/Topic";
import { News } from "components/News";
import Link from "next/link";
import { useState, useEffect } from 'react';


export default function Home() {
  const Pharase = "すべての人に無駄なく\nより安く、より良い\n商品を届ける";
  const aboutDescription = "Riceboxの成り立ち、\n事業内容、業績を紹介";
  const serviceDescription = "Riceboxのサービスに\nついて詳しく紹介";
  const screenHeight = typeof window !== 'undefined' ? window.innerHeight : 0;
  const [isFinish, setisFinish] = useState(false);
  const [isVisible,setIsVisible] = useState(false);

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
        <title>Riceboxとは</title>
        <meta name="description" content="無駄なく、より安く" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script type="module" async src="https://unpkg.com/@splinetool/viewer@0.9.510/build/spline-viewer.js"></script>
      </Head>

      <Header />
      {/* <Top title={Pharase} /> */}

      <div className={styles.blank}></div>

      <div className={styles.space}>
        <div className={isFinish ? styles.cg2 : styles.cg}>
          <spline-viewer  url="https://prod.spline.design/YvhqUW18KupvgdcU/scene.splinecode"></spline-viewer>
          <div className={isVisible ? styles.topicsShow : styles.topics}>
          <Topic
           page={"/about"}
            imageName={"logo.jpg"}
            title={"About"}
            description={aboutDescription}
          />

         <Topic
           page={"/service"}
            imageName={"app.jpg"}
            title={"Service"}
             description={serviceDescription}
         />
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
