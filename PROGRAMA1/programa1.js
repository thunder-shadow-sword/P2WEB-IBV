/*
INTEGRANTES:
IGSON
BRENO
VINICIUS
*/

// Função para calcular o IMC (Índice de Massa Corporal)
function calcularIMCIBV(pesoIBV, alturaIBV) {
    return pesoIBV / (alturaIBV * alturaIBV);
}

// Função para mostrar a mensagem com o resultado
function mostrarResultadoIBV(imcIBV) {
    let mensagemIBV = "";
    if (imcIBV < 18.5) {
        mensagemIBV = "Abaixo do peso";
    } else if (imcIBV < 25) {
        mensagemIBV = "Peso normal";
    } else if (imcIBV < 30) {
        mensagemIBV = "Sobrepeso";
    } else {
        mensagemIBV = "Obesidade";
    }
    return `Seu IMC é ${imcIBV.toFixed(2)} - ${mensagemIBV}`;
}

// Captura o submit do formulário
document.getElementById('formIBV').addEventListener('submit', function(event) {
    event.preventDefault();
    const peso = parseFloat(document.getElementById('pesoIBV').value);
    const altura = parseFloat(document.getElementById('alturaIBV').value);
    if (peso > 0 && altura > 0) {
        const imc = calcularIMCIBV(peso, altura);
        document.getElementById('resultadoIBV').textContent = mostrarResultadoIBV(imc);
    } else {
        document.getElementById('resultadoIBV').textContent = "Por favor, preencha os campos corretamente.";
    }
});