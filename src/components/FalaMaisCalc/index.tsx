import { Container } from './styles';

export default function FalaMaisCalc() {
  return (
    <Container>
      <select>
        <option value="" disabled selected hidden>
          Escolher origem
        </option>
        <option>011 - São Paulo</option>
        <option>012 - São Paulo</option>
        <option>011 - São Paulo</option>
      </select>
    </Container>
  );
}
