const modal = document.getElementById('modal');
const image = document.getElementById('modal-img');

function showModal(src) {
  modal.style.display = 'block';
  image.src = src;

  return false;
}

function hideModal() {
  modal.style.display = 'none';
}
