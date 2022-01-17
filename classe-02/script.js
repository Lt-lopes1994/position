const botao = document.querySelector('.botao');
const popup = document.querySelector('.popup')

botao.addEventListener('click', () => {
  popup.classList.toggle('escondido')
})