export function dateConvert(isoDate) {
    const date = new Date(isoDate);

    const month = date.toLocaleDateString("en-US", { month: "long" });
    const day = date.getDate();
    const year = date.getFullYear();

    return `${month} ${day}, ${year}`;
}