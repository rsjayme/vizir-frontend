import { useState } from 'react';
import { Container } from './styles';

export default function PlanSelector({
  isModalOpen,
  setIsModalOpen,
  setHasAtLeastOneChecked,
  setAppliedPlans,
}) {
  const [checkedPlans, setCheckedPlans] = useState<boolean[]>([
    false,
    false,
    false,
  ]);

  function handleCheckChange(index: number) {
    const mirrorCheckedPlans = [...checkedPlans];
    mirrorCheckedPlans[index] = !mirrorCheckedPlans[index];
    setCheckedPlans(mirrorCheckedPlans);
  }

  function handleButtonClick(e) {
    e.preventDefault();
    setAppliedPlans(checkedPlans);
    setHasAtLeastOneChecked(checkedPlans.filter((plan) => plan === true));
    setIsModalOpen(false);
  }

  return (
    <Container
      onClick={(event) => event.stopPropagation()}
      isModalOpen={isModalOpen}
    >
      <p>Escolha um ou mais planos:</p>
      <div className="plans">
        <div className="falemais-30">
          <input
            checked={checkedPlans[0]}
            onChange={() => handleCheckChange(0)}
            type="checkbox"
            name="check-falemais-30"
            id="checkFaleMais30"
          />
          <label htmlFor="checkFaleMais30">FaleMais 30</label>
        </div>

        <div className="falemais-60">
          <input
            checked={checkedPlans[1]}
            onChange={() => handleCheckChange(1)}
            type="checkbox"
            name="check-falemais-60"
            id="checkFaleMais60"
          />
          <label htmlFor="checkFaleMais60">FaleMais 60</label>
        </div>

        <div className="falemais-120">
          <input
            checked={checkedPlans[2]}
            onChange={() => handleCheckChange(2)}
            type="checkbox"
            name="check-falemais-120"
            id="checkFaleMais120"
          />
          <label htmlFor="checkFaleMais120">FaleMais 120</label>
        </div>
      </div>

      <button onClick={handleButtonClick}>Aplicar</button>
    </Container>
  );
}
