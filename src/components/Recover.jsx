import { useState } from 'react';
import { Icons, StarsRow } from './Icons.jsx';
import { useWhatsAppLink } from '../useWhatsAppLink.js';
import ytThumb from '../assets/yt-thumb.webp';

const VIDEO_ID = 'WO1QCmPDvaE';

export function Recover() {
  const whatsappLink = useWhatsAppLink();
  const [playing, setPlaying] = useState(false);
  const steps = [
    {
      title: 'Tente resolver pelos canais oficiais da Shopee',
      paras: [
        'Use o Chat da Shopee e a Central de Ajuda do app para contestar a suspensão. Responda dentro do prazo qualquer solicitação de documentos ou esclarecimentos.',
        'Descreva o seu caso com a maior riqueza de detalhes possível e guarde o número de protocolo de cada atendimento.',
      ],
    },
    {
      title: 'Reúna provas de que tentou resolver amigavelmente',
      paras: [
        'Armazene "prints" das conversas, notificações de suspensão, e-mails e números de protocolo — tudo que comprove que você buscou solução direto com a plataforma.',
        'Se souber o motivo alegado, junte provas de que a alegação não procede. Por exemplo: se alegam venda de produto falsificado, guarde as notas fiscais dos seus fornecedores.',
      ],
    },
    {
      title: 'Busque plataformas de proteção ao consumidor',
      paras: [
        'Registre reclamação em portais como Reclame Aqui e Consumidor.gov.',
        'Ainda que a Shopee não responda ou não resolva, você acumula mais uma prova de que tentou a via amigável antes de acionar a justiça.',
      ],
    },
    {
      title: 'Entre com uma ação judicial',
      paras: [
        'Esgotadas as vias extrajudiciais, procure um advogado de confiança com experiência em marketplaces. Em casos com pedido liminar, solicita-se à justiça o restabelecimento da conta e a liberação do saldo retido.',
        'Apresente ao advogado toda a documentação reunida nos passos anteriores — quanto melhor a prova, mais forte a ação.',
      ],
    },
  ];
  return (
    <section className="section recover">
      <div className="wrap">
        <h2 className="section-title">Como recorrer da suspensão da sua conta?</h2>
        <div className="video-wrap">
          {playing ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?rel=0&playsinline=1&modestbranding=1&autoplay=1`}
              title="Como recorrer da suspensão da conta Shopee"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
            />
          ) : (
            <button
              type="button"
              className="video-poster"
              onClick={() => setPlaying(true)}
              aria-label="Assista: como recorrer da suspensão - reproduzir vídeo"
            >
              <img
                src={ytThumb}
                alt=""
                width="480"
                height="360"
                loading="lazy"
                decoding="async"
              />
              <span className="video-play" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
              </span>
              <span className="video-label">Assista: como recorrer da suspensão</span>
            </button>
          )}
        </div>
        <div className="steps-grid">
          {steps.map((s, i) => (
            <div className="step-card" key={i}>
              <div className="step-num">{i + 1}</div>
              <h3>{s.title}</h3>
              {s.paras.map((p, j) => <p key={j}>{p}</p>)}
            </div>
          ))}
        </div>
        <div className="cta-block">
          <a id="lead" href={whatsappLink} target="_blank" rel="noopener" className="cta">Receba orientação especializada <Icons.Arrow /></a>
          <StarsRow />
        </div>
      </div>
    </section>
  );
}
