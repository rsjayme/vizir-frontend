import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <div className="content">
        <nav>
          <img src="assets/logo.svg" alt="Logo" />
          <ul>
            <li>
              <a href="#">Vantages</a>
            </li>
            <li>
              <a href="#">Cálculo</a>
            </li>
            <li>
              <a className="highlighted-link" href="#">
                Contratar
              </a>
            </li>
          </ul>
        </nav>

        <section className="header-content">
          <h1>
            Pague menos, <br />
            <span>Fale Mais</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button>Saiba mais</button>
        </section>
      </div>
    </Container>
  );
}
