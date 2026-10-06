/** Renderiza a galeria e controla o lightbox acessível. */
function initializeGallery(items) {
  const gallery = document.querySelector('[data-gallery]');
  const lightbox = document.querySelector('[data-lightbox]');

  if (!gallery || !lightbox || !Array.isArray(items)) return;

  const lightboxImage = lightbox.querySelector('.lightbox__image');
  const closeButton = lightbox.querySelector('.lightbox__close');

  gallery.innerHTML = items
    .map(
      ({ src, alt }) => `
        <button class="gallery-item" type="button" data-image-src="${src}" data-image-alt="${alt}">
          <img src="${src}" alt="${alt}" loading="lazy" decoding="async" />
        </button>`
    )
    .join('');

  gallery.addEventListener('click', (event) => {
    const item = event.target.closest('.gallery-item');
    if (!item) return;

    lightboxImage.src = item.dataset.imageSrc;
    lightboxImage.alt = item.dataset.imageAlt;
    lightbox.showModal();
  });

  closeButton.addEventListener('click', () => lightbox.close());
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) lightbox.close();
  });
}
