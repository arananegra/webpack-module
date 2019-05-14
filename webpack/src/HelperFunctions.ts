
export const sumOfArray = (array: Array<number>): number => {
    return array.reduce((a: number, b: number) => {
        return a + b;
    }, 0); 
}

export const meanOfArray = (array: Array<number>): number => {
    return sumOfArray(array)/array.length;
}

console.log(`We are in: ${process.env.NODE_ENV}`)
