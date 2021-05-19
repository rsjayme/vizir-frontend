import styled from 'styled-components';

interface IContainerProps {
  isModalOpen: boolean;
  hasAtLeastOneChecked: any[];
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
      border: 1px solid rgba(102, 102, 102, 0);
      ${(props) => props.isModalOpen && 'border: 1px solid #666666;'}
      border-radius: 8px;
      cursor: pointer;

      .plan-select-container {
        display: flex;
        justify-content: ${(props) =>
          props.hasAtLeastOneChecked.length === 0
            ? 'space-between'
            : 'space-between'};

        .plans-box-container {
          display: flex;
          align-items: center;
          justify-content: left;
        }

        p {
          margin-top: 1rem;
          margin-left: 0.5rem;
          color: #a8a8a8;
        }

        select {
          width: 5%;
        }

        .plan-box {
          & + .plan-box {
            margin-left: 1.2rem;
          }

          p {
            margin-left: -0.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid red;
            width: 11rem;
            height: 2rem;
            border-radius: 32px;
            border: 1px solid #666666;
            color: #000000;

            .x-container {
              height: 100%;
              display: flex;
              align-items: center;
              img {
                margin-left: 0.5rem;
                width: 1rem;
                height: 1rem;

                &:hover {
                  filter: invert(44%) sepia(30%) saturate(2011%)
                    hue-rotate(242deg) brightness(81%) contrast(99%);
                }
              }
            }
          }
        }
      }
    }
  }

  .third-row {
    .total {
      display: flex;
      justify-content: space-between;

      p {
        font-weight: bold;
      }
    }

    .checkout {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .divisory {
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
      }

      button {
        padding: 1.5rem 11rem;
        background: #9c49ce;
        color: #fff;
        border-radius: 8px;
        font-weight: 700;
        border: none;
        transition: filter 0.2s;

        &:hover {
          filter: brightness(0.8);
        }
      }
    }
  }

  @media (max-width: 500px) {
    .container {
      padding: 1rem 0.7rem;
    }
  }
`;
