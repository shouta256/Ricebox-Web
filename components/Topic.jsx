import styles from "components/Topic.module.css";
import Link from "next/link";

export const Topic = () => {
  return (
    <div className={styles.body}>
      <Link href="/about">
        <img className={styles.image} src="logo.jpg"></img>
        <h2 className={styles.title}>About</h2>
        <p className={styles.description}>aaaaaaaaaa</p>
      </Link>
    </div>
  );
};
