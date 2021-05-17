import styled from 'styled-components';

export const Container = styled.div`
  padding: 4rem 4rem;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: 1.4rem;
    font-weight: 500;
    margin: 1.6rem auto;
  }

  p.subtitle {
    font-size: 1.4rem;
    text-align: center;
    margin-bottom: 0.8rem;
  }

  h5 {
    font-size: 1.4rem;
    margin-bottom: 0.8rem;
  }

  p.price {
    font-size: 4rem;
    font-weight: 400;
    display: flex;
    margin-bottom: 1.6rem;

    span {
      margin-top: 0.5rem;
      margin-left: 0.8rem;
      font-size: 1.6rem;
      display: flex;
      flex-direction: column;

      > span {
        margin-left: -0.2rem;
        margin-top: 0.2rem;
      }
    }
  }

  span.custom {
    font-size: 1.6rem;
    font-weight: 500;
    margin-bottom: 2.2rem;
    text-align: center;
  }

  .perks-text {
    color: #666;
    font-size: 1.4rem;

    > img {
      margin-right: 0.8rem;
    }

    & + .perks-text {
      margin-top: 0.8rem;
    }
  }

  button {
    margin-top: 2.4rem;
    padding: 1rem 3.1rem;
    background: none;
    border: 1px solid #ab49ce;
    color: #ab49ce;
    font-weight: 900;
    font-size: 1.6rem;
    border-radius: 8px;
    transition: all 0.2s;

    &:hover {
      color: white;
      background: #ab49ce;
    }
  }
`;
