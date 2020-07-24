const Lodash = require("./sync")
let _ = new Lodash()
describe("lodash compact", () => {


    beforeEach(() => {
        array = [false, 42, 0, '', null, true, 'hello']
    })

    afterAll(() => {
            let _ = new Lodash()
        }
    )

    const _ = new Lodash()
    test("should be defined", () => {
        expect(_.compact).toBeDefined()
        expect(_.compact).not.toBeUndefined()

    })
    test("should remove falsy values from array", () => {

        expect(_.compact(array)).toEqual([42, true, 'hello'])
    })

    test("should not contains falsy values", () => {

        expect(_.compact(array)).not.toContain(false)
        expect(_.compact(array)).not.toContain(null)
        expect(_.compact(array)).not.toContain('')
        expect(_.compact(array)).not.toContain(0)
    })
})

describe("lodash group by", () => {
    test("should be defined", () => {
        expect(_.groupBy).toBeDefined()
        expect(_.groupBy).not.toBeUndefined()
    })
    test("should group array items by math.floor", () => {
        const result = {2: [2.2, 2.4], 3: [3.1], 4: [4.2]}
        const array = [2.2, 2.4, 4.2, 3.1]

        expect(_.groupBy(array, Math.floor)).toEqual(result)
    })

    test("should group array items by length", () => {

        const array = ['one', 'two', 'three']
        const result = {5: ["three"], 3: ['one', 'two']}

        expect(_.groupBy(array, 'length')).toEqual(result)
    })
})