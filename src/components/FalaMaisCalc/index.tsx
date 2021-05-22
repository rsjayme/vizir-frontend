import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { api } from '../../services/api';
import PlanSelector from '../PlanSelector';
import { Container } from './styles';

export default function FalaMaisCalc() {
  const router = useRouter();
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
  const destinationSelectRef = useRef<HTMLSelectElement>(null);
  const [timeSelect, setTimeSelect] = useState('');
  const [dddsList, setDddsList] = useState([]);
  const [plans, setPlans] = useState([]);
  const [priceList, setPriceList] = useState([]);
  const [totalValue, setTotalValue] = useState({
    0: 0,
    30: -1,
    60: -1,
    120: -1,
  });

  useEffect(() => {
    api.get('/ddds').then((response) => {
      setDddsList(response.data);
    });

    api.get('/plans').then((response) => {
      setPlans(response.data);
    });

    api.get('/price-list').then((response) => {
      setPriceList(response.data);
    });
  }, []);

  useEffect(() => {
    // atualiza o estado destinationselect de acordo com as mudanças do source,
    // ref utilizado pra facilitar pois o novo valor do destination pode variar dependendo das opções selecionadas
    if (sourceSelect === destinationSelect) {
      setDestinationSelect(destinationSelectRef.current.value);
    }
  }, [sourceSelect]);

  // Cálculo é feito aqui
  useEffect(() => {
    if (
      sourceSelect &&
      destinationSelect &&
      timeSelect &&
      sourceSelect !== destinationSelect
    ) {
      const [{ value: pricePerMin }] = priceList.filter(
        (data) => data.src === sourceSelect && data.dst === destinationSelect
      );

      const total = {
        0: Number(timeSelect) * pricePerMin,
        30: -1,
        60: -1,
        120: -1,
      };

      if (hasAtLeastOneChecked.length > 0) {
        appliedPlans.map((plan, index) => {
          if (plan === true) {
            const bonus = plans[index].bonus;
            const minutesToPay = Number(timeSelect) - bonus;

            if (minutesToPay <= 0) {
              total[bonus] = 0;
            } else {
              total[bonus] = (minutesToPay * pricePerMin * 1.1).toFixed(2);
            }
          }
        });
      }

      setTotalValue(total);
    }
  }, [hasAtLeastOneChecked, sourceSelect, destinationSelect, timeSelect]);

  function handleSourceSelection(e) {
    const newDestionation = dddsList.filter((uf) => uf.ddd !== e.target.value);
    // atualiza o select de destino de acordo com o select de origem.
    console.log(newDestionation);
    setDestinationUfs(newDestionation);

    // atualiza o estado de origem com o valor selecionado no select.
    setSourceSelect(e.target.value);
  }

  function handleDestinationSelection(e) {
    // atualiza o estado de destino com o valor selecionado no select.
    setDestinationSelect(e.target.value);
  }

  function handleTimeSelection(e) {
    // atualiza o estado de tempo com o valor selecionado no select.
    setTimeSelect(e.target.value);
  }

  function removeAppliedPlan(e, index: number) {
    e.stopPropagation();
    const mirrorAppledPlans = [...appliedPlans];
    mirrorAppledPlans[index] = false;
    setHasAtLeastOneChecked(mirrorAppledPlans.filter((plan) => plan === true));
    setAppliedPlans(mirrorAppledPlans);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    let highestSelectedPlan = '';
    appliedPlans.map((appliedPlan, index) => {
      if (appliedPlan === true) {
        highestSelectedPlan = plans[index].bonus;
      }
    });
    console.log(highestSelectedPlan);
    router.push(`/contract/${highestSelectedPlan}`);
  }

  return (
    <Container
      isModalOpen={isModalOpen}
      hasAtLeastOneChecked={hasAtLeastOneChecked}
      onSubmit={handleFormSubmit}
    >
      <div className="first-row">
        <div className="container src">
          <p>ORIGEM</p>
          <select defaultValue="default" onChange={handleSourceSelection}>
            <option value="default" disabled hidden>
              Escolher origem
            </option>
            {dddsList?.map((uf) => (
              <option value={uf.ddd} key={uf.ddd}>
                {uf.ddd} - {uf.uf}
              </option>
            ))}
          </select>
        </div>

        <div className="container dst">
          <p>DESTINO</p>
          <select
            ref={destinationSelectRef}
            defaultValue="default"
            onChange={handleDestinationSelection}
          >
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
            <option value="10">10 minutos</option>
            <option value="20">20 minutos</option>
            <option value="30">30 minutos</option>
            <option value="40">40 minutos</option>
            <option value="50">50 minutos</option>
            <option value="60">60 minutos</option>
            <option value="90">90 minutos</option>
            <option value="120">120 minutos</option>
            <option value="180">180 minutos</option>
            <option value="240">240 minutos</option>

            <option value="80">80 minutos</option>
            <option value="200">200 minutos</option>
            <option value="100">100 minutos</option>
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
                      <div key={index} className="plan-box">
                        <span>
                          {plans[index].name}
                          <div
                            className="x-container"
                            onClick={(e) => removeAppliedPlan(e, index)}
                          >
                            <img src="/assets/x.svg" />
                          </div>
                        </span>
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
          <p>
            {new Intl.NumberFormat('pt-br', {
              style: 'currency',
              currency: 'BRL',
            }).format(totalValue[0])}
          </p>
        </div>

        {plans.map(
          (plan, index) =>
            totalValue[plan.bonus] >= 0 &&
            appliedPlans[index] && (
              <div key={plan.bonus} className="total">
                <p>Total FaleMais {plan.bonus}</p>
                <p>
                  {new Intl.NumberFormat('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(totalValue[plan.bonus])}
                </p>
              </div>
            )
        )}

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
