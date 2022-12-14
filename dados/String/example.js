// let string1 = 'JavaScript';
// let string2 = "JavaScript";
// let string3 = `JavaScript`;

// Criando através de uma função construtora

// new String('JavaScript');
// new String("JavaScript");
// new String(`JavaScript`);

// Comparação de tempo de criação de Strings utilizando uma função construtora

// let counter = 0;

// console.time("performance");

// while(counter < 100000) {
//     "Javascript";
//     counter++;
// };

// console.timeEnd("performance");

// let counterConstructor = 0;
// console.time("performance");

// while(counterConstructor < 100000) {
//     new String("Javascript");
//     counterConstructor++;
// };

// console.timeEnd("performance");


// Exemplos de como escapar caracteres especiais

// console.log("Teste usando \"aspas duplas\"");
// console.log('Teste usando aspa simples\'');
// console.log("Teste para imprimir contra barra: \\n");

// Exemplos de caracteres de controle

// let daysOfWeek = "0 - Sun\n1 - Mon \n2 - Tue\n3 - Wed\n4 - Thu\n5 - Fri\n6 - Sat"
// console.log(daysOfWeek);

// Escrevendo o mesmo texto de dias da semana utilizando o padrão Unicode

// console.log("\u0030 \u002d \u0053\u0075\u006e\u000A");

// Exemplo de template Literal

// let host = "localhost";
// let port = "3000";
// let resource = "users";
// let url = "https://" + host + ":" + port + "/" + resource;
// let urlTemplateLiteral = `https://${host}:${port}/${resource}`

// console.log(url);
// console.log(urlTemplateLiteral);

// Quebrando linhas usando template literal

// let quebraDeLinha = "0 - Jan" +
//     "1 - Fev" +
//     "2 - Mar"

// let quebraDeLinha2 = "0 - Jan\
// 1 - Fev\
// 2 - Mar"

// let quebraDeLinhaTemplateLiteral = `
// 0 - Jan
// 1 - Fev
// 2 - Mar`

// console.log(quebraDeLinha);
// console.log(quebraDeLinha2);
// console.log(quebraDeLinhaTemplateLiteral);