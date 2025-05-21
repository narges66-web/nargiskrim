// Get elements
const quickViewButtons = document.querySelectorAll('.quick-view-btn');
const popup = document.getElementById('popup');
const popupImage = document.querySelector('.popup-book-image');
const popupTitle = document.querySelector('.popup-book-title');
const popupAuthor = document.querySelector('.popup-book-author');
const popupPrice = document.querySelector('.popup-book-price');
const popupDescription = document.querySelector('.popup-book-description');
const closePopup = document.querySelector('.close-popup');


quickViewButtons.forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.book-card');
    const imgSrc = card.querySelector('.book-image').src;
    const title = card.querySelector('.book-title').textContent;
    const author = button.dataset.author;
    const price = button.dataset.price;
    const description = button.dataset.description;

    popupImage.src = imgSrc;
    popupTitle.textContent = title;
    popupAuthor.textContent = `Author: ${author}`;
    popupPrice.textContent = `Price: ${price}`;
    popupDescription.textContent = description;

    popup.style.display = 'flex';
  });
});

closePopup.addEventListener('click', () => {
  popup.style.display = 'none';
});


popup.addEventListener('click', e => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});
