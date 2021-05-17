import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 6rem 6.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > h1 {
    text-align: center;
    font-weight: 400;
  }

  > p {
    text-align: center;
    width: 40%;
    margin-top: 1.6rem;
    color: #666666;
    margin-bottom: 4rem;
  }

  .cards-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 2.4rem;
    grid-row-gap: 2rem;
  }

  @media (max-width: 1100px) {
    .cards-container {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 600px) {
      padding: 6rem 2rem;
      > p {
        width: 80%;
      }

      .cards-container {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
`;
