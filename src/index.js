const readline = require("readline");

const answer = require("./answerScript");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite um número natural: ", function (number) {
  const result = answer(number);
  console.log(
    `A soma dos números divisíveis por 3 e 5 menores que o número inserido ${number} é: ${result}.`
  );
  rl.close();
});

rl.on("close", function () {
  process.exit(0);
});
