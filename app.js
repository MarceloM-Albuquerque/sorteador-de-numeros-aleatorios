function sortear() {
    let quantidade = document.getElementById('quantidade').value;
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    
  if (de >= ate) {
    alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
    return(reiniciarAposAlert());
  }

  if (quantidade > (ate - de + 1)) {
    alert('O campo "Quantidade de números" deve ser menor ou igual ao intervalo informado nos campos: "Do número", "Até o número". Verifique!');
    return(reiniciarAposAlert());
  }

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);

        while (sorteados.includes(numero)) {  //.includes = verifica se o numero aleatorio ja existe dentro do array. Enquanto true, se reperte o while
            numero = obterNumeroAleatorio(de, ate);
        }

        sorteados.push(numero);  //push = clocar dentro do array

        sorteados.sort(function (de, ate) {
            return de - ate;
        }); //comparando numeros do arrey e colocando em ordem crescente
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`;
    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}

function reiniciarAposAlert() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
}