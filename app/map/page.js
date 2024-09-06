"use client"
import NavBar from "../components/navbar";
import styles from "../../styles/Map.module.css"
import { useSearchParams } from 'next/navigation'
import Event from "../components/map/event";
import Place from "../components/map/place";
export default function Map() {
    const searchParams = useSearchParams()
    const type = searchParams.get('type')
    return (
        <div className={styles.page}>
            <NavBar />
            <div className={styles.outer}>
                <div className={styles.list}>
                    <div className={styles.filter}>
                        <div className={styles.categ}>Filters</div>
                        <div className={styles.categ}>Categories</div>
                    </div>
                    <div className={styles.listTop}>
                        <div className={styles.place}>Delhi</div>
                        <div>no. results</div>
                    </div>
                    {type=="events"&&(<div className={styles.eventlist}>
                        <Event img="/Images/placeCardDummy.svg" name="Shivang's Villa" location="Delhi" type="Hotels and Lodges" dateStart="03.05.2024" dateEnd="16.05.2024"/>
                        <Event img="/Images/placeCardDummy.svg" name="Shivang's Villa" location="Delhi" type="Hotels and Lodges" dateStart="03.05.2024" dateEnd="16.05.2024"/>
                        <Event img="/Images/placeCardDummy.svg" name="Shivang's Villa" location="Delhi" type="Hotels and Lodges" dateStart="03.05.2024" dateEnd="16.05.2024"/>
                        <Event img="/Images/placeCardDummy.svg" name="Shivang's Villa" location="Delhi" type="Hotels and Lodges" dateStart="03.05.2024" dateEnd="16.05.2024"/>
                        <Event img="/Images/placeCardDummy.svg" name="Shivang's Villa" location="Delhi" type="Hotels and Lodges" dateStart="03.05.2024" dateEnd="16.05.2024"/>
                    </div>)}
                    {type!="events"&&(<div className={styles.eventlist}>
                        <Place img="/Images/placeCardDummy.svg" name="Shivang's Villa" location="Delhi" type="Hotels and Lodges"/>
                        <Place img="/Images/placeCardDummy.svg" name="Shivang's Villa" location="Delhi" type="Hotels and Lodges"/>
                        <Place img="/Images/placeCardDummy.svg" name="Shivang's Villa" location="Delhi" type="Hotels and Lodges"/>
                        <Place img="/Images/placeCardDummy.svg" name="Shivang's Villa" location="Delhi" type="Hotels and Lodges"/>
                        <Place img="/Images/placeCardDummy.svg" name="Shivang's Villa" location="Delhi" type="Hotels and Lodges"/>
                    </div>)}
                </div>
                <div className={styles.map}>
                </div>
            </div>
        </div>
    );
}