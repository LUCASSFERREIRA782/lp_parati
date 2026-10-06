/** Slider de avaliações sem dependências externas. */
function initializeReviewSlider(reviews) {
  const slider = document.querySelector('[data-review-slider]');
  if (!slider || !Array.isArray(reviews) || reviews.length === 0) return;

  let currentIndex = 0;
  const render = () => {
    const review = reviews[currentIndex];
    const stars = '★'.repeat(Math.min(Math.max(review.rating, 0), 5));

    slider.innerHTML = `
      <article class="review-card" aria-live="polite">
        <span aria-label="${review.rating} de 5 estrelas">${stars}</span>
        <blockquote>“${review.text}”</blockquote>
        <footer>${review.author}</footer>
      </article>
      <div class="review-slider__controls">
        <button type="button" data-review-previous aria-label="Avaliação anterior">Anterior</button>
        <button type="button" data-review-next aria-label="Próxima avaliação">Próxima</button>
      </div>`;
  };

  slider.addEventListener('click', (event) => {
    if (event.target.matches('[data-review-previous]')) {
      currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
      render();
    }

    if (event.target.matches('[data-review-next]')) {
      currentIndex = (currentIndex + 1) % reviews.length;
      render();
    }
  });

  render();
}
