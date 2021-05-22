import styled from 'styled-components';

export const Container = styled.form`
  max-width: 823px;
  width: 100%;
  margin: 0 auto;

  h2 {
    margin-top: 5rem;
    text-align: center;
    font-weight: 400;
    font-size: 2.4rem;
  }

  .personal-data {
    margin-top: 7rem;

    .personal-line-1 {
      display: flex;
      justify-content: space-between;
    }

    .personal-line-2 {
      margin-top: 5rem;
      display: flex;
      justify-content: space-between;
    }
  }

  .divisory {
    height: 1px;
    width: 100%;
    background: #e5e5e5;
    margin-top: 4.8rem;
    margin-bottom: 4.8rem;
  }

  .address-data {
    margin-top: 4.2rem;

    .address-line-1 {
      display: flex;
      justify-content: space-between;
      width: 100%;

      .cep {
        display: flex;

        p {
          font-size: 1.4rem;

          a {
            display: block;
            margin-top: 4rem;
            margin-left: 1.7rem;
            margin-right: 3.8rem;
            color: #a23ddf;
          }
        }
      }
    }

    .address-line-2 {
      margin-top: 2.4rem;
      display: flex;
      justify-content: space-between;
      margin-bottom: 5.4rem;
      width: 100%;

      .region-container {
        display: flex;
        justify-content: space-between;
      }
    }
  }

  .payment-data {
    margin-top: 5rem;
    margin-bottom: 2.4rem;
  }

  .button-container {
    margin-top: 5.6rem;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;

    button {
      background: #9c49ce;
      color: #fff;
      font-weight: 700;
      border: none;
      border-radius: 8px;
      padding: 1.7rem 7rem;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }

  @media (max-width: 850px) {
    .personal-data {
      display: grid;
      align-items: center;

      .personal-line-1 {
        display: grid;
        grid-row-gap: 2rem;
      }

      .personal-line-2 {
        margin-top: 2rem;
        display: grid;
        grid-row-gap: 2rem;
      }
    }
  }

  @media (max-width: 750px) {
    .address-data {
      .address-line-1 {
        display: grid;
        grid-row-gap: 2rem;
      }

      .address-line-2 {
        display: grid;
        grid-row-gap: 2rem;
        width: 100%;
        margin-bottom: 5.4rem;
      }
    }
  }
`;
