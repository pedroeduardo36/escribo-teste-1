
function sumAnswer(value) {
    const parsedValue = parseInt(value);
  
    if (isNaN(parsedValue)) {
      console.log(`Valor ${value} é inválido. Por favor, escreva um número.`);
      return;
    }
  
    if (parsedValue < 0) {
      console.log(
        `Valor ${value} é inválido. Por favor, escreva um número positivo.`
      );
      return;
    }
  
    let totalSum = 0;
  
    for (let i = 0; i < parsedValue; i++) {
      if (!(i % 3) || !(i % 5)) {
        totalSum += i;
      }
    }
  
    return totalSum;
  }
  
  module.exports = sumAnswer;
  