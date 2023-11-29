import styles from "components/NewsContent.module.css";

export const NewsContent = (props) => {
  return (
    <div className={styles.body}>
      <img className={styles.image} src={props.imgName} alt="News Image"></img>
      <p className={styles.description}>{props.description}</p>
    </div>
  );
};
