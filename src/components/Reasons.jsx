import { Icons, StarsRow } from './Icons.jsx';
import { useWhatsAppLink } from '../useWhatsAppLink.js';

export function Reasons() {
  const whatsappLink = useWhatsAppLink();
  const cards = [
    {
      icon: <Icons.FileLine />,
      title: 'Violação alegada das políticas',
      text: 'A Shopee alega descumprimento das políticas de venda — produtos proibidos, "pedidos falsos", propriedade intelectual — muitas vezes sem apresentar provas concretas ao vendedor.',
    },
    {
      icon: <Icons.Cube />,
      title: 'Acúmulo de pontos de penalidade',
      text: 'O sistema de pontos da Shopee pode punir a loja por atrasos logísticos, cancelamentos e reclamações que nem sempre são culpa do vendedor — e o bloqueio vem sem chance real de defesa.',
    },
    {
      icon: <Icons.Lock />,
      title: 'Saldo retido pela plataforma',
      text: 'Além de suspender a conta, a Shopee costuma reter o saldo das vendas já realizadas. Esse valor é seu — e a retenção prolongada e sem justificativa clara pode ser questionada na justiça.',
    },
  ];
  return (
    <section className="section reasons">
      <div className="wrap">
        <h2 className="section-title">
          Por que sua conta foi suspensa<br />
          <span className="accent-orange">(e o que um advogado pode fazer a respeito)</span>
        </h2>
        <div className="reason-grid">
          {cards.map((c, i) => (
            <div className="reason-card" key={i}>
              <div className="num">0{i + 1}</div>
              <div className="ic">{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
        <p className="pre-cta">Sente que sofreu uma suspensão injusta?</p>
        <div className="cta-block" style={{ marginTop: 0 }}>
          <a id="lead" href={whatsappLink} target="_blank" rel="noopener" className="cta">Converse sobre o seu caso <Icons.Arrow /></a>
          <StarsRow />
        </div>
      </div>
    </section>
  );
}
