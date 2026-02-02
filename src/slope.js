
export function slope(x1 = 0, y1 = 0, x2 = 0, y2 = 0) {
    let run = x2 - x1;

    if (run === 0) {
        return "Infinity"; // avoid division by zero
    }

    let rise = y2 - y1;
    let slp = rise / run;

    return slp;
}

// simple console test
if (import.meta.main) {
    console.log(`(0,0)-(1,1) → ${slope(0,0,1,1)}`);   // 1
    console.log(`(0,0)-(2,4) → ${slope(0,0,2,4)}`);   // 2
    console.log(`(1,2)-(3,6) → ${slope(1,2,3,6)}`);   // 2
    console.log(`(1,1)-(1,5) → ${slope(1,1,1,5)}`);   // Infinity
}
