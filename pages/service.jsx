import { Header } from "components/Header";
import { Footer } from "components/Footer";
import Head from "next/head";
import { Top } from "components/Top";
import { ServiceTopic } from "components/ServiceTopic";

const merits = [
  {
    title: "安価な商品",
    imageName: "merit1.png",
    description:
      "消費期限が近い食材を使うため材料費を抑え、安価な商品を提供",
  },
  {
    title: "売れ残っている商品の販売促進",
    imageName: "merit2.png",
    description:
      "Riceboxアプリによってお店で売れ残っている商品の販売を促進。食品廃棄量の削減",
  },
  {
    title: "マイボックス制度",
    imageName: "merit3.png",
    description:
      "お客さんがマイボックスを持参することで容器のゴミを削減",
  },
];

export default function Service() {
    const Pharase = "What is Ricebox?";

  return (
    <>
      <Head>
        <title>Service</title>
        <meta name="description" content="廃棄される食品を生まれ変える" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      <Top title={Pharase} />
      <ServiceTopic
        title={"メインアイデア"}
        description={
          "Riceboxは業者からその日消費期限が切れる食材を仕入れて、その日のうちに調理してデリバリーとテイクアウトで提供する"
        }
        imageName={"mainIdea.png"}
      />
      <ServiceTopic
        title={"アプリとの融合"}
        description={
          "Riceboxアプリによってコンビニやスーパーで売れ残っている商品をアプリ内に掲載し消費者に購入を促進する "
        }
        imageName={"apps.png"}
      />
      <ServiceTopic title={"マイボックス制度"} imageName={"mybox.png"} />
      <ServiceTopic
        title={"関係性"}
        imageName={"relation.png"}
          />
      <ServiceTopic title={"Riceboxのメリット"} merits={merits} />
      <Footer />
    </>
  );
}
