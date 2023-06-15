import styles from "./allButton.module.css";
import Link from "next/link";

const AllButton = () => {
    return (
        <div className={styles.container}>
          <Link href="/cars">See all cars</Link>
        </div>
      );
};

export default AllButton;