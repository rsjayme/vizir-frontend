import { Container } from './styles';
import FormComponent from '../../components/FormComponent';
import ContractDetails from '../ContractDetails';
import CCInput from '../CCInput';
import { useState } from 'react';

export default function ContractForm({ plan }) {
  return (
    <Container>
      <h2>Dados pessoais</h2>

      <div className="personal-data">
        <div className="personal-line-1">
          <FormComponent FormType="input" title="Nome" type="text" />
          <FormComponent FormType="input" title="Sobrenome" type="text" />
        </div>
        <div className="personal-line-2">
          <FormComponent
            FormType="input"
            title="Telefone"
            type="tel"
            pattern="\([0-9]{2}\) [0-9]{4,6}-[0-9]{3,4}$"
          />
          <FormComponent FormType="input" title="E-mail" type="email" />
        </div>
      </div>

      <div className="divisory"></div>

      <h2>Endereço de cobrança</h2>

      <div className="address-data">
        <div className="address-line-1">
          <div className="cep">
            <FormComponent
              FormType="input"
              title="CEP"
              type="text"
              width="20rem"
            />
            <p>
              <a href="#">Não sei meu cep</a>
            </p>
          </div>
          <FormComponent FormType="input" title="Endereço" type="text" />
        </div>

        <div className="address-line-2">
          <FormComponent
            FormType="input"
            title="Número"
            type="number"
            width="13rem"
          />

          <FormComponent
            FormType="input"
            title="Complemento"
            type="text"
            width="18.2rem"
          />

          <FormComponent
            FormType="select"
            title="Cidade"
            type="text"
            width="30rem"
          >
            <option>Selecione a cidade</option>
            <option>Goiânia</option>
            <option>São Paulo</option>
          </FormComponent>
          <FormComponent
            FormType="select"
            title="Estado"
            type="text"
            width="6.5rem"
          >
            <option></option>
            <option>GO</option>
            <option>SP</option>
          </FormComponent>
        </div>
      </div>

      <ContractDetails plan={plan} />

      <h2>Pagamento</h2>

      <div className="payment-data">
        <FormComponent
          FormType="input"
          title="Nome no cartão"
          width="100%"
          type="text"
        />
      </div>
      <CCInput />

      <div className="button-container">
        <button type="submit">Finalizar e contratar</button>
      </div>
    </Container>
  );
}
