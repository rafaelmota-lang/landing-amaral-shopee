// De onde veio o visitante. Existe porque o escritorio NAO usa GA4: o unico
// marcador de origem que sobrevive ate o atendimento e o texto da primeira
// mensagem do WhatsApp.
export const ORIGENS = {
  google: { tag: '#Google', rotulo: 'Google Ads' },
  meta:   { tag: '#Meta',   rotulo: 'Meta Ads' },
  site:   { tag: '#Site',   rotulo: 'raiz / organico' },
};

export function detectarOrigem() {
  // No prerender nao existe location: a origem vem do build (prerender.mjs).
  if (typeof location === 'undefined') {
    return (typeof globalThis !== 'undefined' && globalThis.__ORIGEM__) || 'site';
  }
  try {
    const p = (location.pathname || '').toLowerCase();
    if (p.startsWith('/google')) return 'google';
    if (p.startsWith('/meta')) return 'meta';
    const src = new URLSearchParams(location.search).get('src');
    if (src && ORIGENS[src.toLowerCase()]) return src.toLowerCase();
  } catch (e) {}
  return 'site';
}
