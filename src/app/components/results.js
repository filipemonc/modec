"use client";

import React, { useContext } from "react";
import { ResultsContext } from "../page";
import styles from "./results.module.css";

export default function Results() {
    const { filteredResults } = useContext(ResultsContext);

    return (
        <section>
            {filteredResults.length > 0 ? (
                <table className={styles.results}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>E-mail</th>
                            <th>Department</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredResults.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.department}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                ""
            )}
        </section>
    );
}
