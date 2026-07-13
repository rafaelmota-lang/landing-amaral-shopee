import { useState } from 'react';

const faqs = [
  {
    q: 'É possível recorrer judicialmente da suspensão da Shopee?',
    a: 'Sim. Tanto em casos de suspensão da conta quanto de retenção de saldo, é possível questionar judicialmente a fundamentação e a proporcionalidade da punição — especialmente quando a plataforma não apresenta o motivo de forma clara ou não oferece chance real de defesa.',
  },
  {
    q: 'E se a Shopee tiver retido o meu saldo?',
    a: 'O saldo das vendas já realizadas é seu. Em ação judicial, é possível pleitear a liberação do valor retido, com correção monetária. Quando cabível, também é possível pedir indenização pelos prejuízos causados pela paralisação das vendas.',
  },
  {
    q: 'Quanto tempo costuma levar um caso desses?',
    a: 'Cada caso é único e o prazo depende da complexidade, do juízo competente e da documentação apresentada. Em pedidos liminares, busca-se uma análise mais célere em razão da urgência, mas não existe prazo garantido — a decisão é sempre do Poder Judiciário.',
  },
  {
    q: 'Preciso ter certeza de que não cometi nenhuma infração?',
    a: 'Não. Mesmo quando houve alguma falha do vendedor, é possível avaliar se a punição aplicada pela plataforma foi proporcional. Frequentemente as suspensões são desproporcionais às infrações alegadas — e isso pode ser questionado.',
  },
  {
    q: 'Atendem clientes em todo o Brasil?',
    a: 'Sim. Atuamos em todo o território nacional de forma 100% remota. Toda a documentação é enviada digitalmente e as audiências, quando necessárias, são realizadas online.',
  },
  {
    q: 'Como funciona o pagamento dos honorários?',
    a: 'Trabalhamos com modelos transparentes, ajustados ao perfil do seu caso. Na primeira conversa, apresentamos o orçamento de forma clara e sem surpresas.',
  },
];

export function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section faq">
      <div className="wrap">
        <div style={{ textAlign: 'center', marginBottom: 16 }}>
          <span className="eyebrow">Perguntas frequentes</span>
        </div>
        <h2 className="section-title">Tire suas dúvidas antes de começar</h2>
        <div className="faq-list" style={{ marginTop: 48 }}>
          {faqs.map((f, i) => {
            const isOpen = open === i;
            const id = `faq-${i}`;
            return (
              <div className="faq-item" key={i} data-open={isOpen}>
                <button
                  type="button"
                  className="faq-q"
                  aria-expanded={isOpen}
                  aria-controls={id}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span>{f.q}</span>
                  <span className="plus" aria-hidden="true">+</span>
                </button>
                <div className="faq-a" id={id} role="region">
                  <p style={{ paddingTop: 4 }}>{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
