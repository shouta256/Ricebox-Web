import styles from "components/AboutTopic.module.css";
import { useInView } from 'react-intersection-observer';

export const AboutTopic = (props) => {
  const isEven = props.index % 2 === 0;

  const [ref, inView] = useInView({
    rootMargin: '-100px',
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={`${styles.fadeIn} ${inView ? styles.visible : ''}`}>
      <div className={`${styles.body} ${isEven ? styles.even : styles.odd}`}>
        {isEven ? (
          <>
            <img className={styles.image} src={props.imageName} alt="Image" />
            <div className={styles.text}>
              <h2 className={styles.title}>{props.title}</h2>
              <p className={styles.description}>{props.description}</p>
            </div>
          </>
        ) : (
          <>
            <div className={styles.text}>
              <h2 className={styles.title}>{props.title}</h2>
              <p className={styles.description}>{props.description}</p>
            </div>
            <img className={styles.image} src={props.imageName} alt="Image" />
          </>
        )}
      </div>
    </div>
  );
};
