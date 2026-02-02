

import { yee_ha } from "./yeeHa";

describe("yee_ha()", () => {

    it("divisible by 3 → Yee", () => {
        expect(yee_ha(3)).toBe("Yee");
    });

    it("divisible by 7 → Ha", () => {
        expect(yee_ha(7)).toBe("Ha");
    });

    it("divisible by 3 and 7 → Yee Ha", () => {
        expect(yee_ha(21)).toBe("Yee Ha");
    });

    it("not divisible by 3 or 7 → Nada", () => {
        expect(yee_ha(2)).toBe("Nada");
    });

});
