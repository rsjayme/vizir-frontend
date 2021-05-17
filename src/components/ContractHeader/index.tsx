import { Container, Divisory } from './styles';

export default function ContractHeader() {
  return (
    <>
      <Container>
        <div className="content">
          <div className="left-content">
            <a href="/">
              <img src="/assets/chevron-left.svg" />
              Voltar para página inicial
            </a>
          </div>

          <div className="right-content">
            <img src="/assets/logo.svg" alt="logo" />
          </div>
        </div>
      </Container>
      <Divisory />
    </>
  );
}
