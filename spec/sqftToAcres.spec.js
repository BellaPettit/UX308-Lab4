
import { sqftToAcres } from "./sqftToAcres";

describe("sqftToAcres()", () => {

    it("should convert 43,560 square feet to 1 acre", () => {
        // processing & output
        expect(sqftToAcres(43560)).toBeCloseTo(1, 5);
    });

    it("should convert 87,120 square feet to 2 acres", () => {
        expect(sqftToAcres(87120)).toBeCloseTo(2, 5);
    });

    it("should convert 21,780 square feet to 0.5 acres", () => {
        expect(sqftToAcres(21780)).toBeCloseTo(0.5, 5);
    });

});
