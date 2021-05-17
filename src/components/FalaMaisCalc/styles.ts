import styled from 'styled-components';

interface IContainerProps {
  isPlanSelectFocused: boolean;
}

export const Container = styled.form<IContainerProps>`
  background: #fff;
  border: 1px solid #e5e5e5;
  font-size: 1.4rem;
  border-radius: 8px;

  select {
    font-size: 1.4rem;
    background: none;
    border: 0px;
    outline: 0px;
    margin-top: 1rem;
    color: #a8a8a8;
  }

  .container {
    padding: 1.5rem 2.5rem;
  }

  .first-row {
    display: flex;

    .src {
      border-right: 1px solid #e5e5e5;
    }

    .dst {
      border-right: 1px solid #e5e5e5;
    }
  }

  .divisory {
    width: 100%;
    height: 1px;
    background: #e5e5e5;
  }

  .second-row {
    width: 100%;
    select {
      width: 100%;
    }

    .plan {
      position: relative;
      ${(props) => props.isPlanSelectFocused && 'border: 1px solid #666666;'}
      border-radius: 8px;

      .plan-selector {
        position: absolute;
        left: 0.6%;
        top: 85%;
        background: #fff;
        border: 1px solid #e5e5e5;
        border-radius: 8px;
        padding: 1.9rem;
        width: 99%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        z-index: 999;

        p {
          align-self: flex-start;
        }

        button {
          margin-top: 2.5rem;
          padding: 0.8rem 1.6rem;
          background: none;
          border: 1px solid #ab49ce;
          border-radius: 8px;

          color: #ab49ce;
          font-size: 1.6rem;
          font-weight: 900;
        }

        .plans {
          margin-top: 1.2rem;
          display: flex;
          width: 100%;
          justify-content: space-between;

          label {
            margin-left: 0.8rem;
          }
        }
      }
    }
  }

  .third-row {
    display: flex;
    justify-content: space-between;

    p {
      font-weight: bold;
    }
  }

  @media (max-width: 500px) {
    .container {
      padding: 1rem 0.7rem;
    }
  }
`;
