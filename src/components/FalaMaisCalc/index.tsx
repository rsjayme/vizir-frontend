import { useState } from 'react';
import PlanSelector from '../PlanSelector';
import { Container } from './styles';

export default function FalaMaisCalc() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [hasAtLeastOneChecked, setHasAtLeastOneChecked] = useState([]);
  const [appliedPlans, setAppliedPlans] = useState<boolean[]>([
    false,
    false,
    false,
  ]);

  const plans = [
    {
      name: 'FalaMais 30',
      price: 30,
    },
    {
      name: 'FalaMais 60',
      price: 60,
    },
    {
      name: 'FalaMais 120',
      price: 120,
    },
  ];

  function removeAppliedPlan(e, index: number) {
    e.stopPropagation();
    const mirrorAppledPlans = [...appliedPlans];
    mirrorAppledPlans[index] = false;
    setHasAtLeastOneChecked(mirrorAppledPlans.filter((plan) => plan === true));
    setAppliedPlans(mirrorAppledPlans);
  }

  return (
    <Container
      isModalOpen={isModalOpen}
      hasAtLeastOneChecked={hasAtLeastOneChecked}
    >
      <div className="first-row">
        <div className="container src">
          <p>ORIGEM</p>
          <select>
            <option disabled selected hidden>
              Escolher origem
            </option>
            <option>011 - São Paulo</option>
            <option>012 - São Paulo</option>
            <option>011 - São Paulo</option>
          </select>
        </div>

        <div className="container dst">
          <p>DESTINO</p>
          <select>
            <option disabled selected hidden>
              Escolher destino
            </option>
            <option>011 - São Paulo</option>
            <option>012 - São Paulo</option>
            <option>011 - São Paulo</option>
          </select>
        </div>

        <div className="container time">
          <p>TEMPO</p>
          <select>
            <option disabled selected hidden>
              Escolher tempo
            </option>
            <option>011 - São Paulo</option>
            <option>012 - São Paulo</option>
            <option>011 - São Paulo</option>
          </select>
        </div>
      </div>

      <div className="divisory"></div>

      <div className="second-row">
        <div
          className="container plan"
          onClick={() => setIsModalOpen(!isModalOpen)}
        >
          <p>PLANO</p>
          <div className="plan-select-container">
            <div className="plans-box-container">
              {hasAtLeastOneChecked.length === 0 ? (
                <p>Escolher o plano</p>
              ) : (
                appliedPlans.map(
                  (plan, index) =>
                    plan && (
                      <div className="plan-box">
                        <p>
                          {plans[index].name}{' '}
                          <div
                            className="x-container"
                            onClick={(e) => removeAppliedPlan(e, index)}
                          >
                            <img src="/assets/x.svg" />
                          </div>
                        </p>
                      </div>
                    )
                )
              )}
            </div>
            <select disabled></select>
          </div>
          <PlanSelector
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            setHasAtLeastOneChecked={setHasAtLeastOneChecked}
            setAppliedPlans={setAppliedPlans}
          />
        </div>
      </div>

      <div className="divisory"></div>

      <div className="third-row container">
        <div className="total">
          <p>Total</p>
          <p>R$ 0,00</p>
        </div>

        {hasAtLeastOneChecked.length > 0 && (
          <div className="checkout">
            <div className="divisory"></div>
            <button>Contratar</button>
          </div>
        )}
      </div>
    </Container>
  );
}
