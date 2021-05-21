import { Container } from './styles';

export default function Header({ calcSectionRef, overviewRef }) {
  return (
    <Container>
      <div className="content">
        <nav>
          <img src="assets/logo.svg" alt="Logo" />
          <ul>
            <li>
              <a
                onClick={() =>
                  overviewRef.current.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Vantages
              </a>
            </li>
            <li>
              <a
                onClick={() =>
                  calcSectionRef.current.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Cálculo
              </a>
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
