import Link from "next/link";
import styles from "../../styles/Navbar.module.css"
export default function NavBar() {
  return (
    <div className={styles.outer}>
      <div className={styles.name}>DarkSkyTourism</div>
      <div className={styles.navLinks}>
        <Link href="/"><div className={styles.navLink}>Home</div></Link>
        <Link href="/map?type=places"><div className={styles.navLink}>Places</div></Link>
        <Link href="/map?type=events"><div className={styles.navLink}>Events</div></Link>
        <div className={styles.navLink}>Blogs</div>
        <div className={styles.navLink}>Contacts</div>
      </div>
    </div>
  );
}