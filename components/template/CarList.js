import Back from "../icons/Back";
import Card from "../module/Card";
import styles from "./carList.module.css";
import { useRouter } from "next/router";

const CarList = ({ data }) => {
    
    const router = useRouter();

    const backHandler = () => {

        router.back();
    }

    return (
        <div className={styles.container}>
            <div className={styles.back} onClick={backHandler}>
                <Back />
                <p>Back</p>
            </div>
            <div className={styles.cards}>
                {
                    data.map(car => <Card key={car.id} {...car} />)
                }
            </div>
        </div>
    );
};

export default CarList;