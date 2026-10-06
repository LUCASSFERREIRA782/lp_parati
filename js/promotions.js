/**
 * Renderiza carrosséis horizontais de produtos e categorias.
 * O conteúdo é fornecido exclusivamente pelo arquivo config.js.
 */
function initializeProductCarousel(selector, items, type) {
  const carousel = document.querySelector(selector);
  if (!carousel || !Array.isArray(items) || items.length === 0) return;

  const renderPromotion = ({ category, name, description, oldPrice, price, badge, icon, color }) => `
    <article class="product-card product-card--${color}">
      <div class="product-card__header"><span class="product-card__badge">${badge}</span><span class="product-card__icon" aria-hidden="true">${icon}</span></div>
      <p class="product-card__category">${category}</p>
      <h3>${name}</h3>
      <p class="product-card__description">${description}</p>
      <div class="product-card__prices"><s>${oldPrice}</s><strong>${price}</strong></div>
      <a class="text-link" href="#contato">Ver no mercado</a>
    </article>`;

  const renderHighlight = ({ title, description, icon }) => `
    <article class="highlight-card">
      <span class="highlight-card__icon" aria-hidden="true">${icon}</span>
      <h3>${title}</h3>
      <p>${description}</p>
    </article>`;

  carousel.innerHTML = `
    <div class="product-carousel__viewport" data-carousel-viewport>
      <div class="product-carousel__track">
        ${items.map(type === 'promotion' ? renderPromotion : renderHighlight).join('')}
      </div>
    </div>
    <div class="product-carousel__controls">
      <button type="button" data-carousel-previous aria-label="Ver itens anteriores">←</button>
      <button type="button" data-carousel-next aria-label="Ver próximos itens">→</button>
    </div>`;

  const viewport = carousel.querySelector('[data-carousel-viewport]');
  carousel.addEventListener('click', (event) => {
    const direction = event.target.matches('[data-carousel-next]') ? 1 : event.target.matches('[data-carousel-previous]') ? -1 : 0;
    if (!direction) return;

    viewport.scrollBy({ left: direction * viewport.clientWidth * 0.85, behavior: 'smooth' });
  });
}
