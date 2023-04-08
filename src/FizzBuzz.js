function runFizzBuzz(fizz, buzz, minVal, maxVal) {
  const result = fizzBuzz(fizz, buzz, minVal, maxVal);
  return Promise.resolve(result);
}

function fizzBuzz(fizz, buzz, minVal, maxVal) {
  let output = '';
  for (let i = minVal; i <= maxVal; i++) {
    if (i % fizz === 0 && i % buzz === 0) {
      output += 'FizzBuzz ';
    } else if (i % fizz === 0) {
      output += 'Fizz ';
    } else if (i % buzz === 0) {
      output += 'Buzz ';
    } else {
      output += i + ' ';
    }
  }
  return output.trim();
}
async function generate() {
  const fizz = parseInt(document.getElementById("fizz").value);
  const buzz = parseInt(document.getElementById("buzz").value);
  const minVal = parseInt(document.getElementById("minVal").value);
  const maxVal = parseInt(document.getElementById("maxVal").value);
  
  const result = await runFizzBuzz(fizz, buzz, minVal, maxVal);
  console.log(result);
}

export default runFizzBuzz;
