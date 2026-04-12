// input = "I love typeScript"
// output = 3

const whichAreWordsInAString = (value: string): number => {
    const cleanString = value.trim()
    let sum = 1
    for(const element of cleanString) {
        if (element === ' ') {
            sum++
        }
    }

    return sum;
}

console.log(whichAreWordsInAString(" I love typeScript f fg"))
