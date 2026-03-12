import { mowingTime } from "../src/mowingTime.js";

describe("mowingTime()", () => {

    it("calculates time for a 5x10m lawn at 2 m²/min", () => {
        expect(mowingTime(5, 10, 2)).toBeCloseTo(25, 5);
    });

    it("calculates time for an 8x12m lawn at 3 m²/min", () => {
        expect(mowingTime(8, 12, 3)).toBeCloseTo(32, 5);
    });

    it("calculates time for a 15x20m lawn at 5 m²/min", () => {
        expect(mowingTime(15, 20, 5)).toBeCloseTo(60, 5);
    });

});