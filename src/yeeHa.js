
export function yee_ha(n = 0) {
    let sResult = "";

    if (n % 3 === 0 && n % 7 === 0) {
        sResult = "Yee Ha";
    } else if (n % 3 === 0) {
        sResult = "Yee";
    } else if (n % 7 === 0) {
        sResult = "Ha";
    } else {
        sResult = "Nada";
    }

    return sResult;
}

// console test
if (import.meta.main) {
    console.log(`3 → ${yee_ha(3)}`);   // Yee
    console.log(`7 → ${yee_ha(7)}`);   // Ha
    console.log(`21 → ${yee_ha(21)}`); // Yee Ha
    console.log(`2 → ${yee_ha(2)}`);   // Nada
}
