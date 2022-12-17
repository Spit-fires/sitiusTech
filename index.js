const container = document.querySelector('.relative');
const cardContainer = document.querySelector('.flex');
const cards = document.querySelectorAll('.px-6');
const prevButton = document.querySelector('.left-0');
const nextButton = document.querySelector('.right-0');

let currentCard = 0;

prevButton.addEventListener('click', () => {
  // Decrement the current card
  currentCard = (currentCard + cards.length - 1) % cards.length;
  // Update the scroll position of the card container
  cardContainer.scrollLeft = cards[currentCard].offsetLeft;
});

nextButton.addEventListener('click', () => {
  // Increment the current card
  currentCard = (currentCard + 1) % cards.length
});