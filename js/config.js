/**
 * Configuração central do cliente.
 *
 * Para adaptar o site a outro cliente, altere os dados deste arquivo,
 * as imagens em assets/images e as variáveis de tema em css/variables.css.
 */
const siteConfig = {
  business: {
    name: 'Mercado Parati',
    brandMark: 'MP',
    segment: 'Mercado de bairro',
    slogan: 'Preço justo, variedade e praticidade perto de você.',
    description:
      'O Mercado Parati é o mercado de confiança da vizinhança, com ofertas todos os dias e tudo o que sua casa precisa.',
    phone: '(11) 4000-0000',
    whatsapp: '551140000000',
    email: 'contato@mercadoparati.com.br',
    address: 'Rua do Comércio, 127 - São Paulo - SP',
    mapsUrl: 'https://maps.google.com/',
    social: {
      instagram: 'https://www.instagram.com/',
      facebook: 'https://www.facebook.com/'
    }
  },

  navigation: [
    { label: 'Início', target: '#inicio' },
    { label: 'Ofertas', target: '#ofertas' },
    { label: 'Destaques', target: '#destaques' },
    { label: 'Sobre', target: '#sobre' },
    { label: 'Contato', target: '#contato' }
  ],

  hero: {
    eyebrow: 'O mercado da sua vizinhança',
    title: 'Sua compra do dia mais leve, rápida e econômica.',
    subtitle: 'Ofertas de verdade, produtos frescos e atendimento que conhece você pelo nome.',
    image: 'assets/images/mercado-parati-fachada.jpg',
    primaryAction: 'Ver ofertas da semana',
    secondaryAction: 'Pedir pelo WhatsApp'
  },

  about: {
    title: 'Todo dia tem motivo para passar no Parati.',
    text: 'Do café da manhã ao churrasco de domingo, selecionamos produtos para facilitar sua rotina, com economia e a proximidade que só o comércio local oferece.',
    image: 'assets/images/mercado-parati-fachada.jpg'
  },

  promotions: [
    {
      category: 'Mercearia',
      name: 'Arroz tipo 1 - 5 kg',
      description: 'Qualidade para as refeições de todos os dias.',
      oldPrice: 'R$ 32,90',
      price: 'R$ 26,90',
      badge: 'Oferta da semana',
      icon: '🌾',
      color: 'gold'
    },
    {
      category: 'Hortifruti',
      name: 'Banana prata - kg',
      description: 'Fresquinha para sua casa todos os dias.',
      oldPrice: 'R$ 7,99',
      price: 'R$ 4,99',
      badge: 'Preço baixo',
      icon: '🍌',
      color: 'green'
    },
    {
      category: 'Açougue',
      name: 'Coxão mole - kg',
      description: 'Corte selecionado para a receita ficar especial.',
      oldPrice: 'R$ 49,90',
      price: 'R$ 39,90',
      badge: 'Só até domingo',
      icon: '🥩',
      color: 'red'
    },
    {
      category: 'Bebidas',
      name: 'Refrigerante 2 L',
      description: 'Leve para completar seu encontro em família.',
      oldPrice: 'R$ 10,99',
      price: 'R$ 8,49',
      badge: 'Economize hoje',
      icon: '🥤',
      color: 'blue'
    }
  ],

  highlights: [
    { title: 'Hortifruti selecionado', description: 'Mais cor e frescor para sua mesa.', icon: '🥬' },
    { title: 'Açougue no capricho', description: 'Cortes preparados para o seu pedido.', icon: '🥩' },
    { title: 'Padaria todos os dias', description: 'Pão quentinho para começar bem.', icon: '🥖' },
    { title: 'Bebidas geladas', description: 'Sua escolha pronta para levar.', icon: '🧃' }
  ],

  differentials: [
    'Ofertas renovadas toda semana',
    'Atendimento próximo e ágil',
    'Variedade para a rotina da família'
  ],

  reviews: [
    {
      author: 'Mariana S.',
      text: 'Sempre encontro o que preciso e as ofertas realmente ajudam no fim do mês.',
      rating: 5
    },
    {
      author: 'Roberto A.',
      text: 'Mercado organizado, atendimento rápido e produtos muito bons.',
      rating: 5
    },
    {
      author: 'Juliana F.',
      text: 'O hortifruti é ótimo e fica pertinho de casa. Recomendo!',
      rating: 5
    }
  ],

  hours: [
    { days: 'Segunda a sábado', hours: '07h às 21h' },
    { days: 'Domingo', hours: '07h às 13h' }
  ],

  whatsappMessage: 'Olá! Gostaria de saber as ofertas do Mercado Parati.'
};
