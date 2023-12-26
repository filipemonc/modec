"use client";

import React, { useContext, useState } from "react";
import { ResultsContext } from "../page";
import getData from "../services/getData";
import styles from "./filters.module.css";

export default function Filters() {
    const { setFilteredResults } = useContext(ResultsContext);
    const [formValues, setFormValues] = useState([
        { filterName: "", filterValue: "" },
    ]);

    function sanitizeStr(str) {
        return str
            .toLowerCase()
            .replace(/[àÀáÁâÂãäÄÅåª]+/g, "a")
            .replace(/[èÈéÉêÊëË]+/g, "e")
            .replace(/[ìÌíÍîÎïÏ]+/g, "i")
            .replace(/[òÒóÓôÔõÕöÖº]+/g, "o")
            .replace(/[ùÙúÚûÛüÜ]+/g, "u")
            .replace(/[çÇ]+/g, "c")
            .replace(/[^\w ]+/g, "");
    }

    async function handleFilters(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const nameArr = formData.getAll("filterName");
        const valueArr = formData.getAll("filterValue");
        const results = await getData();
        let filtered = [];
        for (let i = 0; i < results.length; i++) {
            let isAlreadyAdded = false;
            for (let j = 0; j < nameArr.length; j++) {
                if (nameArr[j] === "name") {
                    if (
                        !isAlreadyAdded &&
                        sanitizeStr(results[i].name).match(
                            sanitizeStr(valueArr[j])
                        )
                    ) {
                        filtered = [...filtered, results[i]];
                        isAlreadyAdded = true;
                    }
                }
                if (nameArr[j] === "email") {
                    if (
                        !isAlreadyAdded &&
                        sanitizeStr(results[i].email).match(
                            sanitizeStr(valueArr[j])
                        )
                    ) {
                        filtered = [...filtered, results[i]];
                        isAlreadyAdded = true;
                    }
                }
                if (nameArr[j] === "department") {
                    if (
                        !isAlreadyAdded &&
                        sanitizeStr(results[i].department).match(
                            sanitizeStr(valueArr[j])
                        )
                    ) {
                        filtered = [...filtered, results[i]];
                        isAlreadyAdded = true;
                    }
                }
            }
        }
        setFilteredResults(filtered);
    }

    function clearFilters(event) {
        event.preventDefault();
        setFilteredResults([]);
        setFormValues([{ filterName: "", filterValue: "" }]);
    }

    function handleChange(i, e) {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
    }

    function addFormFields() {
        setFormValues([...formValues, { filterName: "", filterValue: "" }]);
    }

    function removeFormFields(i) {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues);
    }

    return (
        <section>
            <h2 className={styles.title}>Select filters:</h2>
            <form onSubmit={handleFilters}>
                <div className={styles.filterSection}>
                    {formValues.map((element, index) => (
                        <div className={styles.filterLine} key={index}>
                            <select
                                name="filterName"
                                value={element.filterName || ""}
                                onChange={(e) => handleChange(index, e)}
                                required
                            >
                                <option value="" disabled>
                                    Field
                                </option>
                                <option value="name">Name</option>
                                <option value="email">E-mail</option>
                                <option value="department">Department</option>
                            </select>
                            <input
                                type="text"
                                name="filterValue"
                                value={element.filterValue}
                                onChange={(e) => handleChange(index, e)}
                                required
                            ></input>
                            <div className={styles.addRemove}>
                                {index === 0 && formValues.length === 1 ? (
                                    ""
                                ) : (
                                    <button
                                        type="button"
                                        onClick={() => removeFormFields(index)}
                                        className={styles.addRemoveBtn}
                                    >
                                        <img
                                            src="/img/minus-btn.png"
                                            alt="Remove"
                                            width={20}
                                            height={21}
                                            priority
                                        />
                                    </button>
                                )}
                                {index + 1 === formValues.length ? (
                                    <button
                                        type="button"
                                        onClick={addFormFields}
                                        className={styles.addRemoveBtn}
                                    >
                                        <img
                                            src="/img/add-btn.png"
                                            alt="Add"
                                            width={20}
                                            height={21}
                                            priority
                                        />
                                    </button>
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.btnSection}>
                    <button type="submit">Search</button>
                    <button type="button" onClick={clearFilters}>
                        Clear
                    </button>
                </div>
            </form>
        </section>
    );
}
