import { Header } from "components/Header";
import { Footer } from "components/Footer";
import Head from "next/head";
import { Top } from "components/Top";
import { AboutTopic } from "components/AboutTopic";

const topicsData = [
  {
    index: 1,
    imageName: "meeting.jpeg",
    title: "成り立ち",
    description:
      "2021年、タイからの留学生であるプロトンが\nビジネスコンテストに参加するために、\n鈴木翔太と同じくタイからの留学生のパイを誘い、\nRiceboxが発足した。",
  },
  {
    index: 2,
    imageName: "logo.jpg",
    title: "事業内容",
    description:
      "地域のスーパーマーケット、コンビニ、農家と提携を組み、\n売れ残った食品、食材、店頭に出せない青果物を\n格安で仕入れ、調理し他店のレストランより\n安価な価格で販売する。\n詳しくはこちら",
  },
  {
    index: 3,
    imageName: "award.jpg",
    title: "業績",
    description:
      "桜美林大学主催の全国高校生ビジネスアイデアコンテスト2021で優秀賞を受賞。翌年、日本制作金融公庫が主催する第10回「創造力、無限大∞高校生ビジネスプラン・グランプリ」で約5000件の応募の中で「ベスト100」に選出。同年、仙台高等専門学校で校長賞を受賞。",
  },
];

export default function About() {
  const phrase = "Less Waste Less Price";
  const description = "日本では1年間に約2千万トンもの食品が廃棄されている。一方、大学生や高齢者など、お金や時間がなく栄養価の高い食品を食べられない人たちもいる。そしてもう一つ世界で問題になっているのがプラスチック問題。国連よれば、現在少なくとも51兆ものマイクロプラスチックが海に存在していることが報道されている。Riceboxはフードロス・プラスチック問題・高齢化社会・食の貧困を改善することを目的としている。"
  
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="Less Waste Less Price" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <Top title={phrase} description={description} />
      {topicsData.map((topic) => (
        <AboutTopic
          key={topic.index}
          index={topic.index}
          imageName={topic.imageName}
          title={topic.title}
          description={topic.description}
        />
      ))}
      
      <Footer />
    </>
  );
}
