# Análise e direção do site

## O que a comunicação da Alessandro Bike transmite

O material original apresenta uma marca local, próxima e prática, com alguns sinais fortes:

- identidade preta e amarela de alto contraste;
- produtos como protagonistas;
- comunicação direta sobre preço, potência e disponibilidade;
- presença da equipe, reforçando atendimento humano;
- clientes e vendas reais como prova social;
- autoridade em manutenção especializada;
- variedade entre elétricas, scooters, motorizadas, mobiletes, peças e oficina;
- presença regional no Litoral Norte e Vale do Paraíba.

## Estratégia escolhida: conversão assistida

A empresa já possui público e investe em marketing. Por isso, o site não precisa agir somente como peça de atração. Ao mesmo tempo, uma bike ou scooter elétrica normalmente exige comparação, orientação, manutenção e segurança antes da decisão.

A página segue este caminho:

1. impressiona e comunica profissionalismo;
2. apresenta liberdade, economia e mobilidade;
3. permite descoberta visual dos modelos;
4. reduz risco por meio da oficina e do pós-venda;
5. reforça proximidade com provas reais;
6. converte pelo WhatsApp com mensagens contextualizadas.

## Direção mobile-first de alto impacto

A nova versão foi refeita com prioridade real para celulares:

- hero de tela cheia com fotografia vertical;
- parallax de baixo custo durante a rolagem;
- camadas de grade, luz, órbitas e linhas de velocidade;
- cards de benefícios e produtos com trilho horizontal e scroll-snap;
- efeito 3D, brilho e hover somente onde o dispositivo suporta;
- imagens com movimento independente em seções-chave;
- menu mobile em tela cheia;
- indicador de progresso de leitura;
- CTA flutuante para WhatsApp;
- animações reduzidas quando o usuário ativa `prefers-reduced-motion`.

## Configurações centralizadas

Em `src/config.ts` ficam:

- o único número de WhatsApp utilizado em todo o site;
- os textos de atendimento de cada contexto;
- os endereços completos;
- os links de rota para as duas lojas;
- o Instagram.

Isso evita números diferentes espalhados pelos componentes e facilita futuras alterações.
