import styles from "components/Top.module.css";

export const Top = (props) => {
  return (
    <div className={styles.body}>
      <h1 className={styles.message}>{props.title}</h1>
      <p className={styles.description}>{props.description}</p>
    </div>
  );
};
