import NavBar from "@/app/components/navbar";
import styles from "../../../styles/placeDesc.module.css"
export default function PlaceDesc() {
    return (
        <div className={styles.page}>
            <NavBar />
            <div className={styles.outer}>
                <img className={styles.main_image} src="/Images/desc_bg.svg" />
                <div className={styles.title}>
                    <div className={styles.name}>XYZ LIVING SPACE</div>
                    <div className={styles.location}>
                        <img src="/Images/place_location.svg" />
                        Delhi,  Hotel and Lodges
                    </div>
                </div>
            </div>
            <div className={styles.nav}>
                <div>Overview</div>
                <div>Reviews</div>
                <div>Contact</div>
            </div>
        </div>
    );
}