var output = [];
var count = 11;

function fizzbuzz() {
   if(count % 3 === 0 && count % 5 === 0) {
    output.push("FizzBuzz");
  } else if (count % 3 === 0) {
    output.push("Fizz");
  } else if(count % 5 === 0) {
  output.push("Buzz");
}   else{
    output.push(count);
  }
  console.log(output);
  count++;
}

// [1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz"]