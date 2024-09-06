import styles from "../../../styles/mapEvents.module.css"
export default function Place({ img, name, location, type }) {
    return (
        <div className={styles.outer}>
            <img className={styles.image} src={img} />
            <div className={styles.info2}>
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
            </div>
        </div>
    );
}