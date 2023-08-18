// union type
const mixedArray = ['foo', 1]

const mixedArrayU: (string|number)[] = ['foo', 1] // union型
const mixedArrayT: [string, number] = [ 'foo', 1] // タプル