import styles from "./layout.module.css";
import Link from "next/link";

const Layout = ({children}) => {
    return (
        <>
            <header className={styles.header}>
                <Link href="/">
                    <h2>Shop Cars</h2>
                    <p>choose an buy your car</p>
                </Link>
            </header>
            <div className={styles.container}>
                {children}
            </div>
            <footer className={styles.footer}>
                Shop Cars | Project By NextJs &copy;
            </footer>
        </>
    );
};

export default Layout;