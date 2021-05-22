import { useRouter } from 'next/router';
import ContractHeader from '../../../components/ContractHeader';
import ContractForm from '../../../components/ContractForm';
import { Container } from '../../../styles/contract';
import { useEffect } from 'react';

export default function Contract() {
  const router = useRouter();

  const { plan } = router.query;

  useEffect(() => {
    console.log(plan);
    if (plan !== '30' && plan !== '60' && plan !== '120' && plan) {
      router.push('/');
    }
  }, [plan]);

  return (
    <>
      <ContractHeader />
      <Container>
        <h1>Finalizar contratação</h1>
        <ContractForm plan={plan} />
      </Container>
    </>
  );
}
