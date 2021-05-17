import { InputHTMLAttributes, useState } from 'react';
import { Container } from './styles';

export default function CCInput({
  ...rest
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <Container>
      <p>Número do cartão</p>
      <div className="input-container">
        <div className="cc-line-1">
          <input placeholder="1234 1234 1234 1234" type="number" />
          <img src="/assets/Cards.png" alt="Cards" />
        </div>

        <div className="cc-line-2">
          <div className="date-input">
            <input placeholder="MM / YY" type="text" />
          </div>
          <div className="cvc-input">
            <input placeholder="CVC" type="number" />
            <img src="/assets/cvc.png" alt="CVC" />
          </div>
        </div>
      </div>
    </Container>
  );
}
