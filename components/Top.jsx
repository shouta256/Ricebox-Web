import styles from "components/Top.module.css";

export const Top = () => {
  return (
    <div className={styles.body}>
      <h1 className={styles.message}>
        すべての人に無駄なく
        <br />
        より安く、より良い
        <br /> 商品を届ける
      </h1>
    </div>
  );
};
