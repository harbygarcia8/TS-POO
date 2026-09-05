// input: [10, 50, 20, 99, 99, 5]
// output: 50

const foundSecondLargestNumber = (numbers: number[]):number => {
    let value=numbers[0];
    let largestNumber:number = numbers[0]
    for (let i=0; i<numbers.length; i++) {
        let lastLargestNumber: number
        if (numbers[i] > largestNumber) {
            lastLargestNumber = largestNumber
            largestNumber = numbers[i] 
            value = lastLargestNumber
        }
    }
    return value
}

const numbers = [10, 50, 20, 99, 99, 5]

console.log(foundSecondLargestNumber(numbers))