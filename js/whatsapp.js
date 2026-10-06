/** Cria a URL do WhatsApp a partir dos dados configurados. */
function createWhatsAppUrl(phone, message) {
  const normalizedPhone = String(phone).replace(/\D/g, '');
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${normalizedPhone}?text=${encodedMessage}`;
}
