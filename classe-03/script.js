const imgGaleria = document.querySelectorAll('.img img');
const imgModal = document.querySelector('.modal img');
const modal = document.querySelector('.modal');


function abrirModal(src) {
  modal.style.display = 'flex'
  imgModal.src = src;
};

imgGaleria.forEach(imagem => {
  imagem.addEventListener('click', (event) => {
    abrirModal(event.target.src)
  })
});

modal.addEventListener('click', () => {
  modal.style.display = 'none'
})