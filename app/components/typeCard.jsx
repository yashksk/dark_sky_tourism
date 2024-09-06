import styles from "../../styles/typeCard.module.css"
export default function TypeCard({img,type}){
    return(
        <div className={styles.outer}>
            <div className={styles.image}>{img}</div>
            <div className={styles.name}>{type}</div>
        </div>
    );
}