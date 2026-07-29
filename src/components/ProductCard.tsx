import { ArrowUpRight, Check } from 'lucide-react'
import type { Product } from '../data'
import { business } from '../config'

export function ProductCard({ product }: { product: Product }) {
  const message = encodeURIComponent(`Olá! Vi a ${product.name} no site e gostaria de confirmar disponibilidade e condições.`)
  const href = `${business.whatsapp.main.split('?')[0]}?text=${message}`

  return (
    <article className="product-card">
      <div className="product-card__media">
        {product.badge && <span className="product-card__badge">{product.badge}</span>}
        <img src={product.image} alt={`${product.name} — ${product.category}`} loading="lazy" />
        <div className="product-card__glow" />
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
          <strong>{product.price}</strong>
          <a href={href} target="_blank" rel="noreferrer" aria-label={`Consultar ${product.name} no WhatsApp`}>
            Consultar <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </article>
  )
}
