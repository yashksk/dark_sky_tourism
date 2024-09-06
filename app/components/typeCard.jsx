import styles from "../../styles/typeCard.module.css"
export default function TypeCard({img,type}){
    return(
        <div className={styles.outer}>
            <img className={styles.image} src={img} />
            <div className={styles.name}>{type}</div>
        </div>
    );
}