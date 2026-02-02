
export function mowingTime(nWidth = 0, nLength = 0, nRate = 1) {
    // processing
    let nArea = nWidth * nLength;  // area in square metres
    let nMinutes = nArea / nRate;  // minutes to mow

    // output
    return nMinutes;
}

// simple console test (like hello.js)
if (import.meta.main) {
    console.log(`5m x 10m lawn at 2 m²/min = ${mowingTime(5,10,2)} minutes`);
    console.log(`8m x 12m lawn at 3 m²/min = ${mowingTime(8,12,3)} minutes`);
    console.log(`15m x 20m lawn at 5 m²/min = ${mowingTime(15,20,5)} minutes`);
}
