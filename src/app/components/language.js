import styles from "./language.module.css";

export default function Language() {
    return (
        <div className={styles.container}>
            <img src="/img/usa-flag.jpeg" alt="EN" width={30} height={30} />
            <select value="en" readOnly={true}>
                <option disabled>Language</option>
                <option value="en">English</option>
            </select>
        </div>
    );
}
