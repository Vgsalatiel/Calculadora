let resultado = document.getElementById('result');

function insert(value) {//função chamada quando um numero ou operado é clicado, e adiciona o valor a propriedade innerGTML do elemento resultado.
  resultado.innerHTML += value;
}

function calcular() {
  try {
    const expressao = resultado.innerHTML;
    const expressaoCerta = expressao.replace(/x/g, '*'); // Substitui o operador 'x' pelo operador de multiplicação '*'
    const resultadoFinal = eval(expressaoCerta);
    resultado.innerHTML = resultadoFinal;
  } catch (error) {
    resultado.innerHTML = 'Erro';
  }
}

function limpa() {// Ao chamar esta função ela ira limpar o campo resultado
  resultado.innerHTML = '';
}
/*
replace(): é uma função JavaScript que permite substituir partes de uma string por outra
string ou por um valor calculado.


*/