import styles from "components/ServiceTopic.module.css";
import { Topic } from "components/Topic";

export const ServiceTopic = (props) => {
  return (
    <div className={styles.body}>
      <h2 className={styles.title}>{props.title}</h2>
      <p className={styles.description}>{props.description}</p>

      {props.imageName && (
        <img className={styles.image} src={props.imageName} alt={props.title} />
      )}

      <div className={styles.merits}>
        {Array.isArray(props.merits) &&
          props.merits.map((merit, index) => (
            <Topic
              key={index}
              imageName={merit.imageName}
              description={merit.description}
            />
          ))}
      </div>
    </div>
  );
};
