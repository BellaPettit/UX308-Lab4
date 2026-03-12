import { sqftToAcres } from "../src/sqftToAcres.js";

describe("sqftToAcres()", () => {

    it("converts 43,560 square feet to 1 acre", () => {
        expect(sqftToAcres(43560)).toBeCloseTo(1, 5);
    });

    it("converts 87,120 square feet to 2 acres", () => {
        expect(sqftToAcres(87120)).toBeCloseTo(2, 5);
    });

    it("converts 21,780 square feet to 0.5 acres", () => {
        expect(sqftToAcres(21780)).toBeCloseTo(0.5, 5);
    });

});
