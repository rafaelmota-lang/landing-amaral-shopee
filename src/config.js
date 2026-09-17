// Roteamento de WhatsApp da LP da Shopee.
//
// ANTES (ate 2026-09-01): os 6 CTAs iam para a pagina de captura do Leadster
// e, pior, para o fluxo do MERCADO LIVRE (gwesAHX1JB801Qre), com um TODO
// pendente de criar um fluxo proprio. O formulario nativo sorteava entre
// 5511972021019 e 5511912611616, e os DOIS estavam ARQUIVADOS e
// DESCONECTADOS no Digisac: 100% de quem preenchia caia no vazio.
// Conferido via GET /services em 2026-09-01.
//
// AGORA, por decisao do dono: sem formulario e sem pagina de captura. Todo
// CTA vai direto para o WhatsApp do canal "Amaral e Bohrer Advogados -
// Mercado Livre" do Fluxo Juridico, o mesmo da LP do ML (mesma tese, mesma
// fila de atendimento).
//
// COMO SEPARAR AS DUAS LPs, ja que o numero e o mesmo: pelo texto da primeira
// mensagem. A da Shopee diz "conta da Shopee", a do ML diz "conta do Mercado
// Livre", e as duas carregam a tag de origem (#Google / #Meta).

export const WHATSAPP_POOL = [
  // Fluxo Juridico, os dois canais de redes sociais.
  { numero: '5511926878173', peso: 1 }, // "Z-API - Redes Sociais"
  { numero: '5511926878630', peso: 1 }, // "Canal Rede Social" (coexistencia)

  // ---------------------------------------------------------------------
  // HISTORICO - ler antes de acrescentar numero.
  //
  // 2026-09-17: o 8173 VOLTOU do banimento e entra de novo no pool.
  // 2026-09-16: 8173 removido, banido pelo WhatsApp. Naquele dia a API do FJ
  //   seguiu reportando o canal como "connected" com o numero ja banido: o
  //   painel nao denuncia banimento, e o monitor deu "ok" para numero morto.
  //
  // ANTES DE INCLUIR OU REATIVAR QUALQUER UM: conferir que esta conectado,
  // nao arquivado E nao banido. So mandando mensagem de teste da para saber.
  // ---------------------------------------------------------------------
];

import { ORIGENS, detectarOrigem } from './origem.js';

export const ASSUNTO = 'Quero recuperar minha conta da Shopee';

export const MENSAGEM_INICIAL = `${ORIGENS.site.tag} - ${ASSUNTO}`;

const CHAVE_STICKY = 'ab_shopee_wpp_v3';

export function escolherNumero() {
  try {
    const salvo = localStorage.getItem(CHAVE_STICKY);
    const jaEscolhido = WHATSAPP_POOL.find((p) => p.numero === salvo);
    if (jaEscolhido) return jaEscolhido;
  } catch (e) {}

  const total = WHATSAPP_POOL.reduce((s, p) => s + p.peso, 0);
  let r = Math.random() * total;
  const escolhido = WHATSAPP_POOL.find((p) => (r -= p.peso) < 0) || WHATSAPP_POOL[0];

  try { localStorage.setItem(CHAVE_STICKY, escolhido.numero); } catch (e) {}
  return escolhido;
}

export function montarMensagem(extra) {
  const origem = detectarOrigem();
  const tag = (ORIGENS[origem] || ORIGENS.site).tag;
  return `${tag} - ${extra || ASSUNTO}`;
}

export function montarLink(numero, extra) {
  return `https://wa.me/${numero}?text=${encodeURIComponent(montarMensagem(extra))}`;
}

// E FUNCAO, nao const: a mensagem depende da origem, e a origem so e conhecida
// na hora do render. Como const, seria congelada no import e as tres paginas
// sairiam com a mesma tag. Era esse o papel do antigo LEAD_URL, que era const.
export function linkPadrao() {
  return montarLink(WHATSAPP_POOL[0].numero);
}
