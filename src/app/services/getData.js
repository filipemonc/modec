export default async function getData() {
    const res = await fetch("/api/results");
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}
