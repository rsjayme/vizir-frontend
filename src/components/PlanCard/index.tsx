import { Container } from './styles';

interface IPlanCard {
  title: string;
  price?: string;
  buttonText: string;
  img: string;
  perks: string[];
}

export default function PlanCard({
  title,
  price,
  buttonText,
  img,
  perks,
}: IPlanCard) {
  const priceFormatted = price?.split(',');

  return (
    <Container>
      <img src={img} alt="Plan" />
      <h3>{title}</h3>
      {price ? (
        <p className="price">
          {priceFormatted[0]},
          <span>
            {priceFormatted[1]}
            <span>/mês</span>
          </span>
        </p>
      ) : (
        <span className="custom">
          Customize o plano <br />
          do seu jeito!
        </span>
      )}
      <p className="subtitle">For organizing every corner of your life.</p>
      <h5>Everything in Personal, plus</h5>
      {perks.map((perk, index) => (
        <p key={index} className="perks-text">
          <img src="assets/check.svg" alt="Check" />
          {perk}
        </p>
      ))}

      <button>{buttonText}</button>
    </Container>
  );
}
