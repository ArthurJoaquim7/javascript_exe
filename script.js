
// STRINGS
console.log("===================STRINGS")
primeiro = 'primeiro';
segundo = 'segundo';

concatenar = primeiro + " " + segundo;

console.log(concatenar);

// VARIÁVEIS
console.log("===================VARIÁVEIS")
var number1;
number1 = 1;
let number2 = 2;
// 'const' NÃO PODER SER REDEFINIDO
const number3 = 3;

// TIPOS DE DADOS   
console.log("===================TIPO DE DADOS")
let nome = "Arthur";
console.log(typeof nome);
console.log(typeof NaN);

// null = É UM TIPO DE DADO QUE REPRESENTA UM VALOR.
// undefined = É UM TIPO DE DADO PARA UMA VARIÁVEL COM VALOR NÃO ATRIBUÍDO.

// OBJETO
console.log("===================OBJETO")
obj = {
    name: "Arthur",
    age: 25,
    job: 'Dev',
};

console.log(obj);
console.log(obj.job);

obj.hobbie = "correr";
console.log(obj);

// CRIAR UM MÉTODO NO OBJETO
let pessoa = {
    name: "Arthur",
    age: "25",
    fala: function () {
        console.log("Bom dia.")
    },
};

console.log(pessoa.age);
pessoa.fala();

// ARRAY
console.log("===================ARRAY")
var array = [5, "Arthur", true, { teste1: 1, teste2: 'dois' }];

console.log(array);
console.log(array[2]);

// INSERIR DADOS NO FIM DO ARRAY
array.push("Qualquer coisa")
console.log(array);

// REMOVE O ÚLTIMO DADO DO ARRAY
array.pop();

// REMOVE O PRIMEIRO DADO DO ARRAY
array.shift();

// ADICIONA NO ÍNICIO DO ARRAY
array.unshift("inicio");
console.log(array);

// EDITAR DADOS NO ARRAY
array[0] = 15;
console.log(array);

// ACESSAR O ÚLTIMO ELEMENTO DO ARRAY
console.log(array[array.length - 1]);

// ADICIONAR DADOS NO MEIO DO ARRAY
// depois de , 0 não deletar, valor
array.splice(3, 0, 9999)
console.log(array)

// REMOVE DADO DA DIREITA PARA ESQUERDA
array.splice(4, 1)
console.log(array)

// TRANSFORMAR ARRAY EM STRING
var array2 = ["Isso", "é", "Counter-Strick"];
console.log(array2.join(" "))

// INVERTER ARRAY
console.log(array2.reverse());

// BREAK/CONTINUE
console.log("===================BREAK/CONTINUE")
// COM BREAK PODEMOS ENCERRAR UMA INSTRUÇÃO;
// COM CONTINUE PODEMOS PULAR UMA INSTRUÇÃO;

for (i = 0; i >= 0; i++) {
    console.log(i)
    if (i == 7) {
        break
    }
}
console.log("Break");

// THIS
console.log("===================THIS")
// SEMPRE SE REFERE AO OBJETO GLOBAL WINDOW;
// EM OBJ O THIS VAI SE REFERIR A INSTÂNCIA E PODE ACESSAR SUAS PROPRIEDADES;

console.log(this);

// alert: ƒ alert()
// array: (4) [15, 'Arthur', true, 9999]
// array2: (3) ['Counter-Strick', 'é', 'Isso']
// atob...

let carros = {
    cor: "preto",
    anoCompra: 2014,
    aniversario: function () {
        this.anoCompra += 1;
    }
}

console.log(carros.anoCompra);
carros.aniversario();
carros.aniversario();
carros.aniversario();
console.log(carros.anoCompra);

// DOM
console.log("===================DOM")
// querySelectorAll / querySelector
// ALTERAR CONTEÚDO COM innerHTML & textContent
// var texto = document.querySelector('.texto');

// texto.textContent = "Texto alterado!";
// GERENCIAR O HTML PELO SCRIPT.JS
console.log("===================O CURSO MOSTRA COMO GERENCIAR O HTML PELO SCRIPT.JS")

// CALLBACK FUNCTION
console.log("===================CALLBACK FUNCTION");

// PERMITE EXECUTAR UMA FUNÇÃO DEPOIS DE UMA DETERMINADA AÇÃO;
// É UMA FUNÇÃO QUE É PASSADA COMO PARâMETRO PARA OUTRA FUNÇÃO

function somar(a, b, callback) {
    let resultado = a + b;
    callback(resultado); // A função callback é executada aqui
};

// Função callback para exibir o resultado
function mostarResultado(res) {
    console.log("O resultado é: ", res)
}

// Chamando a função 'somar' e passando a 'mostrarResultado' como callback
somar(5, 3, mostarResultado);

// ====== CALLBACK ASSÍNCRONA

function buscarDados(cb) {
    console.log("Buscando dados...");

    // Simulando uma operação assíncrona com setTimeout(Executa apenas 1x)
    setTimeout(() => {
        const dados = { ìd: 1, name: "Arthur" };
        cb(dados);
    }, 2000);
};


// Função call back para processar os dados recebidos
function exibirDados(dados) {
    console.log("Dados recebidos: ", dados);
};

// Chamando a função e passando a callback
buscarDados(exibirDados);

// setInternal // clearInterval

var inter = setInterval(() => {
    console.log("Rodando interval")
}, 500);

setTimeout(() => {
    console.log("Parando o interval")
    clearInterval(inter);
}, 5000);


// KEYUP / KEYDOWN
console.log("===================KEYUP / KEYDOWN");

document.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        console.log("Apertou");
    }

});

document.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
        console.log("Soltou")
    }
});















