import { Container } from './styles';

export default function Footer() {
  return (
    <Container>
      <div className="content">
        <nav>
          <div className="combo">
            <p className="subtitle">Combo</p>
            <p>
              <a href="#">Planos</a>
            </p>
            <p>
              <a href="#">Atendimentos</a>
            </p>
            <p>
              <a href="#">Serviços adicionais</a>
            </p>
          </div>

          <div className="cellphone">
            <p className="subtitle">Celular</p>
            <p>
              <a href="#">Planos</a>
            </p>
            <p>
              <a href="#">Atendimentos</a>
            </p>
            <p>
              <a href="#">Serviços adicionais</a>
            </p>
          </div>

          <div className="fixed">
            <p className="subtitle">Fixo</p>
            <p>
              <a href="#">Planos</a>
            </p>
            <p>
              <a href="#">Atendimentos</a>
            </p>
            <p>
              <a href="#">Serviços adicionais</a>
            </p>
          </div>

          <div className="about">
            <p className="subtitle">Sobre</p>
            <p>
              <a href="#">A empresa</a>
            </p>
            <p>
              <a href="#">Franquia</a>
            </p>
            <p>
              <a href="#">Sobre nós</a>
            </p>
          </div>

          <div className="community">
            <p className="subtitle">Comunidade</p>
            <p>
              <a href="#">Acessibilidade</a>
            </p>
            <p>
              <a href="#">Diversidade e pertencimento</a>
            </p>
            <p>
              <a href="#">telzir.org</a>
            </p>
          </div>
        </nav>

        <div className="divisory"></div>

        <div className="logo">
          <img src="assets/logo.svg" alt="Logo" />
          <span>2021</span>
        </div>
      </div>
    </Container>
  );
}
