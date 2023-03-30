const { Stack } = require("../src/Stack")

describe("My Stack", () => {
    let stack;

    beforeEach(() => {
       stack = new Stack()
    })

    it('it is created empty', () => {
        expect(stack.top).toBe(-1)
        expect(stack.peek).toBeUndefined()
        expect(stack.items).toEqual({})
    })

    it('can push to top', () => {
        stack.push("Avocado")
        expect(stack.top).toBe(0)
        expect(stack.peek).toBe("Avocado")
        expect(stack.items).toEqual({ 0: "Avocado" })

        stack.push("Mango")
        expect(stack.top).toBe(1)
        expect(stack.peek).toBe("Mango")
        expect(stack.items).toEqual({ 0: "Avocado", 1: "Mango" })
    })

    it('can pop of from top', () => {
        stack.push("Avocado")

        expect(stack.pop()).toBe("Avocado")
        expect(stack.top).toBe(-1)
        expect(stack.peek).toBeUndefined()
        expect(stack.items).toEqual({})
    })
})