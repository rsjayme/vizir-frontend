import styled from 'styled-components';

export const Container = styled.div`
  p {
    font-size: 1.4rem;
    margin-bottom: 0.8rem;
  }

  .input-container {
    border: 1px solid #e5e5e5;
    border-radius: 8px;

    input {
      background: none;
      border: 0;
      height: 4rem;
      padding: 0 1rem;
      width: 100%;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    input[type='number'] {
      -moz-appearance: textfield;
    }

    .cc-line-1 {
      display: flex;
      justify-content: space-between;
      align-items: center;

      img {
        margin-right: 1.8rem;
      }
    }

    .cc-line-2 {
      display: flex;
      border-top: 1px solid #e5e5e5;

      .date-input {
        flex: 1;
        border-right: 1px solid #e5e5e5;
      }

      .cvc-input {
        display: flex;
        align-items: center;
        flex: 1;
        border-left: 1px solid #e5e5e5;

        img {
          margin-right: 1.8rem;
        }
      }
    }
  }
`;
