import { useState } from "react";
import styles from "./searchBar.module.css";
import { useRouter } from "next/router";

const SearchBar = () => {

    const [min, setMin] = useState("");
    const [max, setMax] = useState("");

    const router = useRouter();

    const searchHandler = () => {

        if (min && max) {

            router.push(`/filter/${min}/${max}`);
            
        } else {
            alert("please inter your price")
        }
    };

    return (
        <div className={styles.container}>
            <div>
                <input
                    placeholder="inter min-price"
                    value={min}
                    onChange={e => setMin(e.target.value)}
                />
                <input
                    placeholder="inter max-price"
                    value={max}
                    onChange={e => setMax(e.target.value)}
                />
            </div>
            <button onClick={searchHandler}>Search</button>
        </div>
    );
};

export default SearchBar;