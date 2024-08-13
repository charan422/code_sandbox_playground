// Print numbers in this format using recursion.
// format 1,2,3,4,5,4,3,2,1
function printNumbers(num: number, size: number, result: number[]): number[] {
    if(num >= size) return [];
    result.push(num);
    printNumbers(++num, size, result);
    result.push(num);
    return result;
}

const result = printNumbers(1,5,[]);
console.log(result.join(','));