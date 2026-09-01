import { Icons, StarsRow } from './Icons.jsx';
import { useWhatsAppLink } from '../useWhatsAppLink.js';

export function Banner() {
  const whatsappLink = useWhatsAppLink();
  const items = [
    {
      icon: <Icons.Contract />,
      text: <><strong>A Shopee suspende contas sem explicar o motivo com clareza.</strong> Muitas vezes o vendedor recebe apenas uma notificação genérica de "violação das políticas", sem saber exatamente qual regra teria sido descumprida — o que dificulta a defesa.</>,
    },
    {
      icon: <Icons.Robot />,
      text: <><strong>A moderação é automatizada e comete injustiças.</strong> Quem interpreta o seu comportamento na plataforma é um sistema autônomo, que pode aplicar punições por "entender" erroneamente que você cometeu uma infração.</>,
    },
    {
      icon: <Icons.Speed />,
      text: <><strong>Mesmo contas com boa reputação e sem reclamações podem ser suspensas.</strong> Pontos de penalidade, denúncias indevidas de concorrentes e erros do algoritmo atingem até vendedores com anos de histórico limpo.</>,
    },
    {
      icon: <Icons.Box />,
      text: <>Se a Shopee <strong>não informou de forma clara o motivo da sua suspensão</strong> ou está retendo o seu saldo, é possível questionar a punição judicialmente.</>,
    },
  ];
  return (
    <section className="orange-band">
      <div className="wrap">
        <h2>Bloqueios indevidos acontecem todos os dias com vendedores da Shopee, mas você pode recorrer</h2>
        <div className="orange-list">
          {items.map((it, i) => (
            <div className="orange-item" key={i}>
              <div className="ic">{it.icon}</div>
              <p>{it.text}</p>
            </div>
          ))}
        </div>
        <div className="cta-block">
          <a id="lead" href={whatsappLink} target="_blank" rel="noopener" className="cta">Fale com um especialista em Shopee <Icons.Arrow /></a>
          <StarsRow light />
        </div>
      </div>
    </section>
  );
}
