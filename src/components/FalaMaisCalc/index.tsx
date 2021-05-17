import { useState } from 'react';
import { Container } from './styles';

export default function FalaMaisCalc() {
  const [isPlanSelectFocused, setIsPlanSelectFocused] =
    useState<boolean>(false);

  return (
    <Container isPlanSelectFocused={isPlanSelectFocused}>
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
        <div className="container plan">
          <p>PLANO</p>
          <select
            onFocus={() => setIsPlanSelectFocused(true)}
            onBlurCapture={() => setIsPlanSelectFocused(false)}
          >
            <option disabled selected hidden>
              Escolher o plano
            </option>
            <option>teste</option>
          </select>

          <div className="plan-selector">
            <p>Escolha um ou mais planos:</p>
            <div className="plans">
              <div className="falemais-30">
                <input
                  type="checkbox"
                  name="check-falemais-30"
                  id="checkFaleMais30"
                />
                <label htmlFor="checkFaleMais30">FaleMais 30</label>
              </div>

              <div className="falemais-60">
                <input
                  type="checkbox"
                  name="check-falemais-60"
                  id="checkFaleMais60"
                />
                <label htmlFor="checkFaleMais60">FaleMais 60</label>
              </div>

              <div className="falemais-120">
                <input
                  type="checkbox"
                  name="check-falemais-120"
                  id="checkFaleMais120"
                />
                <label htmlFor="checkFaleMais120">FaleMais 120</label>
              </div>
            </div>
            <button>Aplicar</button>
          </div>
        </div>
      </div>

      <div className="divisory"></div>

      <div className="third-row container">
        <p>Total</p>
        <p>R$ 0,00</p>
      </div>
    </Container>
  );
}
