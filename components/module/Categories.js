import styles from "./categories.module.css";
import Link from "next/link";
import Sedan from "../icons/Sedan";
import Sport from "../icons/Sport";
import Hatchback from "../icons/Hatchback";
import Suv from "../icons/Suv";
    
const Categories = () => {

    return (
        <div className={styles.container}>
            <Link href="categories/sedan">
                <div>
                    <p>Sedan</p>
                    <Sedan />
                </div>
            </Link>
            <Link href="/categories/suv">
                <div>
                    <p>Suv</p>
                    <Suv />
                </div>
            </Link>
            <Link href="/categories/sport">
                <div>
                    <p>Sport</p>
                    <Sport />
                </div>
            </Link>
            <Link href="/categories/hatchback">
                <div>
                    <p>Hatchback</p>
                    <Hatchback />
                </div>
            </Link>

        </div>
    );
};

export default Categories;