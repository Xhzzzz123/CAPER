const dialog = document.querySelector('#figure-dialog');
const expandedImage = dialog.querySelector('img');
document.querySelectorAll('[data-expand]').forEach(button => {
  button.addEventListener('click', () => {
    expandedImage.src = button.dataset.expand;
    dialog.showModal();
  });
});
dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});
