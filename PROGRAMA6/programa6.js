/*
INTEGRANTES:
IGSON
BRENO
VINICIUS
*/

const valorTotalIBV = document.querySelector("#IBVvalorTotal")
const pessoasIBV = document.querySelector("#IBVpessoas")

document.querySelector("#IBVDivisaoConta").addEventListener("submit", (e) => {
  e.preventDefault()

  const valorcontaIBV = parseFloat(valorTotalIBV.value)
  const numeroPessoasIBV = parseInt(pessoasIBV.value)
  const valorPorPessoaIBV = valorcontaIBV / numeroPessoasIBV
  const respostaIBV = document.querySelector("#IBVresultado")
  respostaIBV.innerHTML = `
  <br>
  <div>
    <div>Valor da Conta: R$ ${valorcontaIBV.toFixed(2)}</div>
    <div>Número de Pessoas: ${numeroPessoasIBV}</div>
    <div>Valor por Pessoa: R$ ${valorPorPessoaIBV.toFixed(2)}</div>
  </div>
  `
})