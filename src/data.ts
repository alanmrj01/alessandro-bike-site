import bikeBlue from './assets/bike-k22-blue.webp'
import scooterRed from './assets/scooter-wx-red.webp'
import max22 from './assets/max22-silver.webp'
import k22Side from './assets/k22-blue-side.webp'
import k22Red from './assets/k22-red.webp'
import tankM6 from './assets/tank-m6.webp'

export type Product = {
  name: string
  category: string
  price: string
  image: string
  badge?: string
  summary: string
  features: string[]
}

export const products: Product[] = [
  {
    name: 'K22 2A',
    category: 'Scooter elétrica',
    price: 'a partir de R$ 8.900',
    image: bikeBlue,
    badge: 'Destaque',
    summary: 'Visual marcante, conforto para o dia a dia e uma pilotagem que chama atenção.',
    features: ['Várias cores', 'Banco amplo', 'Uso urbano'],
  },
  {
    name: 'WX-06 1.000W',
    category: 'Scooter elétrica',
    price: 'R$ 5.900',
    image: scooterRed,
    summary: 'Compacta, prática e preparada para deslocamentos curtos com economia.',
    features: ['1.000W', 'Cesto frontal', 'Baixo custo de uso'],
  },
  {
    name: 'MAX 22',
    category: 'Scooter premium',
    price: 'R$ 10.900',
    image: max22,
    badge: 'Potência e presença',
    summary: 'Acabamento robusto e posição confortável para quem quer subir de categoria.',
    features: ['Motor 1.000W', 'Freio a disco', 'Bateria removível'],
  },
  {
    name: 'K22 Azul',
    category: 'Scooter elétrica',
    price: 'consulte condições',
    image: k22Side,
    summary: 'Uma opção versátil para mobilidade urbana com estilo exclusivo.',
    features: ['Painel digital', 'Conforto', 'Várias cores'],
  },
  {
    name: 'K22 Vermelha',
    category: 'Scooter elétrica',
    price: 'consulte condições',
    image: k22Red,
    summary: 'Design retrô, presença forte e uma experiência diferente no trânsito.',
    features: ['Banco amplo', 'Farol em LED', 'Uso urbano'],
  },
  {
    name: 'Tank M6',
    category: 'Scooter elétrica',
    price: 'R$ 10.900',
    image: tankM6,
    badge: 'Linha robusta',
    summary: 'Estrutura reforçada, conforto e componentes pensados para uso frequente.',
    features: ['Bateria 60V/20Ah', 'Freios hidráulicos', 'Alarme'],
  },
]
