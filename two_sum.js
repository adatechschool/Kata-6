function twoSum(numbers, target){

let result = []

for(let i = 0; i< numbers.length; i++){
    for(let j = 0; j< numbers.length; j++){
        if(numbers[i] + numbers[j] === target){
            result.push(numbers.indexOf(numbers[i]))
        }
    }
    }
    return result
}
console.log(twoSum([2, 7, 11, 15], 9))