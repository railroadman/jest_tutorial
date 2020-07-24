const {sum, nativeNull} = require("./intro")

describe("Sum function", () => {
    test('shoud return sum of two values', () => {
        expect(sum(1, 3)).toBeLessThanOrEqual(5)
        expect(sum(1, 3)).toBeGreaterThan(3)
        expect(sum(1, 3)).toBeLessThan(10)

        expect(sum(1, 3)).toBeGreaterThanOrEqual(4)
    })

    test("should correctrly work with float values", () => {
        expect(sum(0.1, 0.4)).toBe(0.5)
        expect(sum(0.1, 0.2)).toBeCloseTo(0.3)
    })

})

describe('Native NULL function', () => {
    test('should retun false or null', () => {
        expect(nativeNull()).toBe(null)
        expect(nativeNull()).toBeNull()
        expect(nativeNull()).toBeFalsy()
        expect(nativeNull()).toBeDefined()
        expect(nativeNull()).not.toBeTruthy()
    })

})
