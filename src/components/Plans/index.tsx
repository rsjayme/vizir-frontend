import PlanCard from '../PlanCard';
import { Container } from './styles';

export default function Plans() {
  return (
    <Container>
      <h1>Planos</h1>
      <p>
        Excepteur sint occaecat cupidatatnon proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum.
      </p>

      <div className="cards-container">
        <PlanCard
          buttonText="Contratar"
          title="FaleMais 30"
          img="assets/blob1.png"
          price="00,00"
          perks={[
            'Unlimited file uploads',
            'Unlimited file uploads',
            'Unlimited file uploads',
          ]}
        />

        <PlanCard
          buttonText="Contratar"
          title="FaleMais 60"
          img="assets/blob2.png"
          price="00,00"
          perks={[
            'Unlimited file uploads',
            'Unlimited file uploads',
            'Unlimited file uploads',
          ]}
        />

        <PlanCard
          buttonText="Contratar"
          title="FaleMais 120"
          img="assets/blob3.png"
          price="00,00"
          perks={[
            'Unlimited file uploads',
            'Unlimited file uploads',
            'Unlimited file uploads',
          ]}
        />

        <PlanCard
          buttonText="Customizar"
          title="Personalizado"
          img="assets/blob4.png"
          perks={[
            'Unlimited file uploads',
            'Unlimited file uploads',
            'Unlimited file uploads',
          ]}
        />
      </div>
    </Container>
  );
}
