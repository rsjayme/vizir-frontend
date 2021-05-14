import { Container } from './styles';
import FalaMaisCalc from '../FalaMaisCalc';

export default function CalcSection() {
  return (
    <Container>
      <div className="content">
        <div className="left-content">
          <h1>
            Faça o cálculo
            <br /> do FaleMais
          </h1>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className="right-content">
          <FalaMaisCalc />
        </div>
      </div>
    </Container>
  );
}
