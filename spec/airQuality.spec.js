
import { airQuality } from "./airQuality";

describe("airQuality()", () => {

    it("Good (0-50)", () => {
        expect(airQuality(30)).toBe("Good");
    });

    it("Moderate (51-100)", () => {
        expect(airQuality(75)).toBe("Moderate");
    });

    it("Unhealthy for Sensitive Groups (101-150)", () => {
        expect(airQuality(125)).toBe("Unhealthy for Sensitive Groups");
    });

    it("Unhealthy (151-200)", () => {
        expect(airQuality(175)).toBe("Unhealthy");
    });

    it("Very Unhealthy (201-300)", () => {
        expect(airQuality(250)).toBe("Very Unhealthy");
    });

    it("Hazardous (300+)", () => {
        expect(airQuality(350)).toBe("Hazardous");
    });

});
