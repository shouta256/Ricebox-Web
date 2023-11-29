import styles from "components/Merits.module.css"

export const Merits = (props) => {
    return(
        <div className={styles.body}>
         <div className={styles.imageContainer}>
           <img
            className={styles.image}
            src={props.imageName}
            />
        </div>
        <p className={styles.description}>{props.description}</p>
     </div>
    );   
}