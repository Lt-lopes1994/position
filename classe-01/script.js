let inputSenha = document.querySelector('#senha-txt');
let imgOlho = document.querySelector('.img-olho');

function alterarImg(event) {

  if (inputSenha.type === "password") {
    inputSenha.type = 'text'
    imgOlho.src = 'assets/olho-aberto.svg';
  } else {
    inputSenha.type = 'password'
    imgOlho.src = 'assets/olho-fechado.svg'
  }
}