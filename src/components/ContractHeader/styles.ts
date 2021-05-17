import styled from 'styled-components';

export const Container = styled.header`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 6.5rem;

  .content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;

    .left-content {
      margin-top: 2rem;
      display: flex;

      a {
        font-size: 1.4rem;
        display: flex;
        color: #a23ddf;

        img {
          margin-right: 1.2rem;
        }
      }
    }

    .right-content {
      margin-left: -3rem;
    }
  }

  @media (max-width: 550px) {
    .content {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const Divisory = styled.div`
  width: 100%;
  height: 1px;
  margin-top: 1rem;
  background: #cbb7a5;
`;
