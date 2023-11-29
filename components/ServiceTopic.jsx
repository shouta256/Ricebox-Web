import { Merits } from "components/Merits";
import styles from "components/ServiceTopic.module.css";
import { Topic } from "components/Topic";
import { useInView } from 'react-intersection-observer';

export const ServiceTopic = (props) => {
  const [ref, inView] = useInView({
    rootMargin: '-100px',
    triggerOnce: true,
  });
  return (
    <div ref={ref} className={`${styles.fadeIn} ${inView ? styles.visible : ''}`}>

    <div className={styles.body}>
      <h2 className={styles.title}>{props.title}</h2>
      <p className={styles.description}>{props.description}</p>

      {props.imageName && (
        <img className={styles.image} src={props.imageName} alt={props.title} />
      )}

      <div className={styles.merits}>
        {Array.isArray(props.merits) &&
          props.merits.map((merit, index) => (
            <Merits
              key={index}
              imageName={merit.imageName}
              description={merit.description}
            />
          ))}
      </div>
    </div>
    </div>
  );
};
