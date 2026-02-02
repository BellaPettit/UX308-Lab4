
export function sqftToAcres(nSquareFeet = 0) {
    // processing
    const SQFT_PER_ACRE = 43560;
    let nAcres = nSquareFeet / SQFT_PER_ACRE;

    // output
    return nAcres;
}

if (import.meta.main) {
    console.log(`sqftToAcres(43560) returns "${sqftToAcres(43560)}"`);
    console.log(`sqftToAcres(87120) returns "${sqftToAcres(87120)}"`);
    console.log(`sqftToAcres(21780) returns "${sqftToAcres(21780)}"`);
}


