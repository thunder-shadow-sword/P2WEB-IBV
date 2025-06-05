/*
INTEGRANTES:
IGSON
BRENO
VINICIUS
*/

const IBVemailCorreto = "ibv@tech.com";
const IBVsenhaCorreta = "123456";

document.getElementById('IBVformLogin').addEventListener('submit', function(IBVevento) {
    IBVevento.preventDefault();

    let IBVemailDigitado = document.getElementById('IBVemail').value;
    let IBVsenhaDigitada = document.getElementById('IBVsenha').value;
    let IBVmensagem = document.getElementById('IBVmensagemLogin');

    if (IBVemailDigitado !== IBVemailCorreto) {
        IBVmensagem.innerHTML = "<span style='color:red'>Email incorreto.</span>";
    } else if (IBVsenhaDigitada !== IBVsenhaCorreta) {
        IBVmensagem.innerHTML = "<span style='color:red'>Senha incorreta.</span>";
    } else {
        IBVmensagem.innerHTML = "<span style='color:green'>Login realizado com sucesso! Bem-vindo, IBV Tech!</span>";
    }
});