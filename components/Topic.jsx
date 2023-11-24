import styles from "components/Topic.module.css";
import Link from "next/link";

export const Topic = (props) => {
  return (
    <div className={styles.body}>
      <Link href="/about">
        <img className={styles.image} src="logo.jpg"></img>
        <h2 className={styles.title}>{props.title}</h2>
        <p className={styles.description}>{props.description}</p>
      </Link>
    </div>
  );
};
