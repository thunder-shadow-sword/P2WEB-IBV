/*
INTEGRANTES:
IGSON
BRENO
VINICIUS
*/

function IBVcalcularFatorial(IBVnumero) {
    if (IBVnumero === 0 || IBVnumero === 1) return 1;
    let IBVresultado = 1;
    for (let IBVi = 2; IBVi <= IBVnumero; IBVi++) {
        IBVresultado *= IBVi;
    }
    return IBVresultado;
}

document.getElementById('formFatorial').addEventListener('submit', function(IBVevento) {
    IBVevento.preventDefault();
    let IBVinput = document.getElementById('numeroFatorial');
    let IBVvalor = parseInt(IBVinput.value);
    let IBVsaida = document.getElementById('resultadoFatorial');

    if (isNaN(IBVvalor) || IBVvalor < 0) {
        IBVsaida.textContent = "Por favor, digite um número inteiro não negativo.";
        return;
    }

    let IBVfat = IBVcalcularFatorial(IBVvalor);
    IBVsaida.textContent = `O fatorial de ${IBVvalor} é ${IBVfat}.`;
});