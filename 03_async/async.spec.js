const axios = require("axios")
const Ajax = require("./async.js")

jest.mock('axios')

describe('Ajax:echo', () => {
    test("should return value async", async () => {
        const result = await Ajax.echo('some data');
        expect(result).toBe('some data');
    })

    test("should return value with Promise", () => {
        return Ajax.echo('some data').then(data => {
            expect(data).toBe('some data')
        });

    })

    test("should catch error with Promise", () => {
        return Ajax.echo().catch(err => {
            expect(err).toBeInstanceOf(Error)
        });

    })
    test("should catch error async ", async () => {
        try {
            await Ajax.echo()
        } catch (e) {
            expect(e.message).toBe('error')
        }

    })
})

describe("AJAX GET",()=>{
    let response;
    let todos;
    beforeEach(()=>{
        todos = [
            {id:1,title:"todo 1",completed:false}
        ]

        response = {
            data:{
                todos
            }
        }
    })

    test("should return data from backend",()=>{
        axios.get.mockReturnValue(response)
        return Ajax.get().then(data=>{
            expect(data.todos).toEqual(todos)
        })

})
})