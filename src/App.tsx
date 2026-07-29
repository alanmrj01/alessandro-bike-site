import { useEffect, useMemo, useState } from 'react'
import {
  ArrowRight,
  BatteryCharging,
  Bike,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock3,
  Gauge,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  MousePointer2,
  ShieldCheck,
  Sparkles,
  Wrench,
  X,
  Zap,
} from 'lucide-react'
import logo from './assets/logo-profile.webp'
import heroStore from './assets/hero-store.webp'
import serviceSpecialist from './assets/service-specialist.webp'
import saleProof from './assets/sale-proof.webp'
import saleProof2 from './assets/sale-proof-2.webp'
import scooterX15 from './assets/scooter-x15.webp'
import { business } from './config'
import { products } from './data'
import { MotionMedia } from './components/MotionMedia'
import { ProductCard } from './components/ProductCard'
import { Reveal } from './components/Reveal'

const nav = [
  ['Modelos', '#modelos'],
  ['Manutenção', '#manutencao'],
  ['Por que escolher', '#diferenciais'],
  ['Lojas', '#lojas'],
] as const

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [faqOpen, setFaqOpen] = useState<number | null>(0)
  const [scrollY, setScrollY] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const y = window.scrollY
        const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight)
        setScrollY(y)
        setScrollProgress(Math.min(1, y / maxScroll))
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const heroTransform = useMemo(
    () => `translate3d(0, ${Math.min(scrollY * 0.115, 96)}px, 0) scale(${1.08 + Math.min(scrollY / 12000, 0.035)})`,
    [scrollY],
  )

  const heroContentTransform = useMemo(
    () => `translate3d(0, ${Math.min(scrollY * -0.025, 0)}px, 0)`,
    [scrollY],
  )

  const faqs = [
    ['Preciso de habilitação?', 'As regras dependem da potência, velocidade e classificação do modelo. Antes da compra, nossa equipe orienta qual opção combina com seu uso e quais cuidados legais devem ser observados.'],
    ['Vocês fazem manutenção de scooters e bikes elétricas?', 'Sim. A Alessandro Bike trabalha com diagnóstico, revisão e reparos especializados, além de peças e acessórios.'],
    ['Posso comprar pelo WhatsApp?', 'Sim. Você recebe fotos, disponibilidade, condições e orientação para escolher o modelo mais adequado antes de ir à loja.'],
    ['Os valores do site são finais?', 'Os preços exibidos são referências do material atual e podem mudar conforme estoque, cor, bateria e condição de pagamento. Confirme sempre pelo WhatsApp.'],
  ]

  return (
    <div className="site-shell">
      <header className={`header ${scrollY > 24 ? 'is-scrolled' : ''}`}>
        <span className="header__progress" style={{ transform: `scaleX(${scrollProgress})` }} aria-hidden="true" />
        <a href="#inicio" className="brand" aria-label="Alessandro Bike — início">
          <img src={logo} alt="Logo Alessandro Bike" />
          <span><strong>Alessandro</strong><small>Bike</small></span>
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>

        <a className="header-cta" href={business.whatsapp.main} target="_blank" rel="noreferrer">
          <MessageCircle size={18} /> Falar com especialista
        </a>

        <button className="menu-button" onClick={() => setMenuOpen(true)} aria-label="Abrir menu">
          <Menu />
        </button>
      </header>

      {menuOpen && (
        <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="mobile-menu__orb" aria-hidden="true" />
          <button onClick={() => setMenuOpen(false)} aria-label="Fechar menu"><X /></button>
          <div className="mobile-menu__brand">
            <img src={logo} alt="Alessandro Bike" />
            <span>Mobilidade<br /><strong>em movimento.</strong></span>
          </div>
          <nav>
            {nav.map(([label, href], index) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                <small>0{index + 1}</small><span>{label}</span><ChevronRight />
              </a>
            ))}
          </nav>
          <a className="button button--yellow" href={business.whatsapp.main} target="_blank" rel="noreferrer">
            Chamar no WhatsApp <ArrowRight size={18} />
          </a>
        </div>
      )}

      <main>
        <section id="inicio" className="hero">
          <div className="hero__media" style={{ transform: heroTransform }}>
            <img src={heroStore} alt="Fachada e scooters da Alessandro Bike" />
          </div>
          <div className="hero__shade" />
          <div className="hero__grid" aria-hidden="true" />
          <div className="hero__speed-lines" aria-hidden="true" />
          <div className="hero__spotlight" aria-hidden="true" />
          <div className="hero__orbit hero__orbit--one" aria-hidden="true" />
          <div className="hero__orbit hero__orbit--two" aria-hidden="true" />

          <div className="hero__content" style={{ transform: heroContentTransform }}>
            <Reveal>
              <div className="hero__pill"><Zap size={14} /> Especialistas em mobilidade elétrica</div>
              <h1>Mais liberdade.<br /><span>Menos custo</span><br />no caminho.</h1>
              <p>Escolha sua bike elétrica ou scooter com orientação especializada, assistência técnica e atendimento perto de você.</p>
              <div className="hero__actions">
                <a className="button button--yellow button--premium" href={business.whatsapp.main} target="_blank" rel="noreferrer">
                  Encontrar meu modelo <ArrowRight size={18} />
                </a>
                <a className="button button--ghost" href="#modelos">Explorar modelos</a>
              </div>
              <div className="hero__trust">
                <span><CheckCircle2 size={17} /> Venda orientada</span>
                <span><CheckCircle2 size={17} /> Oficina especializada</span>
                <span><CheckCircle2 size={17} /> Duas unidades</span>
              </div>
            </Reveal>
          </div>

          <div className="hero__floating-card" aria-hidden="true">
            <span>ELÉTRICAS</span>
            <strong>Venda + oficina</strong>
            <small>Suporte antes e depois da compra</small>
          </div>

          <a href="#modelos" className="scroll-cue" aria-label="Ver modelos">
            <span>Deslize</span><ChevronDown />
          </a>
        </section>

        <section className="quick-benefits" aria-label="Benefícios">
          <Reveal className="quick-benefit"><BatteryCharging /><div><strong>Economia diária</strong><span>Recarregue e siga</span></div></Reveal>
          <Reveal className="quick-benefit" delay={80}><Wrench /><div><strong>Pós-venda local</strong><span>Oficina e peças</span></div></Reveal>
          <Reveal className="quick-benefit" delay={160}><ShieldCheck /><div><strong>Compra segura</strong><span>Orientação antes de decidir</span></div></Reveal>
        </section>

        <section id="modelos" className="section products-section">
          <Reveal className="section-heading section-heading--split">
            <div>
              <p className="eyebrow">Showroom Alessandro Bike</p>
              <h2>Escolha a elétrica que combina com o seu movimento.</h2>
            </div>
            <p>Compare estilos e fale com a equipe para confirmar autonomia, disponibilidade, condições e o modelo ideal para o seu trajeto.</p>
          </Reveal>

          <div className="mobile-swipe-hint"><MousePointer2 size={15} /> Arraste para explorar</div>

          <div className="product-grid">
            {products.map((product, index) => (
              <Reveal key={product.name} delay={(index % 3) * 80}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>

          <Reveal className="catalog-cta">
            <div><Sparkles /><span><strong>Estoque muda rápido.</strong> Receba as opções disponíveis hoje.</span></div>
            <a href={business.whatsapp.main} target="_blank" rel="noreferrer">Abrir catálogo no WhatsApp <ArrowRight /></a>
          </Reveal>
        </section>

        <section className="motion-banner" aria-label="Categorias atendidas">
          <div className="motion-banner__track" aria-hidden="true">
            <span>ELÉTRICAS</span><i>•</i><span>SCOOTERS</span><i>•</i><span>MOTORIZADAS</span><i>•</i><span>MOBILETES</span><i>•</i><span>MANUTENÇÃO</span><i>•</i>
            <span>ELÉTRICAS</span><i>•</i><span>SCOOTERS</span><i>•</i><span>MOTORIZADAS</span><i>•</i><span>MOBILETES</span><i>•</i><span>MANUTENÇÃO</span><i>•</i>
          </div>
        </section>

        <section id="manutencao" className="section service-section">
          <div className="service-visual">
            <MotionMedia className="service-visual__main" strength={42}>
              <img src={serviceSpecialist} alt="Especialista da Alessandro Bike falando sobre manutenção" loading="lazy" />
              <div className="service-visual__scan" aria-hidden="true" />
              <div className="service-visual__label"><Wrench /> Especialistas em elétricas</div>
            </MotionMedia>
            <Reveal className="service-visual__card">
              <Gauge />
              <strong>Diagnóstico antes do reparo</strong>
              <span>Mais clareza sobre o que sua bike realmente precisa.</span>
            </Reveal>
            <span className="service-visual__word" aria-hidden="true">OFICINA</span>
          </div>

          <Reveal className="service-copy">
            <p className="eyebrow">Manutenção especializada</p>
            <h2>Seu patrimônio merece mais que um conserto improvisado.</h2>
            <p>Bikes e scooters elétricas exigem diagnóstico correto, ferramentas adequadas e experiência com componentes eletrônicos e mecânicos.</p>
            <div className="service-list">
              <div><span>01</span><p><strong>Avaliação técnica</strong>Identificação clara da causa do problema.</p></div>
              <div><span>02</span><p><strong>Reparo responsável</strong>Serviço feito com peças adequadas e orientação.</p></div>
              <div><span>03</span><p><strong>Cuidados pós-serviço</strong>Você entende como preservar bateria e componentes.</p></div>
            </div>
            <a className="button button--yellow" href={business.whatsapp.main} target="_blank" rel="noreferrer">Agendar avaliação <ArrowRight /></a>
          </Reveal>
        </section>

        <section id="diferenciais" className="proof-section">
          <MotionMedia className="proof-section__media" strength={48}>
            <img src={scooterX15} alt="Scooter elétrica vermelha em exposição" loading="lazy" />
          </MotionMedia>
          <div className="proof-section__overlay" />
          <span className="proof-section__outline" aria-hidden="true">SUPORTE</span>
          <div className="proof-section__content section">
            <Reveal>
              <p className="eyebrow">Referência local</p>
              <h2>A compra não termina quando a scooter sai da loja.</h2>
              <p>O diferencial está em unir variedade, orientação, manutenção e uma relação próxima com quem escolheu rodar de um jeito novo.</p>
              <div className="metrics">
                <div><strong>2 unidades</strong><span>para atender você</span></div>
                <div><strong>Venda + oficina</strong><span>tudo no mesmo lugar</span></div>
                <div><strong>Atendimento humano</strong><span>antes e depois da compra</span></div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section community-section">
          <Reveal className="section-heading section-heading--center">
            <p className="eyebrow">Gente satisfeita movimenta a marca</p>
            <h2>Entrega, relacionamento e histórias reais.</h2>
            <p>A proximidade que já acontece nas redes continua no atendimento, na entrega e no pós-venda.</p>
          </Reveal>
          <div className="community-grid">
            <Reveal><MotionMedia strength={24}><img src={saleProof} alt="Registro de cliente e venda realizada" loading="lazy" /></MotionMedia></Reveal>
            <Reveal delay={100}><MotionMedia strength={-24}><img src={saleProof2} alt="Registro de cliente satisfeito com scooter" loading="lazy" /></MotionMedia></Reveal>
          </div>
          <a className="instagram-link" href={business.instagram} target="_blank" rel="noreferrer"><Instagram /> Acompanhar novidades no Instagram <ArrowRight /></a>
        </section>

        <section id="lojas" className="section locations-section">
          <Reveal className="section-heading section-heading--split">
            <div>
              <p className="eyebrow">Perto de você</p>
              <h2>Duas lojas. Um atendimento que entende sua escolha.</h2>
            </div>
            <p>Abra a rota correta, fale com a equipe e confirme disponibilidade antes de sair.</p>
          </Reveal>
          <div className="locations-grid">
            <Reveal className="location-card">
              <div className="location-card__number">01</div>
              <div className="location-card__icon"><MapPin /></div>
              <p className="eyebrow">Caraguatatuba</p>
              <h3>Loja Caraguá</h3>
              <p>{business.addresses.caragua}</p>
              <div className="location-card__hours"><Clock3 /> Seg. a sex. 8h30–18h · Sáb. 8h30–12h</div>
              <div className="location-card__actions">
                <a href={business.whatsapp.caragua} target="_blank" rel="noreferrer">WhatsApp</a>
                <a href={business.maps.caragua} target="_blank" rel="noreferrer">Como chegar</a>
              </div>
            </Reveal>
            <Reveal className="location-card location-card--yellow" delay={100}>
              <div className="location-card__number">02</div>
              <div className="location-card__icon"><MapPin /></div>
              <p className="eyebrow">São José dos Campos</p>
              <h3>Loja São José</h3>
              <p>{business.addresses.saoJose}</p>
              <div className="location-card__hours"><Clock3 /> Confirme o horário antes de sair</div>
              <div className="location-card__actions">
                <a href={business.whatsapp.saoJose} target="_blank" rel="noreferrer">WhatsApp</a>
                <a href={business.maps.saoJose} target="_blank" rel="noreferrer">Como chegar</a>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section faq-section">
          <Reveal className="section-heading">
            <p className="eyebrow">Antes de escolher</p>
            <h2>Dúvidas comuns, respostas diretas.</h2>
          </Reveal>
          <div className="faq-list">
            {faqs.map(([question, answer], index) => (
              <Reveal key={question} delay={index * 50}>
                <button className={`faq-item ${faqOpen === index ? 'is-open' : ''}`} onClick={() => setFaqOpen(faqOpen === index ? null : index)}>
                  <span>{question}</span><ChevronDown />
                  <p>{answer}</p>
                </button>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="final-cta">
          <div className="final-cta__shape" aria-hidden="true" />
          <div className="final-cta__lines" aria-hidden="true" />
          <Reveal>
            <Bike />
            <p className="eyebrow">Sua próxima mobilidade começa aqui</p>
            <h2>Conte sua rotina.<br />A gente ajuda a escolher.</h2>
            <p>Fale com a equipe e receba opções compatíveis com seu trajeto, orçamento e necessidade de uso.</p>
            <a className="button button--dark" href={business.whatsapp.main} target="_blank" rel="noreferrer">Falar no WhatsApp <ArrowRight /></a>
          </Reveal>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__brand"><img src={logo} alt="Alessandro Bike" /><div><strong>Alessandro Bike</strong><span>Elétricas, motorizadas e manutenção.</span></div></div>
        <div className="footer__links">{nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div>
        <a href={business.instagram} target="_blank" rel="noreferrer"><Instagram /> @alessandro.bikes</a>
        <p>Preços e disponibilidade sujeitos a alteração. Confirme condições diretamente com a loja.</p>
      </footer>

      <a className="floating-whatsapp" href={business.whatsapp.main} target="_blank" rel="noreferrer" aria-label="Falar com a Alessandro Bike no WhatsApp">
        <MessageCircle /><span>Falar agora</span>
      </a>
    </div>
  )
}

export default App
