import { useEffect, useState } from 'react';
import { linkPadrao, escolherNumero, montarLink } from './config.js';

// O sorteio roda no useEffect, NUNCA no render: no prerender ele aconteceria
// uma vez no build e o mesmo numero ficaria congelado no HTML para todo mundo.
export function useWhatsAppLink() {
  const [href, setHref] = useState(linkPadrao);
  useEffect(() => { setHref(montarLink(escolherNumero().numero)); }, []);
  return href;
}
