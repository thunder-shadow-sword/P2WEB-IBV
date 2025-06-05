/*
INTEGRANTES:
IGSON
BRENO
VINICIUS
*/

// Código para converter horas em minutos e exibir uma mensagem personalizada
document.addEventListener('DOMContentLoaded', function() {
    const formIBV = document.getElementById('timeForm');
    const resultDivIBV = document.getElementById('result');

    formIBV.addEventListener('submit', function(eventIBV) {
        eventIBV.preventDefault();
        const hoursInputIBV = document.getElementById('hours');
        const hoursIBV = parseFloat(hoursInputIBV.value);

        if (isNaN(hoursIBV) || hoursIBV < 0) {
            resultDivIBV.innerHTML = '<span style="color:red;">Por favor, insira um valor válido de horas.</span>';
            return;
        }

        const minutosIBV = hoursIBV * 60;
        resultDivIBV.innerHTML = `<strong>${hoursIBV}</strong> hora(s) equivalem a <strong>${minutosIBV}</strong> minuto(s).`;
    });
});