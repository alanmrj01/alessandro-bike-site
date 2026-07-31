import { type PointerEvent, useRef } from 'react'
import { ArrowUpRight, Check } from 'lucide-react'
import type { Product } from '../data'
import { createWhatsAppLink } from '../config'

type ProductCardProps = {
  product: Product
  index: number
  total: number
}

export function ProductCard({ product, index, total }: ProductCardProps) {
  const cardRef = useRef<HTMLElement>(null)
  const href = createWhatsAppLink(`Olá! Vi a ${product.name} no site e gostaria de confirmar disponibilidade e condições.`)
  const position = String(index + 1).padStart(2, '0')
  const amount = String(total).padStart(2, '0')

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType === 'touch') return
    const card = cardRef.current
    if (!card) return

    const bounds = card.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width
    const y = (event.clientY - bounds.top) / bounds.height
    card.style.setProperty('--rotate-x', `${(0.5 - y) * 7}deg`)
    card.style.setProperty('--rotate-y', `${(x - 0.5) * 9}deg`)
    card.style.setProperty('--shine-x', `${x * 100}%`)
    card.style.setProperty('--shine-y', `${y * 100}%`)
  }

  const resetTilt = () => {
    const card = cardRef.current
    if (!card) return
    card.style.setProperty('--rotate-x', '0deg')
    card.style.setProperty('--rotate-y', '0deg')
  }

  return (
    <article
      ref={cardRef}
      className="product-card"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
    >
      <div className="product-card__shine" aria-hidden="true" />
      <div className="product-card__media">
        {product.badge && <span className="product-card__badge">{product.badge}</span>}
        <span className="product-card__counter" aria-label={`Modelo ${index + 1} de ${total}`}>{position}<i>/</i>{amount}</span>
        <img
          className="product-card__backdrop"
          src={product.image}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
        />
        <img
          className="product-card__product"
          src={product.image}
          alt={`${product.name} — ${product.category}`}
          loading="lazy"
          decoding="async"
        />
        <div className="product-card__glow" />
        <span className="product-card__index" aria-hidden="true">AB</span>
      </div>
      <div className="product-card__body">
        <p className="eyebrow">{product.category}</p>
        <h3>{product.name}</h3>
        <p className="product-card__summary">{product.summary}</p>
        <div className="product-card__features">
          {product.features.map((feature) => (
            <span key={feature}><Check size={13} /> {feature}</span>
          ))}
        </div>
        <div className="product-card__footer">
          <div className="product-card__price">
            {product.oldPrice && <del>{product.oldPrice}</del>}
            <strong>{product.price}</strong>
          </div>
          <a href={href} target="_blank" rel="noreferrer" aria-label={`Consultar ${product.name} no WhatsApp`}>
            Consultar <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </article>
  )
}
