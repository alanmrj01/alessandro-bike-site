/**
 * CONFIGURAÇÃO CENTRAL DE CONTATO
 * Altere somente WHATSAPP_NUMBER para trocar o número usado em todo o site.
 * Formato: DDI + DDD + número, apenas dígitos.
 */
export const WHATSAPP_NUMBER = '5512988951423'

export function createWhatsAppLink(message = 'Olá, vim pelo site da Alessandro Bike e quero atendimento.') {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const business = {
  instagram: 'https://www.instagram.com/alessandro.bikes/',
  whatsapp: {
    main: createWhatsAppLink(),
    caragua: createWhatsAppLink('Olá! Vim pelo site e quero atendimento da Alessandro Bike em Caraguatatuba.'),
    saoJose: createWhatsAppLink('Olá! Vim pelo site e quero atendimento da Alessandro Bike em São José dos Campos.'),
  },
  maps: {
    caragua:
      'https://www.google.com/maps/search/?api=1&query=Av.%20Ver.%20Aristides%20Anizio%20dos%20Santos%2C%201072%20-%20Indai%C3%A1%2C%20Caraguatatuba%20-%20SP%2C%2011665-150',
    saoJose:
      'https://www.google.com/maps/search/?api=1&query=Alessandro%20Bike%20O%20Especialista%20em%20Bikes%20Motorizadas%20El%C3%A9tricas%20e%20Mobiletes%2C%20Av.%20Pres.%20Tancredo%20Neves%2C%205592%20-%20Parque%20Novo%20Horizonte%2C%20S%C3%A3o%20Jos%C3%A9%20dos%20Campos%20-%20SP%2C%2012225-731',
  },
  addresses: {
    caragua: 'Av. Ver. Aristides Anizio dos Santos, 1072 — Indaiá, Caraguatatuba — SP, 11665-150',
    saoJose: 'Av. Pres. Tancredo Neves, 5592 — Parque Novo Horizonte, São José dos Campos — SP, 12225-731',
  },
}
