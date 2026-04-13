// input = [ [1,2], [3,35,], [5,6, 9] ]
// output = 35

interface ResponseValues {
    largestNumber: number,
    minNumber: number
}

function foundLargestNumber(value: Array<number[]>): ResponseValues  {
    let numberLargest = value[0][0]
    let numberMin = value[0][0]

    for(let i=0; i<value.length; i++) {
        let arrayI = value[i]
        for(let j=0; j<arrayI.length;j++) {
            let arrayJ = arrayI[j]
            // numberLargest = arrayJ >= numberLargest ? arrayJ:numberLargest
            // numberMin = arrayJ >= numberMin ? numberMin:arrayJ
            
            numberLargest = Math.max(arrayJ, numberLargest)
            numberMin = Math.min(arrayJ, numberMin)
        }
    }

    const response: ResponseValues = {
        largestNumber: numberLargest,
        minNumber: numberMin
    }
    
    

    // for (const item of value) {
    //     // numberLargest = Math.max(...item)
    //     for(const item2 of item) {
    //         // numberLargest = item2 >= numberLargest ? item2 : numberLargest
    //         // numberLargest = Math.max(numberLargest, item2)
    //         if (item2 >= numberLargest) {
    //             numberLargest = item2
    //         } 
    //     }
    // }

    return response
    
}

console.log(foundLargestNumber([[102,2],[356,66]]))

const pairNumbers = (numbers: number[]): number[] => {
    let pairs:number[] = []
    for(let i=0; i<numbers.length; i++) {

        if (numbers[i] % 2 === 0) {
            pairs.push(numbers[i])
        }
    }
    return pairs
}

console.log(pairNumbers([1,2,3,4,5,6,7]))