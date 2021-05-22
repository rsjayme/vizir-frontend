import { Container } from './styles';

export default function ContractDetails({ plan }) {
  return (
    <Container>
      <h1>Detalhes da contratação</h1>
      <div className="details">
        <p>Plano {plan} - lorem ipsum sit amet</p>
        <p>
          <span>R$ 00,00</span> / mês
        </p>
      </div>
    </Container>
  );
}
