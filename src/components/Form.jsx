import { useState } from 'react';
import { Icons } from './Icons.jsx';

const LEAD_ROUTING = [
  { name: 'Pedro Amaral', email: 'pedrobamaral@yahoo.com.br', whatsapp: '5511972021019' },
  { name: 'Rafael Mota', email: 'rafael.mota@conversaojuridica.com.br', whatsapp: '5511912611616' },
];

function getNextConsultant() {
  const key = 'amaral_shopee_lead_round_robin';
  const next = (parseInt(localStorage.getItem(key) || '0', 10) + 1) % LEAD_ROUTING.length;
  localStorage.setItem(key, String(next));
  return LEAD_ROUTING[next];
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [routedTo, setRoutedTo] = useState(null);
  const [data, setData] = useState({
    nome: '',
    email: '',
    telefone: '',
    perfil: '',
    situacao: '',
    mensagem: '',
  });
  const handle = (k) => (e) => setData((d) => ({ ...d, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const consultant = getNextConsultant();
    setRoutedTo(consultant);
    setSubmitted(true);

    // Conversao: formulario proprio preenchido (o WhatsApp e aberto logo abaixo).
    // O botao de envio nao e um link, entao a delegacao global de cliques nao o cobre.
    if (typeof window !== 'undefined' && window.__track) window.__track('formulario');

    const msg = encodeURIComponent(
      `Olá, ${consultant.name}! Meu nome é ${data.nome}. ` +
      `Sou ${data.perfil || 'usuário'} na Shopee. ` +
      `Situação: ${data.situacao || 'não informada'}. ` +
      (data.mensagem ? `Detalhes: ${data.mensagem}` : '')
    );
    setTimeout(() => {
      window.open(`https://wa.me/${consultant.whatsapp}?text=${msg}`, '_blank', 'noopener');
    }, 1200);
  };

  return (
    <section className="section form-section" id="contato">
      <div className="wrap">
        <div className="form-grid">
          <div>
            <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.7)' }}>Fale conosco</span>
            <h2 style={{ marginTop: 12 }}>Conte o seu caso e receba uma análise inicial sem compromisso</h2>
            <p className="lead">Preencha o formulário e nossa equipe entrará em contato em até 24 horas úteis para entender a sua situação e indicar o melhor caminho.</p>
            <div className="form-points">
              <div className="form-point"><span className="check"><Icons.Check /></span>Análise inicial do seu caso</div>
              <div className="form-point"><span className="check"><Icons.Check /></span>Atendimento 100% remoto, em todo o Brasil</div>
              <div className="form-point"><span className="check"><Icons.Check /></span>Equipe especializada em marketplaces</div>
              <div className="form-point"><span className="check"><Icons.Check /></span>Mais de 10 mil clientes atendidos</div>
            </div>
          </div>

          <div className="form-card">
            {submitted ? (
              <div className="form-success">
                <div className="ok"><Icons.Check /></div>
                <h3>Mensagem recebida!</h3>
                <p>
                  Você será redirecionado para o WhatsApp de <strong>{routedTo?.name}</strong>,
                  da nossa equipe. Caso não abra automaticamente, clique no botão abaixo.
                </p>
                <a
                  id="lead"
                  href={`https://wa.me/${routedTo?.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta"
                  style={{ marginTop: 20 }}
                >
                  Abrir WhatsApp <Icons.Arrow />
                </a>
              </div>
            ) : (
              <form onSubmit={submit} noValidate>
                <h3>Fale com um especialista</h3>
                <p className="sub">Preencha os campos abaixo. Leva menos de um minuto.</p>
                <div className="form-row">
                  <label htmlFor="form-nome">Nome completo</label>
                  <input
                    id="form-nome"
                    name="nome"
                    required
                    type="text"
                    autoComplete="name"
                    value={data.nome}
                    onChange={handle('nome')}
                    placeholder="Como devemos te chamar"
                  />
                </div>
                <div className="form-row two">
                  <div>
                    <label htmlFor="form-email">E-mail</label>
                    <input
                      id="form-email"
                      name="email"
                      required
                      type="email"
                      autoComplete="email"
                      value={data.email}
                      onChange={handle('email')}
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="form-telefone">WhatsApp</label>
                    <input
                      id="form-telefone"
                      name="telefone"
                      required
                      type="tel"
                      autoComplete="tel"
                      value={data.telefone}
                      onChange={handle('telefone')}
                      placeholder="(11) 90000-0000"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <label htmlFor="form-perfil">Você é…</label>
                  <select
                    id="form-perfil"
                    name="perfil"
                    required
                    value={data.perfil}
                    onChange={handle('perfil')}
                  >
                    <option value="">Selecione…</option>
                    <option>Vendedor</option>
                    <option>Comprador</option>
                    <option>Entregador</option>
                    <option>Outro</option>
                  </select>
                </div>
                <div className="form-row">
                  <label htmlFor="form-situacao">Situação atual</label>
                  <select
                    id="form-situacao"
                    name="situacao"
                    required
                    value={data.situacao}
                    onChange={handle('situacao')}
                  >
                    <option value="">Selecione…</option>
                    <option>Conta suspensa há menos de 30 dias</option>
                    <option>Conta suspensa há mais de 30 dias</option>
                    <option>Saldo retido pela plataforma</option>
                    <option>Estou para ser suspenso / em análise</option>
                    <option>Outra situação</option>
                  </select>
                </div>
                <div className="form-row">
                  <label htmlFor="form-mensagem">Conte um pouco sobre o seu caso (opcional)</label>
                  <textarea
                    id="form-mensagem"
                    name="mensagem"
                    value={data.mensagem}
                    onChange={handle('mensagem')}
                    placeholder="Descreva quando aconteceu, qual o motivo informado, valor retido, etc."
                  />
                </div>
                <button id="lead" type="submit" className="cta">
                  Enviar e falar no WhatsApp <Icons.Arrow />
                </button>
                <p className="privacy">
                  Ao enviar, você concorda com o tratamento dos seus dados conforme a LGPD. Não compartilhamos suas informações.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
