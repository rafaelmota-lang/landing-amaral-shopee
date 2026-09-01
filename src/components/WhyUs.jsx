import { Icons, StarsRow } from './Icons.jsx';
import { useWhatsAppLink } from '../useWhatsAppLink.js';

export function WhyUs() {
  const whatsappLink = useWhatsAppLink();
  const cards = [
    {
      stat: '+',
      label: 'Especialização',
      title: 'Entendemos de marketplaces',
      text: 'Conhecemos as particularidades dos processos contra a Shopee e outros marketplaces, a linguagem que as plataformas utilizam e os caminhos jurídicos para questionar bloqueios e retenções.',
    },
    {
      stat: '10k+',
      label: 'Clientes atendidos',
      title: 'Mais de 10 mil clientes atendidos',
      text: 'Nossa equipe não vai se espantar com o seu caso e saberá exatamente o que fazer. São mais de 10 mil clientes atendidos em todo o Brasil.',
    },
    {
      stat: '5,0',
      label: 'Nota Google',
      title: 'Nota 5,0 no Google',
      text: 'Nosso escritório tem nota 5,0 nas avaliações do Google, com mais de 390 avaliações verificadas. Você pode conferir o perfil oficial antes mesmo de falar conosco.',
    },
  ];
  return (
    <section className="section why-us">
      <div className="wrap">
        <h2 className="section-title">
          Precisa de um advogado especializado em marketplaces?<br />
          <span className="accent-orange">Saiba por que escolher a Amaral</span>
        </h2>
        <div className="why-grid">
          {cards.map((c, i) => (
            <div className="why-card" key={i}>
              <div className="corner"></div>
              <div className="stat">{c.stat}</div>
              <div className="stat-label">{c.label}</div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
        <div className="cta-block">
          <a id="lead" href={whatsappLink} target="_blank" rel="noopener" className="cta">Comece agora <Icons.Arrow /></a>
          <StarsRow />
        </div>
      </div>
    </section>
  );
}
