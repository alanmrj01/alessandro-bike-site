# Alessandro Bike — site React

Landing page premium e mobile-first para venda e manutenção de bicicletas elétricas, scooters, motorizadas e mobiletes.

## Tecnologias

- React + TypeScript
- Vite
- CSS responsivo sem framework
- Lucide React para ícones
- parallax leve controlado por scroll
- interações 3D e hover em dispositivos compatíveis
- navegação horizontal mobile com scroll-snap

## Executar

```bash
npm install
npm run dev
```

## Gerar produção

```bash
npm run build
```

A pasta `dist/` gerada pode ser publicada no Netlify, Vercel ou em qualquer hospedagem estática.

## Alterar o WhatsApp

Todo o site utiliza um único número centralizado em:

`src/config.ts`

Altere somente esta constante, mantendo DDI + DDD + número e usando apenas dígitos:

```ts
export const WHATSAPP_NUMBER = '5512988951423'
```

Os textos enviados ao WhatsApp são montados automaticamente pela função `createWhatsAppLink`.

## Localizações configuradas

### São José dos Campos

Alessandro Bike — O Especialista em Bikes, Motorizadas, Elétricas e Mobiletes  
Av. Pres. Tancredo Neves, 5592 — Parque Novo Horizonte, São José dos Campos — SP, 12225-731

### Caraguatatuba

Av. Ver. Aristides Anizio dos Santos, 1072 — Indaiá, Caraguatatuba — SP, 11665-150

Os links de rota também ficam centralizados em `src/config.ts`.

## Direção visual

A versão foi desenhada prioritariamente para celular:

1. hero em tela cheia com parallax e camadas de movimento;
2. benefícios em trilho horizontal no mobile;
3. showroom de produtos com scroll-snap;
4. cards com profundidade, brilho e tilt no desktop;
5. imagens com parallax leve durante a rolagem;
6. faixas cinéticas e elementos de profundidade;
7. CTA persistente para WhatsApp;
8. suporte a `prefers-reduced-motion`.

## Conteúdo comercial

A página usa conversão assistida: apresenta os produtos, reduz inseguranças com oficina e pós-venda e leva o visitante ao atendimento no WhatsApp. Preços e disponibilidade devem ser confirmados com a loja antes da publicação.
