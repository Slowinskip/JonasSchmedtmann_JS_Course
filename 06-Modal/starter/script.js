'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const bntCloseModal = document.querySelector('.close-modal');
const bntsOpenModal = document.querySelectorAll('.show-modal');

const toggleModal = function () {
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
};

for (let i = 0; i < bntsOpenModal.length; i++) {
  bntsOpenModal[i].addEventListener('click', toggleModal);
}

bntCloseModal.addEventListener('click', toggleModal);
overlay.addEventListener('click', toggleModal);

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    toggleModal();
  }
});
