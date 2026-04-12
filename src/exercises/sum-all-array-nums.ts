// input = [1,2,3,4]
// output = 10

const sumAllArraysNum = (value: number[]): number => {
    let sum = 0
    
    // for(let i = 0; i< value.length; i++) {
    //     sum += value[i]
    // }

    for(const item of value) {
        sum = sum + item
    }

    return sum
}

console.log(sumAllArraysNum([1,2,3,4,5,6]))
