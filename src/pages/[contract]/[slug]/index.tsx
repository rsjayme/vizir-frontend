import ContractHeader from '../../../components/ContractHeader';
import ContractForm from '../../../components/ContractForm';
import { Container } from '../../../styles/contract';

export default function Contract() {
  return (
    <>
      <ContractHeader />
      <Container>
        <h1>Finalizar contratação</h1>
        <ContractForm />
      </Container>
    </>
  );
}
