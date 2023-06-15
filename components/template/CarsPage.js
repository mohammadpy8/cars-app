import Card from "../module/Card";
import styles from "./carsPage.module.css";

const CarsPage = ({ data }) => {
    
    return (
        <div className={styles.container}>
            {
                data.map((car) => (
                    <Card key={car.id} {...car} />
                ))
            }
        </div>
    );
};

export default CarsPage;