import Image from "next/image";
import styles from "./language.module.css";

export default function Language() {
    return (
        <div className={styles.container}>
            <Image
                src="/img/usa-flag.jpeg"
                alt="EN"
                width={30}
                height={30}
                priority
            />
            <select value="en" readOnly={true}>
                <option disabled>Language</option>
                <option value="en">English</option>
            </select>
        </div>
    );
}
