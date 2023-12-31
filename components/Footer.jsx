import styles from "components/Footer.module.css";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.main}>
        <img className={styles.logo} src="textLogo.PNG" alt="logo"></img>
        <div className={styles.links}>
          <Link className={styles.link} href="./about">
            About
          </Link>

          <Link className={styles.link} href="./service">
            Service
          </Link>
          <Link className={styles.link} href="./news">
            News
          </Link>
        </div>
      </div>

      <p className={styles.copyRight}>Copyright@Ricebox</p>
    </div>
  );
};
