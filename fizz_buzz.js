function fizzBuzz(n){

let answer = []

for( let i=1; i<= n; i ++){
    // console.log(answer[i])
    if(i % 3 === 0 && i % 5 === 0){
        answer.push("FizzBuzz")
    }else if(i % 3 === 0){
        answer.push("Fizz")
    }else if(i % 5 === 0){
        answer.push("Buzz")
    }else{
        answer.push(i.toString())
    }
    // console.log(answer)
}

return answer;
// return answer * n
}

console.log(fizzBuzz(3));
console.log(fizzBuzz(15));