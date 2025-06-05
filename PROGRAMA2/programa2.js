/*
INTEGRANTES:
IGSON
BRENO
VINICIUS
*/

// Função principal para calcular desconto
document.getElementById('formIBV').addEventListener('submit', function(e) {
    e.preventDefault();

    const preco = parseFloat(document.getElementById('precoOriginalIBV').value);
    const desconto = parseFloat(document.getElementById('porcentagemDescontoIBV').value);

    if (isNaN(preco) || isNaN(desconto)) {
        mostrarErro("Por favor, insira valores válidos.");
        return;
    }

    const valorDesconto = preco * (desconto / 100);
    const precoFinal = preco - valorDesconto;

    exibirResultado(preco, desconto, valorDesconto, precoFinal);
});

function exibirResultado(preco, desconto, valorDesconto, precoFinal) {
    document.getElementById('resultadoIBV').innerHTML = `
        <p>Preço original: <strong>R$ ${preco.toFixed(2)}</strong></p>
        <p>Desconto aplicado: <strong>${desconto}%</strong></p>
        <p>Valor do desconto: <strong>R$ ${valorDesconto.toFixed(2)}</strong></p>
        <p><span>Preço final: <strong>R$ ${precoFinal.toFixed(2)}</strong></span></p>
    `;
}

function mostrarErro(msg) {
    document.getElementById('resultadoIBV').innerHTML = `<span style='color:red'>${msg}</span>`;
}