import styles from "components/NewsContent.module.css";

export const NewsContent = (props) => {
  return (
    <div className={styles.body}>
<<<<<<< HEAD
      <img className={styles.image} src={props.imgName} alt="News Image"></img>
      <p className={styles.description}>{props.description}</p>
=======
        <img
          className={styles.image}
          src={props.imgName}
          alt="News Image"
        ></img>
        <p>{props.description}</p>
>>>>>>> de94dd71d24a04b088b3b7c87b87fe249436a3ea
    </div>
  );
};
