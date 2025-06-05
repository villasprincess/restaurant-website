document.addEventListener('DOMContentLoaded', () => {
    const menuCards = document.querySelectorAll('.menu_card');
    const modal = document.getElementById('menuModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalPrice = document.getElementById('modalPrice');
    const modalDescription = document.getElementById('modalDescription');
    const closeBtn = document.querySelector('.close');

    menuCards.forEach(card => {
        card.addEventListener('click', () => {
            const title = card.getAttribute('data-title');
            const price = card.getAttribute('data-price');
            const description = card.getAttribute('data-description');
            const image = card.getAttribute('data-image');

            modalTitle.innerText = title;
            modalPrice.innerText = price;
            modalDescription.innerText = description;
            modalImage.src = image;

            modal.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});

