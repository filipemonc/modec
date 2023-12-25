"use client";

import { React, createContext, useState } from "react";
import Filters from "./components/filters";
import Language from "./components/language";
import Results from "./components/results";
import styles from "./page.module.css";

export const ResultsContext = createContext();
const ResultsContextProvider = ({ children }) => {
    const [filteredResults, setFilteredResults] = useState([]);

    return (
        <ResultsContext.Provider
            value={{ filteredResults, setFilteredResults }}
        >
            {children}
        </ResultsContext.Provider>
    );
};
export default async function Home() {
    return (
        <main className={styles.main}>
            <Language />
            <ResultsContextProvider>
                <Filters />
                <Results />
            </ResultsContextProvider>
        </main>
    );
}
