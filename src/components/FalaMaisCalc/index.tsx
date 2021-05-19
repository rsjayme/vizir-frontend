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
  const [destinationUfs, setDestinationUfs] = useState([]);

  const [sourceSelect, setSourceSelect] = useState('');
  const [destinationSelect, setDestinationSelect] = useState('');
  const [timeSelect, setTimeSelect] = useState('');

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

  const ufs = [
    {
      ddd: '011',
      uf: 'SP',
    },
    {
      ddd: '016',
      uf: 'LI',
    },
    {
      ddd: '017',
      uf: 'SP',
    },
    {
      ddd: '018',
      uf: 'SP',
    },
  ];

  const priceList = [
    {
      src: '011',
      dst: '016',
      value: 1.9,
    },
    {
      src: '011',
      dst: '017',
      value: 1.7,
    },
    {
      src: '011',
      dst: '018',
      value: 0.9,
    },
    {
      src: '016',
      dst: '011',
      value: 2.9,
    },
    {
      src: '016',
      dst: '017',
      value: 1.6,
    },
    {
      src: '016',
      dst: '018',
      value: 0.9,
    },
    {
      src: '017',
      dst: '011',
      value: 2.7,
    },
    {
      src: '017',
      dst: '016',
      value: 1.7,
    },
    {
      src: '017',
      dst: '018',
      value: 2.7,
    },
    {
      src: '018',
      dst: '011',
      value: 1.9,
    },
    {
      src: '018',
      dst: '016',
      value: 0.9,
    },
    {
      src: '018',
      dst: '017',
      value: 1.9,
    },
  ];

  function handleSourceSelection(e) {
    const newDestionation = ufs.filter((uf) => uf.ddd !== e.target.value);

    // atualiza o select de destino de acordo com o select de origem.
    setDestinationUfs(newDestionation);

    // atualiza o estado de origem com o valor selecionado no select.
    setSourceSelect(e.target.value);
  }

  function handleDestinationSelection(e) {
    // atualiza o estado de destino com o valor selecionado no select.
    setDestinationSelect(e.target.value);
  }

  function handleTimeSelection(e) {
    setTimeSelect(e.target.value);
  }

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
          <select defaultValue="default" onChange={handleSourceSelection}>
            <option value="default" disabled hidden>
              Escolher origem
            </option>
            {ufs.map((uf) => (
              <option value={uf.ddd} key={uf.ddd}>
                {uf.ddd} - {uf.uf}
              </option>
            ))}
          </select>
        </div>

        <div className="container dst">
          <p>DESTINO</p>
          <select defaultValue="default" onChange={handleDestinationSelection}>
            <option value="default" disabled hidden>
              Escolher destino
            </option>
            {destinationUfs.map((uf) => (
              <option value={uf.ddd} key={uf.ddd}>
                {uf.ddd} - {uf.uf}
              </option>
            ))}
          </select>
        </div>

        <div className="container time">
          <p>TEMPO</p>
          <select onChange={handleTimeSelection} defaultValue="default">
            <option value="default" disabled hidden>
              Escolher tempo
            </option>
            <option>10 minutos</option>
            <option>20 minutos</option>
            <option>30 minutos</option>
            <option>40 minutos</option>
            <option>50 minutos</option>
            <option>60 minutos</option>
            <option>90 minutos</option>
            <option>120 minutos</option>
            <option>180 minutos</option>
            <option>240 minutos</option>
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
                          {plans[index].name}
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
