/*Idade em segundos: Crie um site que peça ao usuário a idade dele em anos, utilizando prompt(), e devolva a idade em segundos, utilizando document.write().

tarefas (TODO):
- criar um arquivo html;
- criar um arquivo js;
- fazer uma estrutura html da página;
- perguntar a idade por meio de um prompt();
- conectar js com html;
- converter a idade em segundos;
- mostrar o resultado na página web por meio do document.write(); */

// perguntar a idade por meio de um prompt();

var age = parseInt(prompt("Qual é a sua idade?"))

// converter a idade em segundos;

var ageInSeconds = age*365*24*60*60

console.log(ageInSeconds);

//mostrar o resultado na página web por meio do document.write()

document.write("Em seus " + age + " de idade, se passaram " + ageInSeconds + " segundos.")