import { yeeHa } from "../src/yeeHa.js";

describe("yeeHa()", () => {

    it("returns Yee when divisible by 3", () => {
        expect(yeeHa(3)).toBe("Yee");
    });

    it("returns Ha when divisible by 7", () => {
        expect(yeeHa(7)).toBe("Ha");
    });

    it("returns Yee Ha when divisible by both 3 and 7", () => {
        expect(yeeHa(21)).toBe("Yee Ha");
    });

    it("returns Nada when not divisible by 3 or 7", () => {
        expect(yeeHa(2)).toBe("Nada");
    });

});