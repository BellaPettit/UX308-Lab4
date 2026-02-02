
import { slope } from "./slope";

describe("slope()", () => {

    it("line (0,0)-(1,1) → slope 1", () => {
        expect(slope(0,0,1,1)).toBe(1);
    });

    it("line (0,0)-(2,4) → slope 2", () => {
        expect(slope(0,0,2,4)).toBe(2);
    });

    it("line (1,2)-(3,6) → slope 2", () => {
        expect(slope(1,2,3,6)).toBe(2);
    });

    it("vertical line (1,1)-(1,5) → Infinity", () => {
        expect(slope(1,1,1,5)).toBe("Infinity");
    });

});
