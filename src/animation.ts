
export function animateFeature(feature: string, style: "bold" | "italic") {
    if (style === "bold") {
        console.log(`\x1b[1m${feature}\x1b[0m`);
    } else if (style === "italic") {
        console.log(`\x1b[3m${feature}\x1b[0m`);
    } else {
        console.log(feature);
    }
}
