const sum = (a, b) => {
    return a + b
}

const nativeNull = () => null;


function expect(value) {
    return {
        toBe: exp => {
            if (value === exp) {
                console.log("Success")
            } else {
                console.error(`Value ${value}, but expecttion is ${exp}`);
            }
        }
    }
}

module.exports = {sum, nativeNull}
//console.log(sum(4, 6));
//expect(sum(4, 6)).toBe(10);

