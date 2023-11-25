import { Header } from "components/Header";
import styles from "styles/Home.module.css";
import { Footer } from "components/Footer";
import Head from "next/head";
import { Top } from "components/Top";
import { Topic } from "components/Topic";
import { News } from "components/News";
import Link from "next/link";

export default function Home() {
  const Pharase = "すべての人に無駄なく\nより安く、より良い\n商品を届ける";
  const aboutDescription = "Riceboxの成り立ち、\n事業内容、業績を紹介";
  const serviceDescription = "Riceboxのサービスに\nついて詳しく紹介";

  return (
    <>
      <Head>
        <title>Ricebox</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Top title={Pharase} />
      <div className={styles.topics}>
        <Topic
          page={"/about"}
          imageName={"logo.jpg"}
          title={"About"}
          description={aboutDescription}
        />

        <Topic
          page={"/service"}
          imageName={"logo.jpg"}
          title={"Service"}
          description={serviceDescription}
        />
      </div>
      <Link href={"/news"}>
        <News />
      </Link>
      <Footer />
    </>
  );
}
