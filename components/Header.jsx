import styles from "components/Header.module.css";
import Link from "next/link";

export const Header = () => {
  return (
    <div>
      <header className={styles.Header}>
        <Link href="/">
          <img className={styles.logo} src="textLogo.PNG" alt="Logo" />
        </Link>
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
      </header>
    </div>
  );
};
