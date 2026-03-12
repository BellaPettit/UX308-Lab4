import { slope } from "../src/slope.js";

describe("slope()", () => {

    it("returns 1 for the line between (0,0) and (1,1)", () => {
        expect(slope(0,0,1,1)).toBe(1);
    });

    it("returns 2 for the line between (0,0) and (2,4)", () => {
        expect(slope(0,0,2,4)).toBe(2);
    });

    it("returns 2 for the line between (1,2) and (3,6)", () => {
        expect(slope(1,2,3,6)).toBe(2);
    });

    it("returns Infinity for a vertical line (1,1) to (1,5)", () => {
        expect(slope(1,1,1,5)).toBe(Infinity);
    });

});