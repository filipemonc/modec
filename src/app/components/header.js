import Image from "next/image";
import styles from "./header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <div>
                <Image
                    src="/img/logo.png"
                    alt="MODEC"
                    width={150}
                    height={35}
                    priority
                />
            </div>
            <h1 className={styles.title}>Employee Search</h1>
            <div>Welcome, Fulano!</div>
        </header>
    );
}