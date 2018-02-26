module.exports = function solveEquation(equation) {
  let resultArr = [];

  let equationStr = equation.replace(/ /g,'');  
  let intArr = equationStr.match(/-?\d*\.?\d+/g);
  
  let a = intArr[0];
  let b = intArr[2];
  let c = intArr[3];
  let discriminant = Math.pow(b, 2) - (4 * a * c); 

  resultArr.push(Math.round(-b + Math.sqrt(discriminant)) / (2 * a));
  resultArr.push(Math.round(-b - Math.sqrt(discriminant)) / (2 * a));
  resultArr.sort((a, b) => a - b);
  
  return resultArr;
}
