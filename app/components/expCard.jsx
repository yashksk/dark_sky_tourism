import styles from "../../styles/expCard.module.css"
export default function ExpCard({ img, name, location, type, dateStart, dateEnd }) {
    return (
        <div className={styles.outer}>
            <img className={styles.image} src={img} />
            <div className={styles.info}>
                <div className={styles.lineTop}>
                    <div className={styles.name}>{name}</div>
                    <div className={styles.like}>
                        <img className={styles.likeImage} src="/Images/like.svg" />
                    </div>
                </div>
                <div className={styles.lineBottom}>
                    <img src="/Images/location.svg" />
                    <div className={styles.location}>{location}, {type}</div>
                </div>
                <div className={styles.date}>{dateStart} - {dateEnd}</div>
            </div>
        </div>
    );
}