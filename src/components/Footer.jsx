export function Footer() {
  return (
    <footer className="site">
      <div className="wrap">
        <div className="foot-top">
          <div>
            <div className="foot-brand">
              <span className="mark" aria-hidden="true">A</span>
              <span>Amaral &amp; Bohrer Advogados</span>
            </div>
            <p>Escritório especializado na defesa de vendedores em marketplaces. Atuamos em todo o Brasil de forma remota.</p>
          </div>
          <div className="foot-col">
            <h3>Contato</h3>
            <ul>
              <li>contato@amaraladvogados.app</li>
              <li>(11) 99682-4517</li>
              <li><a href="#contato">Formulário de atendimento</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h3>Áreas de atuação</h3>
            <ul>
              <li>Shopee</li>
              <li>Mercado Livre</li>
              <li>Amazon Seller</li>
              <li>Magazine Luiza</li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} Amaral &amp; Bohrer Advogados. Todos os direitos reservados.</span>
          <span>OAB/RS 7.789</span>
        </div>
        <p className="foot-disclaimer">
          Este site não faz parte da Shopee, do Google, do Facebook ou de suas controladoras, nem é afiliado a essas empresas. Não oferecemos nenhum tipo de serviço oficial dessas plataformas ou do governo e não praticamos qualquer tipo de fraude.
        </p>
      </div>
    </footer>
  );
}
