function openModal(img) {
    const modal = document.querySelector('.modal');
    const modalImg = document.getElementById('modal-img');
    modal.style.display = 'flex';
    modalImg.src = img.src;
}

function closeModal(event) {
    const modal = document.querySelector('.modal');
    if (event.target === modal || event.target.classList.contains('close')) {
        modal.style.display = 'none';
    }
}