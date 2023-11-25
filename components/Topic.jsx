import styles from "components/Topic.module.css";
import Link from "next/link";

export const Topic = (props) => {
  return (
    <div className={styles.body}>
      {props.page ? (
        <Link href={props.page}>
          <div className={styles.imageContainer}>
            <img
              className={styles.image}
              src={props.imageName}
              alt={props.title}
            />
          </div>
          <h2 className={styles.title}>{props.title}</h2>
          <p className={styles.description}>{props.description}</p>
        </Link>
      ) : (
        <>
          <div className={styles.imageContainer}>
            <img
              className={styles.image}
              src={props.imageName}
              alt={props.title}
            />
          </div>
          <h2 className={styles.title}>{props.title}</h2>
          <p className={styles.description}>{props.description}</p>
        </>
      )}
    </div>
  );
};
