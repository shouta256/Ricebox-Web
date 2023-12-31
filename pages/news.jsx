import { Header } from "components/Header";
import styles from "styles/News.module.css";
import { Footer } from "components/Footer";
import Head from "next/head";
import { Top } from "components/Top";
import { NewsContent } from "components/NewsContent";
import Link from "next/link";

export default function Home() {
  const Pharase = "News";

  return (
    <>
      <Head>
        <title>News</title>
        <meta name="description" content="Riceboxはたくさんの賞を受賞させていただきました" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      <Top title={Pharase} />
      <div className={styles.block}>
        <div className={styles.newsContainar}>
          <NewsContent
            imgName={"News1.jpeg"}
            description={
              "全国高校生ビジネスアイディアコンテスト 2021で優秀賞を受賞したことから\n仙台高専校長より賞状伝達をして\nいただきました。"
            }
          />
          <Link href={"https://www.sendai-nct.ac.jp/s20220610/"}>
            <p className={styles.schoolLink}>仙台高専ページ</p>
          </Link>
        </div>

        <div className={styles.newsContainar}>
          <NewsContent
            imgName={"News2.JPG"}
            description={
              "第10回「創造力、無限大∞高校生ビジネスプラン・グランプリ」でベスト100に選出されたことから日本政策金融公庫の兵藤仙台支店長による表彰式を行っていただきました。"
            }
          />
          <Link href={"https://www.sendai-nct.ac.jp/s20221226-2/"}>
            <p className={styles.schoolLink}>仙台高専ページ</p>
          </Link>
        </div>
      </div>
      <div className={styles.block}>
        <div className={styles.newsContainar}>
          <NewsContent
            imgName={"News3.JPEG"}
            description={
              "日本政策金融公庫が開催した東北地区発表会に参加させていただきました"
            }
          />
        </div>

        <div className={styles.newsContainar}>
          <NewsContent
            imgName={"News4.JPG"}
            description={
              "これまでのRiceboxの活動を評価していただき、仙台高専から校長賞を授与していただきました。"
            }
          />
        </div>
      </div>

      <Footer />
    </>
  );
}
