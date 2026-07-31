import bikeBlue from './assets/bike-k22-blue.webp'
import scooterRed from './assets/scooter-wx-red.webp'
import max22 from './assets/max22-silver.webp'
import k22Side from './assets/k22-blue-side.webp'
import k22Red from './assets/k22-red.webp'
import tankM6 from './assets/tank-m6.webp'
import tricicloZig from './assets/catalog/triciclo-zig-marrom.webp'
import bikeFat from './assets/catalog/bike-fat-aro20.webp'
import scooterAuto from './assets/catalog/scooter-auto-1000w.webp'
import scooterA4 from './assets/catalog/scooter-a4.webp'
import scooterA3 from './assets/catalog/scooter-a3.webp'
import scooter500 from './assets/catalog/scooter-500w.webp'
import tricicloVanshida from './assets/catalog/triciclo-vanshida.webp'
import scooterBrisa from './assets/catalog/scooter-brisa.webp'
import patinete1000 from './assets/catalog/patinete-1000w.webp'
import angelAmarela from './assets/catalog/angel-amarela.webp'

export type ProductSegment = 'Bikes' | 'Scooters' | 'Triciclos' | 'Patinetes'

export type Product = {
  id: string
  name: string
  category: string
  segment: ProductSegment
  price: string
  oldPrice?: string
  image: string
  badge?: string
  summary: string
  features: string[]
}

const catalogProducts: Product[] = [
  {
    id: 'k22-2a',
    name: 'K22 2A',
    category: 'Scooter elétrica',
    segment: 'Scooters',
    price: 'a partir de R$ 8.900',
    image: bikeBlue,
    badge: 'Destaque',
    summary: 'Visual marcante, conforto para o dia a dia e uma pilotagem que chama atenção.',
    features: ['Várias cores', 'Banco amplo', 'Uso urbano'],
  },
  {
    id: 'wx-06-1000w',
    name: 'WX-06 1.000W',
    category: 'Scooter elétrica',
    segment: 'Scooters',
    price: 'R$ 5.900',
    image: scooterRed,
    summary: 'Compacta, prática e preparada para deslocamentos curtos com economia.',
    features: ['1.000W', 'Cesto frontal', 'Baixo custo de uso'],
  },
  {
    id: 'max-22',
    name: 'MAX 22',
    category: 'Scooter premium',
    segment: 'Scooters',
    price: 'R$ 10.900',
    image: max22,
    badge: 'Potência e presença',
    summary: 'Acabamento robusto e posição confortável para quem quer subir de categoria.',
    features: ['Motor 1.000W', 'Freio a disco', 'Bateria removível'],
  },
  {
    id: 'k22-azul',
    name: 'K22 Azul',
    category: 'Scooter elétrica',
    segment: 'Scooters',
    price: 'Consulte condições',
    image: k22Side,
    summary: 'Uma opção versátil para mobilidade urbana com estilo exclusivo.',
    features: ['Painel digital', 'Conforto', 'Várias cores'],
  },
  {
    id: 'k22-vermelha',
    name: 'K22 Vermelha',
    category: 'Scooter elétrica',
    segment: 'Scooters',
    price: 'Consulte condições',
    image: k22Red,
    summary: 'Design retrô, presença forte e uma experiência diferente no trânsito.',
    features: ['Banco amplo', 'Farol em LED', 'Uso urbano'],
  },
  {
    id: 'tank-m6',
    name: 'Tank M6',
    category: 'Scooter elétrica',
    segment: 'Scooters',
    price: 'R$ 10.900',
    image: tankM6,
    badge: 'Linha robusta',
    summary: 'Estrutura reforçada, conforto e componentes pensados para uso frequente.',
    features: ['Bateria 60V/20Ah', 'Freios hidráulicos', 'Alarme'],
  },
  {
    id: 'fat-aro-20',
    name: 'Fat Aro 20',
    category: 'Bicicleta elétrica',
    segment: 'Bikes',
    price: 'R$ 8.900',
    image: bikeFat,
    badge: 'Até 55 km por carga',
    summary: 'Pneus largos, pedal assistido e conjunto Shimano para um uso urbano mais versátil.',
    features: ['Motor 750W', 'Bateria 48V', 'Suporta até 150 kg', '7 velocidades'],
  },
  {
    id: 'scooter-auto-1000w',
    name: 'Auto 1.000W',
    category: 'Scooter elétrica',
    segment: 'Scooters',
    price: 'R$ 12.500',
    image: scooterAuto,
    badge: 'GPS integrado',
    summary: 'Modelo moderno e confortável, com recursos de conectividade e bateria removível.',
    features: ['Motor 1.000W', 'GPS e Bluetooth', 'Cartão NFC', 'Baú'],
  },
  {
    id: 'scooter-a4',
    name: 'Scooter A4',
    category: 'Scooter elétrica',
    segment: 'Scooters',
    price: 'R$ 8.900',
    image: scooterA4,
    summary: 'Disponível em branco e preto, com visual limpo e estrutura para uso diário.',
    features: ['Motor 1.000W', 'Bateria removível', 'NFC', 'Suporta até 200 kg'],
  },
  {
    id: 'scooter-a3',
    name: 'Scooter A3',
    category: 'Scooter elétrica',
    segment: 'Scooters',
    price: 'R$ 8.900',
    image: scooterA3,
    summary: 'Compacta e funcional, com baú, porta-treco e três níveis de potência.',
    features: ['Motor 1.000W', 'Bateria removível', 'Baú', 'Suporta até 200 kg'],
  },
  {
    id: 'scooter-500w',
    name: 'Scooter 500W',
    category: 'Scooter elétrica',
    segment: 'Scooters',
    price: 'R$ 4.900',
    image: scooter500,
    badge: 'Custo-benefício',
    summary: 'Uma alternativa leve para pequenos deslocamentos, com conectividade e praticidade.',
    features: ['Motor 500W', 'Bluetooth', 'Suporte para celular', '3 velocidades'],
  },
  {
    id: 'triciclo-zig-marrom',
    name: 'Triciclo Zig',
    category: 'Triciclo elétrico',
    segment: 'Triciclos',
    price: 'R$ 8.900',
    oldPrice: 'R$ 10.900',
    image: tricicloZig,
    badge: '3 lugares',
    summary: 'Mais estabilidade, espaço e praticidade para quem busca conforto nos trajetos do dia a dia.',
    features: ['Motor 800W', 'Cestas dianteira e traseira', 'Marcha ré', 'Pulseira NFC'],
  },
  {
    id: 'triciclo-vanshida',
    name: 'Vanshida 3 Lugares',
    category: 'Triciclo elétrico',
    segment: 'Triciclos',
    price: 'R$ 10.900',
    image: tricicloVanshida,
    badge: 'Linha premium',
    summary: 'Triciclo espaçoso com boa capacidade de carga e autonomia para percursos urbanos.',
    features: ['Motor 1.000W', 'Suporta até 200 kg', 'Marcha ré', 'Até 50 km*'],
  },
  {
    id: 'scooter-brisa',
    name: 'Scooter Brisa',
    category: 'Scooter elétrica',
    segment: 'Scooters',
    price: 'R$ 8.900',
    image: scooterBrisa,
    summary: 'Conjunto completo para o cotidiano, com conectividade e compartimentos de apoio.',
    features: ['Motor 1.000W', 'Bateria 60V/20Ah', 'USB e Bluetooth', 'NFC'],
  },
  {
    id: 'patinete-1000w',
    name: 'Patinete 1.000W',
    category: 'Patinete elétrico',
    segment: 'Patinetes',
    price: 'R$ 5.500',
    oldPrice: 'R$ 6.400',
    image: patinete1000,
    badge: 'Dobrável',
    summary: 'Estrutura dobrável, suspensão dianteira e traseira e quatro modos de velocidade.',
    features: ['Motor 1.000W', 'Freio a disco', 'Até 25 km/h', 'Suporta até 120 kg'],
  },
  {
    id: 'angel-amarela',
    name: 'Angel Amarela',
    category: 'Scooter elétrica',
    segment: 'Scooters',
    price: 'R$ 8.900',
    oldPrice: 'R$ 10.900',
    image: angelAmarela,
    badge: 'Oferta',
    summary: 'Cor vibrante, bateria removível e recursos úteis para uma condução mais prática.',
    features: ['Motor 1.000W', 'Marcha ré', 'Bateria removível', 'Suporta até 180 kg'],
  },
]

const productOrder = [
  'fat-aro-20',
  'triciclo-zig-marrom',
  'scooter-auto-1000w',
  'k22-2a',
  'patinete-1000w',
  'triciclo-vanshida',
  'max-22',
  'scooter-500w',
  'angel-amarela',
  'scooter-brisa',
  'scooter-a4',
  'scooter-a3',
  'tank-m6',
  'k22-azul',
  'k22-vermelha',
  'wx-06-1000w',
]

export const products = [...catalogProducts].sort(
  (first, second) => productOrder.indexOf(first.id) - productOrder.indexOf(second.id),
)

