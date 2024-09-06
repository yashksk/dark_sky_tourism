"use client"
import styles from "../styles/Home.module.css"
import ExpCard from "./components/expCard";
import NavBar from "./components/navbar";
import PlaceCard from "./components/placeCard";
import TypeCard from "./components/typeCard";
import Link from 'next/link'
export default function Home() {
  return (
    <div>
      <img className={styles.main_image} src="/Images/main_bg.png" />
      <img className={styles.main_cover} src="/Images/main_cover.svg" />
      <NavBar />
      <div className={styles.section1}>
        <div className={styles.sec1_title}>For Earth</div>
        <div className={styles.sec1_body}>We at DarkSkyTourism are here to provide you with best experience of Space Exploration while you enjoy you visit.</div>
      </div>
      <div className={styles.division}></div>
      <div className={styles.section2}>
        <div className={styles.sec2_title}>What do you need to find?</div>
        <div className={styles.sec2_body}>Our best destinations sorted by category</div>
        <div className={styles.types}>
          <Link href="/map?type=observatories"><TypeCard img="/Images/observatory.jpg" type="Observatories and Planeteriums" /></Link>
          <Link href="/map?type=hotels"><TypeCard img="/Images/hotels.png" type="Hotels and Lodges" /></Link>
          <Link href="/map?type=sites"><TypeCard img="/Images/stargazing.png" type="Stargazing Sites" /></Link>
          <Link href="/map?type=nature"><TypeCard img="/Images/nature.jpg" type="Nature and National Parks" /></Link>
          <Link href="/map?type=heritage"><TypeCard img="/Images/heritage.png" type="Heritage Sites" /></Link>
        </div>
      </div>
      <div className={styles.section3}>
        <div className={styles.sec3_title}>The Most Beautiful and Dark Skies</div>
        <div className={styles.sec3_body}>Our best destinations sorted by States</div>
        <div className={styles.places}>
          <PlaceCard img="/Images/placeCardDummy.svg" name="Shivang's Villa" location="Delhi" type="Hotels and Lodges" />
          <PlaceCard img="/Images/placeCardDummy.svg" name="Shivang's Villa" location="Delhi" type="Hotels and Lodges" />
          <PlaceCard img="/Images/placeCardDummy.svg" name="Shivang's Villa" location="Delhi" type="Hotels and Lodges" />
          <PlaceCard img="/Images/placeCardDummy.svg" name="Shivang's Villa" location="Delhi" type="Hotels and Lodges" />
        </div>
        <Link href="/map?type=hotels"><div className={styles.explore}>Explore All</div></Link>
      </div>
      <div className={styles.section4}>
        <img className={styles.sec4_img} src="/Images/experience.svg" />
        <div className={styles.sec4_content}>
          <div className={styles.discover}>
            <div className={styles.discover_title}>Discover Experiences</div>
            <div className={styles.discover_body}>Start exploring events and travels under the darkest and starry skies!</div>
            <Link href="/map?type=events"><div className={styles.explore2}>Explore All</div></Link>
          </div>
          <ExpCard img="/Images/placeCardDummy.svg" name="Shivang's Villa" location="Delhi" type="Hotels and Lodges" dateStart="03.05.2024" dateEnd="16.05.2024" />
          <ExpCard img="/Images/placeCardDummy.svg" name="Shivang's Villa" location="Delhi" type="Hotels and Lodges" dateStart="03.05.2024" dateEnd="16.05.2024" />
        </div>
      </div>
      <div className={styles.section5}>

      </div>
    </div>
  );
}
