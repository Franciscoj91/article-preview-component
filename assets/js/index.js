const shareButtons = document.querySelectorAll('.share-btn');
const shareSection = document.querySelector('.share-section');
console.log(shareSection);
shareButtons.forEach((button) => {
  button.addEventListener('click', () => {
    shareSection.classList.toggle('active');
  })
});